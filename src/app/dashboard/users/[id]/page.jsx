import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default async function UserDetail({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <Typography>User not found</Typography>;
  }

  const user = await res.json();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">
        {user.firstName} {user.lastName}
      </Typography>

      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Gender: {user.gender}</Typography>
      <Typography>Company: {user.company?.name}</Typography>

      {/* BUTTONS */}
      <Box sx={{ mt: 3 }}>
        <Link href="/dashboard/products">
          <Button variant="contained" sx={{ mr: 2 }}>
            Products
          </Button>
        </Link>

        <Link href="/dashboard/users">
          <Button variant="outlined">Back to Users</Button>
        </Link>

        <Link href="/">
          <Button color="error" sx={{ ml: 2 }}>
            Logout
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
