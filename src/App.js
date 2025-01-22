import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
