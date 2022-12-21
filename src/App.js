import React from "react";
import AuthContextProvider from "./contexts/authcontext";
import ProductsContextProvider from "./contexts/ProductsContext";
import NavbarPage from "./pages/NavbarPage";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <ProductsContextProvider>
          <NavbarPage />
          <MainRoutes />
        </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
