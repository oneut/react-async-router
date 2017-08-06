import Immutable from "immutable";
import User from "../models/User";
import UserType from "../actionTypes/UserType";

export default function user(state = Immutable.List(), action) {
    switch (action.type) {
        case UserType.NEW_INSTANCE:
            return new User(action.attributes);
        default:
            return state;
    }
}
