import NProgress from "nprogress";
import React from "react";
import UserContainer from "../containers/UserContainer";
import HackerNewsApi from "../api/HackerNewsApi";
import NotFoundPage from "./NotFoundPage";
import { newUserDispatcher } from "../dispatchers/UserDispatcher";
import { UserAction } from "../actions/user/UserAction";
import { UserStore } from "../stores/UserStore";

export default class UserPage extends React.Component {
  static initialPropsWillGet() {
    NProgress.start();
  }

  static async getInitialProps(attributes) {
    return {
      user: await HackerNewsApi.findUser(attributes.params.userId)
    };
  }

  static initialPropsDidGet() {
    NProgress.done();
  }

  render() {
    if (!this.props.user) return <NotFoundPage />;

    const userDispatcher = newUserDispatcher();
    const userAction = new UserAction(userDispatcher);
    const userStore = new UserStore(userDispatcher);
    userAction.newInstance(this.props.user);

    const params = {
      stores: {
        userStore
      }
    };

    return <UserContainer {...params} params={this.props.params} />;
  }
}
