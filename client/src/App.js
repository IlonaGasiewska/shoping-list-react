import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./providers/ProductsProvider.jsx";
import { ShoppingListProvider } from "./providers/ShoppingListProvider.jsx";
import { Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {

  function PrivateRoute({ element }) {
    const isAuthenticated = localStorage.getItem("user");
    return isAuthenticated ? element : <Navigate to="/signIn" />;
  }

  return (
    <ProductsProvider>
      <ShoppingListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          </Routes>
        </BrowserRouter>
      </ShoppingListProvider>
    </ProductsProvider>


  );
}

export default App;
