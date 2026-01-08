import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
