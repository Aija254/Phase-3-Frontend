import React from "react";
import { useState } from "react";
import { Form, Button, Header } from "semantic-ui-react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:9292/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      if (result.message) {
        window.location.href = "/login";
      } else {
        // Handle other cases
      }
    } else {
      console.error(
        `Server returned ${response.status}: ${response.statusText}`
      );
    }
  };

  return (
    <div className="login-form-container">
      <div className="form-header">
        <h1>Movie</h1>
      </div>
      <Form size="large" onSubmit={handleSubmit}>
        <Header as="h3" textAlign="left" color="black">
          Create Account
        </Header>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Name</label>
            <Form.Input
              fluid
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field width={12}>
            <label>Email</label>
            <Form.Input
              fluid
              placeholder="example@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Password</label>
          <Form.Input
            fluid
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button color="brown" fluid size="large" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
