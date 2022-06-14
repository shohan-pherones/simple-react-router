import "./App.css";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Culture from "./components/Culture/Culture";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friend/:friendId" element={<FriendDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route exact path="/about/culture" element={<Culture />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
