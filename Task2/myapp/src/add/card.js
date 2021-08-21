import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="cardmain">
      {props.users.map((user, id) => {
        const { avatar, first_name, last_name, email } = user;
        return (
          <div className="card" key={id}>
            <img src={avatar} alt="" className="avatar" />
            <div className="card-text">
              <h2>
                {first_name} {last_name}
              </h2>
              <p>{email}</p>
              <p>UserId: {id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
