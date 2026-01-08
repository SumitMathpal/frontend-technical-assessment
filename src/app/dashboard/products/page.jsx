"use client";

import { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useProductStore } from "@/store/productStore";
import { useAuthStore } from "@/store/authStore";

export default function ProductsPage() {
  const router = useRouter();

  const { products, loading, fetchProducts } = useProductStore();
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#e0e0e0",
      }}
    >
      {/* TOP ACTION BAR */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Button variant="outlined" onClick={() => router.push("/dashboard/users")}>
          Users
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Box>

      <Typography variant="h4" mb={3}>
        Products
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid item xs={12} sm={6} md={3} key={p.id}>
              <Card sx={{ backgroundColor: "#1e1e1e", color: "#e0e0e0" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={p.thumbnail}
                  alt={p.title}
                />

                <CardContent>
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography>₹ {p.price}</Typography>

                  <Link href={`/dashboard/products/${p.id}`}>
                    <Button variant="contained" size="small" sx={{ mt: 2 }}>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
