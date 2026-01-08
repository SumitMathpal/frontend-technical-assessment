import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#1e1e1e",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Frontend Technical Assessment
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
          Project setup successful
        </Typography>

        <Button
          variant="contained"
          component={Link}
          href="/login"
        >
          Go to Login
        </Button>
      </Box>
    </Box>
  );
}
