import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Body from './Components/Body';
import Body2 from './Components/Body2';
import Card from './Components/Card';
import Body3 from './Components/Body3';
import Body4 from './Components/Body4';
import Trail from './Components/Trail'
import Body3a from './Components/Body3a';
import Dark from './Components/Dark';
import Gallery from './Components/Gallery';
import Green from './Components/Green'
import Footeru from './Components/Footeru';
import Footer from './Components/Footer';
import { Slider } from './Components/Carosal';
import Student from './Components/Student';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Navbar1/>
      <Navbar2 />
     <Body /> 
     <Student />
     <Card />
     <Body2 />
     <Body3 />
     <Body3a />
     <Body4 />
     <Dark/>
     <Slider />
    <Gallery />
    <Green />
    <Footeru />
    <Footer />
    
    </div>
  );
}

export default App;
