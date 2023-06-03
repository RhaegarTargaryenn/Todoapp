import React from "react";
import NavBar from "./components/NavBar";
import SideMenu  from "./components/SideMenu";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm.";
import Display from "./components/Display";



 function App() {
  return(
   <div className="bg-black overscroll-contain'">
    <NavBar/>

    <div className="flex flex-row">
   <SideMenu/>
    <Header/>
     </div>

     <Display/>
    
     <div>
     <TodoForm/>
      <TodoList/>
    </div>

  
   </div>
  );
}

export default App;
