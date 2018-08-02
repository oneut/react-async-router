import { ReduceStore } from "flux/utils";
import { userType } from "../storeTypes/UserType";
import User from "../models/User";

export class UserStore extends ReduceStore {
  getInitialState() {
    return null;
  }

  reduce(state, action) {
    switch (action.type) {
      case userType.NEW_INSTANCE:
        return new User(action.attributes);
      default:
        return state;
    }
  }
}
