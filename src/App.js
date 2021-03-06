import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Checkout from "./components/CheckoutForm/Checkout";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import Favorites from "./components/Favorites";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import store from "./store";
import { useDispatch, useSelector, Provider } from "react-redux";
import { setUserAction } from "./actions/userAction";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const setUser = (user) => dispatch(setUserAction(user));

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setUser(authUser);
      }
    });
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/checkout-page" element={<CheckoutPage />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/product-details" element={<ProductDetails />} />
            <Route exact path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
