import { Outlet } from "react-router-dom";
import { authProvider } from "../auth";
import Layout from "../components/layout";

export default function Root() {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}

export const rootLoader = () => {
  return { username: authProvider.username, password: authProvider.password }
}