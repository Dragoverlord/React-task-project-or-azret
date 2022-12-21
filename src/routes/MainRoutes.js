import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/authcontext";
import { ADMIN } from "../helpers/consts";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePages from "../pages/HomePages";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLICK_ROUTES = [
    {
      Link: "/",
      element: <HomePages />,
      id: 1,
    },
    {
      Link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      Link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      Link: "/Products",
      element: <ProductsPage />,
      id: 4,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      Link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLICK_ROUTES.map((item) => (
          <Route path={item.Link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route path={item.Link} element={user.email == ADMIN ? item.element : <Navigate replace to="*"/>} key={item.id} />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
