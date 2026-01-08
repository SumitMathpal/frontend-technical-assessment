import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default async function ProductDetail({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Product not found</Typography>
        <Link href="/dashboard/products">
          <Button variant="contained" sx={{ mt: 2 }}>
            Back to Products
          </Button>
        </Link>
      </Box>
    );
  }

  const product = await res.json();

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#e0e0e0",
      }}
    >
      {/* PRODUCT IMAGE */}
      <Box sx={{ mb: 3 }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "300px",
            maxWidth: "100%",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/*  PRODUCT DETAILS */}
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>

      <Typography sx={{ mb: 1 }}>
        <strong>Price:</strong> ₹ {product.price}
      </Typography>

      <Typography sx={{ mb: 1 }}>
        <strong>Category:</strong> {product.category}
      </Typography>

      <Typography sx={{ mb: 1 }}>
        <strong>Rating:</strong> {product.rating}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        {product.description}
      </Typography>

      <Link href="/dashboard/products">
        <Button variant="contained" sx={{ mt: 4 }}>
          Back to Products
        </Button>
      </Link>
    </Box>
  );
}
