export class AddItemAction {
  static readonly type = '[Todo page] Add item';
  constructor(public name: string) {}
}

export class ToggletemAction {
  static readonly type = '[Todo page] Toggle item';
  constructor(public name: string) {}
}
