import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App(props) {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/todos" element={<TodoList />} />
        <Route exact path="/todo" element={<AddTodo />} />
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
