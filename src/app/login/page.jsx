"use client";

import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleLogin = async () => {
    await login({ username, password });
    router.push("/dashboard/users");
  };

  return (
    <Box maxWidth={400} mx="auto" mt={10}>
      <TextField fullWidth label="Username" onChange={(e)=>setUsername(e.target.value)} />
      <TextField fullWidth label="Password" type="password" sx={{mt:2}}
        onChange={(e)=>setPassword(e.target.value)} />
      <Button fullWidth variant="contained" sx={{mt:2}} onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}
