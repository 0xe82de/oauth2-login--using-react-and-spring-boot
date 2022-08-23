import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import OAuth2RedirectHandlerKakao from "./routes/OAuth2RedirectHandlerKakao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandlerKakao/>}/>
      </Routes>
    </Router>
  );
}

export default App;
