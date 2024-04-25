/** importamos el css*/
import './App.css'
import Card from './components/Card';
import vehicle from './data/vehicle';

function App() {
 
  const vehicleList = vehicle.map((v) => {
    return <Card title={v.name}
    description={v.description}/>;
  });

  return (
  <div className="App">
    <h1>Hola react</h1>
    <div className="container">
    {vehicleList}</div>
    </div>
  );
    
}

export default App
