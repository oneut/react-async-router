import NProgress from "nprogress";
import React from "react";
import ItemContainer from "../containers/ItemContainer";
import HackerNewsApi from "../api/HackerNewsApi";
import NotFoundPage from "./NotFoundPage";
import {CommentsAction} from "../actions/item/CommentsAction";
import {ItemAction} from "../actions/item/ItemAction";
import {newItemDispatcher} from "../dispatchers/ItemDispatcher";
import {ItemStore} from "../stores/ItemStore";
import {CommentsStore} from "../stores/CommentsStore";

export default class ItemPage extends React.Component {
  static initialPropsWillGet() {
    NProgress.start();
  }

  static async getInitialProps(attributes) {
    return {
      item: await HackerNewsApi.findItem(attributes.params.itemId)
    };
  }

  static initialPropsDidGet() {
    NProgress.done();
  }

  render() {
    if (!this.props.item) return <NotFoundPage/>;

    const itemDispatcher = newItemDispatcher();
    const itemAction = new ItemAction(itemDispatcher);
    const itemStore = new ItemStore(itemDispatcher);
    const commentsAction = new CommentsAction(itemDispatcher);
    const commentsStore = new CommentsStore(itemDispatcher);
    itemAction.newInstance(this.props.item);

    const params = {
      stores: {
        commentsStore,
        itemStore,
      },
      actions: {
        commentsAction
      }
    };

    return <ItemContainer {...params} />;
  }
}
