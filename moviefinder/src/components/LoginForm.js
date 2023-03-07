import React from "react";

function LoginForm({ email, setEmail, password, setPassword, onSubmit }) {
  return (
    <>
      <div>
        <h1>Movies</h1>
      </div>
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label>Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <button type="submit">
            Submit
            <span>
              <i></i>
            </span>
          </button>
        </form>
        <h4>
          New User?{" "}
          <span>
            <a href="">Sign Up</a>
          </span>
        </h4>
      </div>
    </>
  );
}

export default LoginForm;
