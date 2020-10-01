import React, { Suspense } from "react";
import "./App.css";
import AppRoute from "./Router";
import Loader from "./Components/Loader";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppRoute />
      </Suspense>
    </div>
  );
}

export default App;
