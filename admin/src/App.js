import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
<<<<<<< HEAD
import OrderList from "./pages/orderList/OrderList";
import Login from "./pages/login/Login";
import History from "./pages/history/History";
=======
import OrderList from "./pages/orderList/OrderList"
import Login from "./pages/login/Login";
import History from "./pages/history/History";
import Contact from "./pages/contact/Contact"
import Order from "./pages/order/Order"
>>>>>>> saarbranchv4
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  console.log(admin);
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        {!admin && (
          <Route path="/login">
            <Login />
          </Route>
        )}

=======
        <Route path="/login">
          <Login />
        </Route>
        {!admin && <Redirect to="/login"/>}
>>>>>>> saarbranchv4
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/orders">
                <OrderList />
              </Route>
<<<<<<< HEAD
              <Route path="/history">
                <History />
              </Route>
=======
              <Route path="/order/:orderId">
                <Order />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
>>>>>>> saarbranchv4
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
