import { commentsType } from "../../storeTypes/CommentsType";

export class CommentsAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  sync(comments) {
    this.dispatcher.dispatch({
      type: commentsType.SYNC,
      comments: comments
    });
  }
}
