import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Linktree from './screens/Linktree';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Linktree/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
