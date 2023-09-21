import React, { useEffect } from "react";
import { HeadingPart } from "./components/HeadingPart";
import { MainPart } from "./components/MainPart";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setStore } from "./store/itemsSlice";
import { loadFromLocalStorage } from "./utils/helpers";
import "./App.scss";

function App() {
  const appState = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageState = loadFromLocalStorage();
    dispatch(setStore(localStorageState));
  }, []);

  return (
    <main className="app">
      <HeadingPart />
      <MainPart />
    </main>
  );
}

export default App;
