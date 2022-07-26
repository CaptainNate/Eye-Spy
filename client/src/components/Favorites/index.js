import React from "react";
import Bootstrap from "bootstrap"

function favorites() {
  <div>
  <h1 class="fs-1 fw-bold">Favorites</h1>;

{/* // <!-- Button trigger modal --> */}
<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#favoriteCard">
  Title: 
</button>
  </div>
</div>

{/* // <!-- Modal --> */}
<div class="modal fade" id="favoriteCard" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="" class="img-fluid" alt=""></img>
      <p>Title:</p>
      <p>Location:</p>
      <p>Description:</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
}
export default Favorites;