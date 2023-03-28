
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";
import Form from "./lessons/Form";
import List from "./lessons/List";
import Todo from "./lessons/Todo";
import Context from "./lessons/context";
import UseState from "./lessons/UseState";



function App() {
  return (

      <Router>
        <Routes>

          <Route exact path="/" element={<List />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/context" element={<Context />} />
          <Route exact path="/useState" element={<UseState />} />
        </Routes>
      </Router>

  );
}


// function Root() {
//   return (
//     <UserProvider>
//       <App />
//     </UserProvider>
//   )
// }

export default App;
