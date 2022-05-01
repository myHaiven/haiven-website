import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import AppsPage from "./pages/AppsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import { customTheme } from "./styles/customTheme";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="apps" element={<AppsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
