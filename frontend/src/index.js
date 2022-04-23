import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Example from "./components/Example.tsx";
import Navbar from "./components/Navbar.tsx";

import AboutPage from "./pages/AboutPage.tsx";
import AppsPage from "./pages/AppsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="apps" element={<AppsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
