
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";
import Form from "./lessons/Form";
import List from "./lessons/List";
import Todo from "./lessons/Todo";
import Context from "./lessons/Context";
import UseState from "./lessons/UseState";
import Goals from "./lessons/Goals";
import UseReducer from "./lessons/UserReducer";
import UseRef from "./lessons/UseRef";



function App() {
  return (

      <Router>
        <Routes>

          <Route exact path="/" element={<List />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/context" element={<Context />} />
          <Route exact path="/useState" element={<UseState />} />
          <Route exact path="/goal" element={<Goals />} />
          <Route exact path="/useReducer" element={<UseReducer />} />
          <Route exact path="/useRef" element={<UseRef />} />
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
