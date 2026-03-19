import { RouterProvider } from "react-router";
import { router } from "./routes";

// Habite - The Art of Healthy Eating
export default function App() {
  return <RouterProvider router={router} />;
}