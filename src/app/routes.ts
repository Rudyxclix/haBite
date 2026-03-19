import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import DietPlansPage from "./pages/DietPlansPage";
import DietBowlsPage from "./pages/DietBowlsPage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/reset-password",
    Component: ResetPassword,
  },
  {
    path: "/verify-email",
    Component: EmailVerification,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/dashboard/profile",
    Component: Profile,
  },
  {
    path: "/dashboard/settings",
    Component: Settings,
  },
  {
    path: "/dashboard/orders",
    Component: Orders,
  },
  {
    path: "/products",
    Component: Products,
  },
  {
    path: "/diet-plan",
    Component: DietPlansPage,
  },
  {
    path: "/diet-bowls",
    Component: DietBowlsPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/order-success",
    Component: OrderSuccess,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);