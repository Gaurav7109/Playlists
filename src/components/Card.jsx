import React from "react";

function Card(input) {
  const link = input.link;
  return (
    <div className="card">
      <h1>{input.title}</h1>

      <p>{input.bucket}</p>
      <p>{link}</p>
      <button
        onClick={() => {
          input.deleteMusic(input.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Card;
