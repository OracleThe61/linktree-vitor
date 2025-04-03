
import './App.css'
import { FaGithub } from "react-icons/fa";
import Linkedin from './components/linkedin';

function App() {

  return (
    <div className='container-app'>

      <h1>Links do Vitor❤️</h1>
        <a href="https://github.com/OracleThe61"className='links' target='_blank'>
        <FaGithub />Github
        </a>
        <Linkedin/>
    </div>
  )
}

export default App
