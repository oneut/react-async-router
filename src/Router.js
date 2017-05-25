import assert from "power-assert";
import History from "./History";
import React from "react";
import RouteMatcher from "./RouteMatcher";

export default class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: null
        };

        this.routes = {};

        this.initHistory();

        // Settings Routes.
        this.addRoutes(props.children);
    }

    initHistory() {
        History.initialHistory(this.props.history);
        History.setRequestCallback(this.request.bind(this));
        History.listen();
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

        assert(path, 'Route is missing the "path" property');
        assert(component, 'Route is missing the "component" property');

        const render = async (pathname, params) => {
            let data         = {};
            if (!!component.getInitialProps && typeof component.getInitialProps === 'function') {
                data = await component.getInitialProps({
                        pathname,
                        params,
                    }) || {};
            }

            const finalProps = {...this.props, params};
            return React.createElement(component, Object.assign(data, finalProps));
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
        this.dispatch(location.pathname);
    }

    async request(pathname) {
        await this.dispatch(pathname);
    }

    dispatch(pathname) {
        const component = this.renderer(this.normalizePathname(pathname));
        if (this.isPromise(component)) {
            return component.then((component) => {
                this.setState({
                    component: component
                });
            });
        }

        this.setState({
            component: component
        });
    }

    normalizePathname(pathname) {
        return pathname.split('?')[0].split("#")[0];
    }

    isPromise(obj) {
        return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
    }

    /**
     * Clean path.
     */

    cleanPath(path) {
        return path.replace(/\/\//g, '/');
    }

    /**
     * Render the matching route.
     */

    render() {
        return this.state.component;
    }
}
