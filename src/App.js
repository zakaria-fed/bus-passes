import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthentificationPage from "./pages/Authentification";
import DashboardPage from "./pages/Dashboard";

function App() {
  const [authentified, setAuthentified] = useState(false);
  const [authUser, setAuthUser] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthentificationPage
              auth={authentified}
              handleAuth={setAuthentified}
              setAuthUser={setAuthUser}
            />
          }
        />
        <Route
          path="/dashboard"
          authUser={authUser}
          element={
            <DashboardPage
              auth={authentified}
              handleAuth={setAuthentified}
              authUser={authUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
