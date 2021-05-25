import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeaderNav />
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
