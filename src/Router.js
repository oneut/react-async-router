import History from "./History";
import React from "react";
import RouteMatcher from "./RouteMatcher";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/fromPromise";

export default class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: null
        };

        this.attributes = {};

        this.routes = {};

        this.stream = null;

        // Settings History.
        this.initHistory();

        // Settings RxJS Stream.
        this.initStream();

        // Settings Routes.
        this.addRoutes(props.children);
    }

    initHistory() {
        History.initialHistory(this.props.history);
        History.setRequestCallback(this.request.bind(this));
        History.listen();
    }

    initStream() {
        this.stream = new Subject();
        this.stream.map((pathname) => this.normalizePathname(pathname))
            .switchMap((pathname) => this.renderer(pathname))
            .subscribe((component) => this.setComponent(component));
    }

    renderer(pathname) {
        for (const route in this.routes) {
            if (!(this.routes.hasOwnProperty(route))) continue;

            const routeMatcher = RouteMatcher.make(route, pathname);
            if (routeMatcher.success()) {
                const render = this.routes[route];
                if (typeof render !== 'function') {
                    return render;
                }

                return render(pathname, routeMatcher.getParams());
            }
        }

        return null;
    }

    /**
     * Add routes.
     */

    addRoutes(routes, parent) {
        React.Children.toArray(routes).forEach((route) => this.addRoute(route, parent));
    }

    /**
     * Add route.
     */

    addRoute(route, parent) {
        const {path, component, children} = route.props;

        const render = async (pathname, params) => {
            const prevAttributes = Object.assign({}, this.attributes);
            const attributes = {
                pathname,
                params,
            };
            this.attributes  = Object.assign({}, attributes);

            if (this.isFunction(component.initialPropsWillGet)) {
                component.initialPropsWillGet(attributes, prevAttributes);
            }

            let data         = {};
            if (this.isFunction(component.getInitialProps)) {
                data = await component.getInitialProps(attributes, prevAttributes) || {};
            }

            return React.createElement(component, Object.assign(data, attributes));
        };

        const normalizedRoute = this.normalizeRoute(path, parent);
        if (children) this.addRoutes(children, {normalizedRoute});

        this.routes[this.cleanPath(normalizedRoute)] = render;
    }

    /**
     * Normalize route based on the parent.
     */

    normalizeRoute(path, parent) {
        if (path[0] === '/' && path.length === 1) return path;
        if (typeof parent === 'undefined') return path;
        return `${parent.normalizedRoute}/${path}`;
    }

    componentWillMount() {
        const location = History.getLocation();
        this.stream.next(location.pathname);
    }

    async request(pathname) {
        await this.stream.next(pathname);
    }

    normalizePathname(pathname) {
        return pathname.split('?')[0].split("#")[0];
    }

    /**
     * Clean path.
     */

    cleanPath(path) {
        return path.replace(/\/\//g, '/');
    }

    isFunction(func) {
        if (!!func && typeof func === 'function') return true;
        return false;
    }

    setComponent(component) {
        if (this.isFunction(component.type.initialPropsDidGet)) {
            const prevProps = !!this.state.component ? this.state.component.props : {};
            component.type.initialPropsDidGet(component.props, prevProps);
        }

        this.setState({
            component: component
        });
    }

    /**
     * Render the matching route.
     */

    render() {
        return this.state.component;
    }
}
