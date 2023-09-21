import { IState } from '../store/types';
import { initialState } from '../store/itemsSlice';

export const saveToLocalStorage = (state: IState) => {
  try {
    localStorage.setItem("appState", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("appState");
    return stateStr ? JSON.parse(stateStr) : initialState;
  } catch (e) {
    console.error(e);
    return initialState;
  }
}

export const getId = (idLength: number) => {
  const timeStamp = Date.now().toString();
  return timeStamp.substring(timeStamp.length - idLength)
}
