import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500 mb-2 text-base"
      >
        User Profile
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500 mb-2 text-base"
      >
        Manage Restaurant
      </Link>
      <Button
        className="w-full items-center px-3 font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
