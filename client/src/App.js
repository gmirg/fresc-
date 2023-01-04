import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserFridge } from "./components/UserFridge";
import { AddFood } from "./components/AddFood";
import { Error } from "./pages/error";

const App = () => {
  return (
    <div>
                <Routes>
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<UserFridge />} />
                    <Route path="/add-food/:name" element={<AddFood />} />
                </Routes>
        </div>
  );
};

export default App;
