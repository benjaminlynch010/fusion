import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

// Mantine
import { Box, Paper, Group, Center, Button } from "@mantine/core";

function RegisterPage() {
  const history = useHistory();

  return (
    <Box maw={300} mx="auto">
      <RegisterForm />
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
    </Box>
  );
}

export default RegisterPage;
