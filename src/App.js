import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./components/routes";
import Wallet from "./pages/Wallet";
import { HamburgerProvider } from "./context/Hamburger";

function App() {
  return (
    <HamburgerProvider>
      <Router>
        <Routes>
          {/* <Route path='' element={<Wallet />} /> */}

          <Route path='/' element={<AuthLayout />}>
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
    </HamburgerProvider>
  );
}

export default App;
