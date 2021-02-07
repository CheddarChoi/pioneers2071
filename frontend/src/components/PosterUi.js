import React from "react";
import "./posterui.css";
import medal from "../images/medal-solid.svg";

function PosterUi(props) {
  return (
    <div className="d-flex justify-content-center">
      <a href={props.link} style={{ textDecoration: "none" }}>
        <div className="poster-container">
          <div
            className="color-box"
            style={{
              backgroundColor: props.color,
            }}
          >
            <i class="fas fa-medal"></i>
            <img src={medal} height="24px" className="filter-white mr-2 mb-1" />
            {props.title}
          </div>

          <div className="content-box d-flex p-3">
            <img
              class="poster-img my-auto"
              src={props.imgUrl}
              alt="poster-img"
            />
            <div class="poster-box">
              <div class="poster-name">{props.name}</div>
              <div class="poster-des">
                {props.designation.replaceAll("<br/>", "\n")}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PosterUi;