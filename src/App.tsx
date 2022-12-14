import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyles } from "./global.styles";

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
// const Spinner = lazy(() => import("./components/spinner/spinner.component"));
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
