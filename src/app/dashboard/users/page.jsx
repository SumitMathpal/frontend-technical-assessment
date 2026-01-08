"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function UsersPage() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const url = search
        ? `https://dummyjson.com/users/search?q=${search}`
        : `https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`;

      const res = await fetch(url);
      const data = await res.json();
      setUsers(data.users || []);
    };

    fetchUsers();
  }, [search, page]);

  return (
    <Box sx={{ p: 4 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Users</Typography>

        <Box>
          <Button onClick={() => router.push("/dashboard/products")}>
            Products
          </Button>
          <Button
            color="error"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* SEARCH */}
      <TextField
        label="Search user"
        variant="outlined"
        size="small"
        sx={{ mb: 3, width: "300px" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(0);
        }}
      />

      {/* TABLE */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Phone</strong></TableCell>
            <TableCell><strong>Company</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id} hover>
              <TableCell>
                <Link
                  href={`/dashboard/users/${u.id}`}
                  style={{ fontWeight: 500 }}
                >
                  {u.firstName} {u.lastName}
                </Link>
              </TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
              <TableCell>{u.company?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* PAGINATION */}
      {!search && (
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>

          <Button
            variant="outlined"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
}
