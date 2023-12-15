import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from "./components/header"
import Body from "./components/body"
import { imageData } from './components/imageData';



function App() {
  return (
    <div>
      <Header/>
      <Body img={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
