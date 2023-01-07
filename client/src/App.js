import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserFridge } from "./components/UserFridge";
import { AddFood } from "./components/AddFood";
import { Error } from "./pages/error";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/fridge/:user" element={<UserFridge />} />
                    <Route path="/add-food/:name" element={<AddFood />} />
                </Routes>
        </div>
  );
};

export default App;
