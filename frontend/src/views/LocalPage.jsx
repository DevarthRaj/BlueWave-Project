import React from "react";

export default function LocalPage({ onLogout }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">Welcome, Local User!</h1>
      <button
        onClick={onLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
