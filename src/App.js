import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Chat/:IdGlobal"
          element={
            <div>
              <Form />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
