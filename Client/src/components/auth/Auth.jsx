import { useState } from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import Login from "./Login";  // Import Login Component
import RoleSelection from './RoleSelection'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

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
        {/* Conditionally render Login or Signup form */}
        {isLogin ? <Login /> : <RoleSelection />}

        {/* Toggle button to switch between login and signup */}
        <Button
          onClick={() => setIsLogin(!isLogin)}
          sx={{ mt: 2 }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
