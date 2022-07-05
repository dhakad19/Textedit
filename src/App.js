
import './App.css';
import Navbar from './created/Navbar';
import Textform from './created/Textform';
function App() {
  return (
    <>
     <Navbar Help="Help"/> 
      <div className="container my-5">
      <Textform Heading="Enter Text"/>
      </div>
    
    </>
  );
}

export default App;
