import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"; 
import JourneyPage from "./Pages/Journey";
import AboutUsPage from "./Pages/AboutUs";
import TestimonialsPage from "./Pages/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutUsPage />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
