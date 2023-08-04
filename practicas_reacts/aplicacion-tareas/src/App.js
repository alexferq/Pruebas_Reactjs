import './App.css';
import ListaTareas from './componenes/ListaTareas';
import Logo from './componenes/Logo';



function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logo/>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
