import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import AppComponent from './AppComponent'
import AddStudent from './AddStudent'
import EditComp from "./EditComp";
function App() {
  return (
    <>
    <h1>User Management CRUD Operations</h1>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppComponent></AppComponent>}></Route>
      <Route path="/add" element={<AddStudent></AddStudent>}></Route>
      <Route path="/update/:id" element={<EditComp></EditComp>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
