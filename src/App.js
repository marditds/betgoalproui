import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import { NavMenu } from './components/NavMenu'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Row>
        <Col></Col>
        <Col><h1>Hakop</h1></Col>
        <Col></Col>
      </Row>


    </div>
  );
}

export default App;
