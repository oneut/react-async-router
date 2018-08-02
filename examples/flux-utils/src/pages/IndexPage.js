import NProgress from "nprogress";
import React from "react";
import IndexContainer from "../containers/IndexContainer";
import HackerNewsApi from "../api/HackerNewsApi";
import NotFoundPage from "./NotFoundPage";
import {ItemsAction} from "../actions/index/ItemsAction";
import {newIndexDispatcher} from "../dispatchers/IndexDispatcher";
import {ItemsStore} from "../stores/ItemsStore";

export default class IndexPage extends React.Component {
  static initialPropsWillGet() {
    NProgress.start();
  }

  static async getInitialProps() {
    return {
      items: await HackerNewsApi.getTopStoryItems()
    };
  }

  static initialPropsDidGet() {
    NProgress.done();
  }

  render() {
    if (!this.props.items.length) return <NotFoundPage/>;

    const indexDispatcher = newIndexDispatcher();
    const itemsStore = new ItemsStore(indexDispatcher);
    const itemsAction = new ItemsAction(indexDispatcher);
    itemsAction.sync(this.props.items);

    const params = {
      stores: {
        itemsStore
      }
    };

    return <IndexContainer {...params} />;
  }
}
