import "./App.css";
import { Route, Routes } from "react-router-dom";
import Container from "./pages/Container";
import Activity from "./pages/Activity";
import ActivityDetail from "./pages/ActivityDetail";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="" element={<Activity />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
