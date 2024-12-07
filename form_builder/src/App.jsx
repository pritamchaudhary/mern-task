import React from "react";
import FormBuilder from "./components/FormBuilder";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">Form Builder</h1>
      </header>
      <main className="p-6">
        <FormBuilder />
      </main>
    </div>
  );
};

export default App;
