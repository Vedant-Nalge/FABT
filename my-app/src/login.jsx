// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm();

const onSubmit = (data) => {
	const userData = JSON.parse(localStorage.getItem(data.email));
	if (userData) { // getItem can return actual value or null
	if (userData.password === data.password) {
		console.log(userData.name + " You Are Successfully Logged In");
	} else {
		console.log("Email or Password is not matching with our record");
	}
	} else {
	console.log("Email or Password is not matching with our record");
	}
};

}
export default Login;
