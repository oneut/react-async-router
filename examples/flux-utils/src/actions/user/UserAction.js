import { userType } from "../../storeTypes/UserType";

export class UserAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  newInstance(attributes) {
    this.dispatcher.dispatch({
      type: userType.NEW_INSTANCE,
      attributes: attributes
    });
  }
}
