import logo from '../../logo.svg';
import '../../App.css';

function HomePage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
        <br />

        <a
          className="App-link"
          href="./usuario/add"
          target="_blank"
          rel="noopener noreferrer"
        >
          Usuarios
        </a>
      </header>
    </div>
  );
}

export default HomePage;