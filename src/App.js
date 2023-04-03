import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./components/routes";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='' element={<Wallet />} /> */}
        <Route path='/user' element={<AuthLayout />}>
          {routes.map((route, index) => {
            if (route.index) {
              return <Route index element={route.element} />;
            } else {
              return <Route path={route.path} element={route.element} />;
            }
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
