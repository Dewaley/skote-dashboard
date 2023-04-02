import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./components/routes";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
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
      <AuthLayout />
    </div>
  );
}

export default App;
