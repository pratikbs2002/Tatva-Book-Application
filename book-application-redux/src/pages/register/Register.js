import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthContext";
import bgImage from "../../assets/background.svg";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }

    if (email.trim() === "") {
      validationErrors.email = "Please enter your email";
    }

    if (mobileNumber.trim() === "") {
      validationErrors.mobileNumber = "Please enter your mobile number";
    }
    if (city.trim() === "") {
      validationErrors.city = "Please enter your city name";
    }

    if (password.trim() === "") {
      validationErrors.password = "Please enter a password";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    if (confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      mobileNumber,
      city,
      password,
    };

    register(newUser);
  };

  return (
    <form
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        marginTop: "100px",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        bgcolor={"white"}
        borderRadius={"20px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.2)"}
        display="flex"
        flexDirection="column"
        maxWidth="400px"
        width={"100%"}
        padding={"70px"}
        paddingTop={"20px"}
      >
        <Typography variant="h5" align="center" mb={3}>
          Register
        </Typography>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          fullWidth
          margin="normal"
          error={!!errors.mobileNumber}
          helperText={errors.mobileNumber}
        />
        <TextField
          label="City"
          type="text"
          value={city}
          onChange={handleCityChange}
          fullWidth
          margin="normal"
          error={!!errors.city}
          helperText={errors.city}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          margin="normal"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          type="submit"
          fullWidth
          mt={3}
        >
          Register
        </Button>
        <Link
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
          to="/login"
        >
          <span>Already have an account?</span>
          <span>Login here</span>
        </Link>
      </Box>
      <ToastContainer />
    </form>
  );
};

export default Register;
