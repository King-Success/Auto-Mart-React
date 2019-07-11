import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <header id="" class="container">
      <div class="profile">
        <div class="aside">
          <div class="avater__card">
            <div class="avater" id="avater">
              <img src="" alt="" />
            </div>
            <div class="name">
              <h2>User Name</h2>
            </div>
          </div>
          <div class="btns">
            <a
              href="post-ad.html"
              style={{
                cursor: "pointer",
                width: "50%",
                color: "white",
                background: "#092467",
                borderRadius: "5px"
              }}
              class="btn smooth"
            >
              create new Ad
            </a>{" "}
            <br />
            <a
              href="unsold-cars.html"
              style={{
                cursor: "pointer",
                width: "50%",
                color: "white",
                background: "#092467",
                borderRadius: "5px"
              }}
              class="btn smooth"
            >
              buy car
            </a>
          </div>
        </div>
        <div class="main" id="cars-grid">
          <div class="alert smooth" style={{ textAlign: "center" }} />
        </div>
      </div>
    </header>
  );
}

export default Profile;
