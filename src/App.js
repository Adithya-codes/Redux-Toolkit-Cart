import "./styles.css";
import Itemlist from "./itemsList";
import Cartlist from "./cartList";
import store from "./Redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Itemlist />
        <Cartlist />
      </div>
    </Provider>
  );
}
