import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";
import UserProfile from "./pages/UserProfile";
import ProtectRoute from "./auth/ProtectRoute";
import Restaurant from "./pages/Restaurant";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <Home />
          </Layout>
        }
      />
      <Route element={<ProtectRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <Restaurant />
            </Layout>
          }
        />
      </Route>
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route path="/login" element={<div>login</div>} />
    </Routes>
  );
};

export default App;
