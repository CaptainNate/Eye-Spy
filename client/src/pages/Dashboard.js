import React from "react";
import Favorites from "../components/Favorites";

function Dashboard() {
  return (
    <div>
      <div class="text-center">
        <h1 class="text-center">Welcome User</h1>
        <Favorites />
        <br></br>
        <br></br>
        <button type="button" class="btn btn-primary">
          Show More Favorites
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
