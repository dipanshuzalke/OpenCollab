import { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Signup = () => {
  const { role } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    skills: role === "student" ? [] : undefined, // Only for students
    githubProfile: role === "student" ? "" : undefined, // Only for students
    organization: role === "professional" ? "" : undefined, // For professional
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/register/${role}`,
        {
          ...formData,
          skills:
            typeof formData.skills === "string"
              ? formData.skills.split(",").map((skill) => skill.trim())
              : [],
        }
      );
      alert("Registration successful!");
      navigate("/home");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Full Name"
            type="text"
            id="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="emailId"
            label="Email Address"
            name="emailId"
            autoComplete="email"
            value={formData.emailId}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {role === "student" && (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="skills"
                label="Skills (comma-separated)"
                type="text"
                id="skills"
                placeholder="React, Python, AI..."
                autoFocus
                value={formData.skills}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: e.target.value.split(","),
                  })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="githubProfile"
                label="GitHub Profile"
                type="url"
                id="githubProfile"
                autoFocus
                value={formData.githubProfile}
                onChange={handleChange}
              />
            </>
          )}
          {role === "professional" && (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="organization"
                label="Organization"
                type="text"
                id="organization"
                autoFocus
                value={formData.organization}
                onChange={handleChange}
              />
            </>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
