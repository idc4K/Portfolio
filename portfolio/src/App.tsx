import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Mentions from "./Pages/Mentions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mentions-legales" element={<Mentions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
