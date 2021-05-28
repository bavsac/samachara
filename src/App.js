import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Articles from './components/Articles';
import Article from './components/Article';
import Comments from './components/Comments';
import Users from './components/Users';
import { UserProvider } from './components/contexts/User';
import LoggedInHeader from './components/LoggedInHeader';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <LoggedInHeader />
        <Header />
        <HeaderNav />
        <Switch>
          <Route exact path='/'>
            <Articles />
          </Route>
          <Route exact path='/topics/:topic/articles'>
            <Articles />
          </Route>
          <Route exact path='/articles/:article_id'>
            <Article />
            <Comments />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>

          <Route exact path='/users/:username'>
            <Users />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
