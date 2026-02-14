import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { appRoutes } from "./lib/routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const route = appRoutes.find((r) => r.path === location.pathname);
    document.title = route?.title || "My Task App";
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        {appRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
