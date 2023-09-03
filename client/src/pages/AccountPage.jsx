import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);

  const { subpage } = useParams();
  console.log(subpage);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link
          className="py-2 px-6 bg-primary text-white rounded-full"
          to={"/account"}
        >
          My Profile
        </Link>
        <Link className="py-2 px-6" to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className="py-2 px-6" to={"/account/places"}>
          My Accomodations
        </Link>
      </nav>
    </div>
  );
}
