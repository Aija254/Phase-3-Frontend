import React, { useState } from "react";

function MovieComponent(props) {
  const [completed, setCompleted] = useState(props.completed);
  const handleCompleteMovie = () => {
    fetch(`/movies/update/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed, // toggle completed status
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to update movie.");
        }
      })
      .then((data) => {
        setCompleted(data.completed); // update local state with updated completed status
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ margin: "20px" }}>
        <span>
          <h4>Title: {props.title}</h4>
        </span>
      </div>
      <div className="" style={{ margin: "20px" }}>
        <span>
          <h4>Year</h4>
        </span>
        <p
          className="ui segment"
          style={{ padding: "10px", width: "100px", textAlign: "center" }}
        >
          {props.year}
        </p>
      </div>
    </div>
  );
}

export default MovieComponent;
