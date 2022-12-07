import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


function App() {
  return (
    <div className="container">
      <Header title="Galeria de imagenes con React" />
      <Card src="images/martin-pescador.jpg" title="Martin Pescador" text="pajaro" />
      <Card src="images/Tigre.jpg" title="Tigre" text="Carnivoro" />
      <Card src="images/elefante.jpg" title="Bebe Elefante" text="Abrevadero" />
      <Alert key="success" variant="success">
        Registro exitoso, Bienvenido!
      </Alert>
      <Footer title="Todos los derechos reservados" />
    </div>

  );
}

export default App;
