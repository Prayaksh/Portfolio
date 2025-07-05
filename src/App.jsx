import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectTab from "./components/ProjectTab";
import Experience from "./components/Experience";
import ToolsTab from "./components/ToolsTab";
import BlogTab from "./components/BlogTab";
import Layout from "./pages/Layout";
import Window from "./assets/animations/Window";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project"
          element={
            <Layout>
              <ProjectTab />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/tools"
          element={
            <Layout>
              <ToolsTab />
            </Layout>
          }
        />
        <Route
          path="/thoughts"
          element={
            <Layout>
              <BlogTab />
            </Layout>
          }
        />
        <Route path="/testing" element={<Window />} />
      </Routes>
    </Router>
  );
}

export default App;
