import {
  redirect,
  type LoaderFunction,
  type LoaderFunctionArgs 
} from "react-router-dom";
import { authProvider } from "../../auth";
import { DataTable, DataTableCtxProvider } from "../../components/data-table";


export default function Home() {
  return (
    <DataTableCtxProvider>
      <DataTable />
    </DataTableCtxProvider>
  );
}

export const homeLoader: LoaderFunction = ({ request }: LoaderFunctionArgs) => {
  if (!authProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect(`/signin?${params.toString()}`);
  }
  return null;
}