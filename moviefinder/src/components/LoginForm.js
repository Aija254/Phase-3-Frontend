import React from "react";

function LoginForm({ email, setEmail, password, setPassword, onSubmit }) {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Movies</h1>
      </div>
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
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Login
          </h3>
        </div>
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Email
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="password"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Password
              </label>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
            <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
              <i
                style={{
                  border: "solid white",
                  borderWidth: "0 3px 3px 0",
                  display: "inline-block",
                  padding: "3px",
                  transform: "rotate(45deg)",
                }}
              ></i>
            </span>
          </button>
        </form>
        <h4 style={{ marginTop: "20px", fontSize: "16px" }}>
          New User?{" "}
          <span>
            <a href="" style={{ color: "#007bff", fontWeight: "bold" }}>
              Sign Up
            </a>
          </span>
        </h4>
      </div>
    </>
  );
}

export default LoginForm;
