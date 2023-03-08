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
        year,
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div>
          <h3
            className="ui black header"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Create Movie
          </h3>
        </div>

        <form
          className="ui form"
          onSubmit={handleSubmit}
          style={{ width: "100%" }}
        >
          <div className="field" style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Title
            </label>
            <div className="ui fluid input">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g The Mafia"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>
          <div className="field" style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Year
            </label>
            <div className="ui fluid input">
              <input
                type="text"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="E.g, 2023"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>
          <button
            className="ui black button"
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Movie
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateMovie;
