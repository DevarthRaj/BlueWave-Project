import React from "react";
import Dashboard from "../component/Dashboard";

export default function AuthorityPage({ onLogout }) {
  return (
    <div>
      <button
        onClick={onLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
      <Dashboard />
    </div>
  );
}
