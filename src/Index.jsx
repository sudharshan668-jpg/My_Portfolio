import React from "react";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

export default function Index() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
