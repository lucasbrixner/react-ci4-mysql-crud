import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { authProvider } from "./auth";
import Root, { rootLoader } from "./routes/Root";
import Start from "./routes/pages/Start";
import Home, { homeLoader } from "./routes/pages/Home";
import SignIn, { signInLoader, signInAction } from "./routes/pages/SignIn";
import SignUp, { signUpLoader, signUpAction } from "./routes/pages/SignUp";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    Component: Root,
    children: [
      {
        index: true,
        Component: Start,
      },
      {
        path: "home",
        loader: homeLoader,
        Component: Home,
      },
      {
        path: "signin",
        action: signInAction,
        loader: signInLoader,
        Component: SignIn
      },
      {
        path: "signup",
        action: signUpAction,
        loader: signUpLoader,
        Component: SignUp
      }
    ],
  },
  {
    path: "/signout",
    async action() {
      await authProvider.signOut();
      return redirect("/");
    },
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}