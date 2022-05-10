import './App.css';
import Child from './Reactmock/Child';



function App() {

  const pull_data = (data) => {
    console.log(data);
}
  return (
    <div className="App">
      <Child func={pull_data}/>
    </div>
  );
}

export default App;
