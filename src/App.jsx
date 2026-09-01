import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDetails from "./components/ProjectDetails"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"

import BackToTop from "./components/BackToTop"
import ScrollProgress from "./components/ScrollProgress"
import NotFoundPage from "./pages/NotFoundPage"

import GlowCursor from "./components/GlowCursor"

import "./App.css"

function App() {
  return (
    <>
      <GlowCursor
        color="#7dff78"
        secondaryColor="#a0ff9b"
        trailLength={40}
        trailWidth={8}
        trailTaper={0.8}
        followSpeed={0.16}
        glowIntensity={1.9}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.25}
        opacity={1}
        pulseSpeed={1.1}
        noiseStrength={0.035}
        idleFade
        idleTimeout={700}
        fadeDuration={900}
        blendMode="screen"
      />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <BackToTop />
              <ScrollProgress />
            </>
          }
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/send-message"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
