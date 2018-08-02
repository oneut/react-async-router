import { itemType } from "../../storeTypes/ItemType";

export class ItemAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  newInstance(attributes) {
    this.dispatcher.dispatch({
      type: itemType.NEW_INSTANCE,
      attributes: attributes
    });
  }
}
