import "./App.css";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {ROUTES.map((element) => {
          return (
            <Route
              key={element.path}
              {...element}
              // path={element.path}
              // element={element.element}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
