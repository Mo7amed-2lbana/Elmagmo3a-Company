import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";

// routing
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// pages
import Layout from "./Layout";
import Home from "./pages/home/Home.jsx";
import User from "./pages/user/User.jsx";
import AddIncome from "./pages/income/AddIncome.jsx";
import AddPursh from "./pages/Pursh/AddPursh.jsx";
import Income from "./pages/income/Income.jsx";
import Add from "./pages/add/Add.jsx";
import AddSeles from "./pages/expenses/AddExpenses.jsx";
import AddStore from "./pages/store/AddStore.jsx";
import Pursh from "./pages/Pursh/Pursh.jsx";

import "animate.css";
import "./index.css";
import Expenses from "./pages/expenses/Expenses.jsx";
import Store from "./pages/store/Store.jsx";
import UserDetails from "./pages/userDetails/UserDetails.jsx";

// make routing
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "add", element: <Add /> },
      { path: "addIncome", element: <AddIncome /> },
      { path: "/income", element: <Income /> },
      { path: "addPursh", element: <AddPursh /> },
      { path: "/pursh", element: <Pursh /> },
      { path: "addExpenses", element: <AddSeles /> },
      { path: "expenses", element: <Expenses /> },
      { path: "addStore", element: <AddStore /> },
      { path: "store", element: <Store /> },
      {
        path: "/user",
        element: <User />,
        children: [{ path: "userDetails/:userId", element: <UserDetails /> }],
      },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root).render(<RouterProvider router={router} />);
