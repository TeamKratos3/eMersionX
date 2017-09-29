import React from "react";

const Profile = props =>
  <div className="text-center">
    <img
      className="img-responsive"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>
      Profile(s): {props.profile}
    </h3>
    <h3>
      Summary: {props.summary}
    </h3>
  </div>;

export default MovieDetail;
