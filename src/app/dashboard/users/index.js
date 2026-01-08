import ProtectedRoute from "../../../components/ProtectedRoute";

export default function UsersPage() {
  return (
    <ProtectedRoute>
      <div style={{ padding: 40 }}>
        <h1>Users Page</h1>
        <p>This is the users list page.</p>
      </div>
    </ProtectedRoute>
  );
}
