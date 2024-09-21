import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";
import UserProfile from "./pages/UserProfile";

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
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route path="/login" element={<p>login</p>} />
    </Routes>
  );
};

export default App;
