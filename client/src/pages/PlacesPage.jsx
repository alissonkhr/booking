import { Link } from "react-router-dom";

export default function PlacesPage() {
  return (
    <div>
      <div className="">
        <Link className="" to={"/account/places/new"}>Add new place</Link>
      </div>
      my places
    </div>
  );
}
