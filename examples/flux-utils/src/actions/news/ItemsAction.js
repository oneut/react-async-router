import {itemsType} from "../../storeTypes/ItemsType";

export class ItemsAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  sync(items) {
    this.dispatcher.dispatch({
      type: itemsType.SYNC,
      items: items
    })
  }
}