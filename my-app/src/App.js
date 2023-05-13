import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [username, setUsername] = useState("");

  const onSubmit = (data) => {
    setUsername(data.name);
  };

  return (
    <div className="container">
      {username ? (
        <HelloPage username={username} />
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Registration Form</h1>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name" required
            {...register("name")}
          />
          

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" required
            {...register("email")}
          />
        

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password" required
            {...register("password")}
          />

          <input type="submit" value="Register" />
        </form>
      )}
    </div>
  );
}

function HelloPage({ username }) {
  return (
    <div className="container">
      <h1 className="title">Hello, {username}!Welcome to my first Webpage.</h1>
    </div>
  );
}

export default App;
