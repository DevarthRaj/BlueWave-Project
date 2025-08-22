import React, { useState } from "react";
import LoginPage from "./views/LoginPage";
import AuthorityPage from "./views/AuthoritiesPage";
import LocalPage from "./views/LocalPage";

export default function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (username, password) => {
    if (username === "Admin" && password === "Admin") {
      setUserRole("authority");
    } else {
      setUserRole("local");
    }
  };

  if (!userRole) {
    return <LoginPage onLogin={handleLogin} />;
  } else if (userRole === "authority") {
    return <AuthorityPage />;
  } else {
    return <LocalPage />;
  }
}
