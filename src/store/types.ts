export interface IComment {
  id: string;
  colorValue: string;
  textValue: string;
}

export interface IItem {
  id: string;
  value: string;
  comments: IComment[];
}

export interface IState {
  items: IItem[];
  selectedItem: IItem | null;
}

export interface IActionAddItem {
  id: string;
  textValue: string;
}

export interface IActionAddComment {
  id: string;
  colorValue: string;
  textValue: string;
}
