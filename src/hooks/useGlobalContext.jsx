import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be wrapped by GlobalContextProvider("
    );
  }
  return <div>useGlobalContext</div>;
}
