import './App.css';
import Api from './components/Api/Api';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header></Header>
        <Api></Api>
    </div>
  );
}

export default App;
