import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./pages/App";
import BattleForm from "./pages/BattleForm";
import Layout from "./components/layout/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/pokemon" element={<BattleForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
