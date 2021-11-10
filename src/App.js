import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';

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
