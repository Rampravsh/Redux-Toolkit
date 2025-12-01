import { useDispatch } from "react-redux";
import Header from "./Header";
import Product from "./Product";
import { clearAllItem } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-[#f2f3f5] min-h-screen">
        <Header />
        <button
          onClick={() => dispatch(clearAllItem())}
          className="flex bg-red-500 text-white px-4 py-2 rounded-md m-4"
        >
          Clear Cart
        </button>
        <Product />
      </div>
    </>
  );
}

export default App;
