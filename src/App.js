import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar.component.js";
import CreateExercise from "./Components/CreateExercise.component";
import CreateUser from "./Components/CreateUser.component";
import EditExercise from "./Components/EditExercise.component";
import ExerciseList from "./Components/ExerciseList.component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' component={ExerciseList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='create' component={CreateExercise} />
      <Route path='user' component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
