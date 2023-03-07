import React, { useState } from "react";

function CreateMovie({ user_id }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const token = localStorage.getItem("user_id");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send a POST request to the backend API with the user_id as a parameter
    fetch(`http://localhost:9292/movies/create/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        year: year,
        user_id: token,
      }),
    })
      .then((response) => {
        // handle the response from the server
        if (response.ok) {
          alert("movie created successfully!");
          console.log(response);
          window.location.href = "/movies";
        } else {
          alert("Failed to create movie.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while creating the movie.");
      });
  };

  return (
    <>
      <div>
        <div>
          <h3 className="ui black header">Create Movie</h3>
        </div>

        <form class="ui form" onSubmit={handleSubmit}>
          <div class="field">
            <label>Title</label>
            <div class="ui fluid input">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g The Mafia"
              />
            </div>
          </div>
          <div class="field">
            <label>Year</label>
            <div class="ui fluid input">
              <input
                type="date"
                id="dueDate"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="E.g, 12 / 12/ 2023"
              />
            </div>
          </div>
          <button class="ui black button" type="submit">
            Create Movie
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateMovie;
