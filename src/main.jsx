import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Home from "./pages/Home";
import Recent from "./pages/Recent";
import Mystuff from "./pages/Mystuff";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import "./index.css";
import Signout from "./pages/Signout";
import Signup from "./pages/Signup";
import Question from "./pages/Question";
import QuestionPage from "./pages/QuestionPage";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/mystuff" element={<Mystuff />} />
          <Route path="/search" element={<Search />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question/:id" element={<QuestionPage />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
