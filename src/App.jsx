
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './componentes/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'
import DynamicBackground from './componentes/DynamicBackground'

// import Bgcolor from './componentes/bgcolor/bgcolor'

function App() {
 return(
  <div className='outer-pokedex'>
  <h1 id="Pokedex-heading">
    <Link to="/"></Link>
{/*     
    Pokedex */}
    </h1>
    {/* <DynamicBackground/> */}
  <CustomRoutes/>
  {/* <Bgcolor/> */}
  </div>
 )
}

export default App
