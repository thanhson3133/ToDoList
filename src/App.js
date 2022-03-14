import React, {Suspense} from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Home/Header";
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Router>
      <Suspense>
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          
          <Route exact path="/" element={<TodoList />} />
          {/* <Route exact path="/detail/:id" element={<Detail />} /> */}
          <Route exact path="*" element={<PageNotFound />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
