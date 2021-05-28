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
import CommentEditor from './components/CommentEditor';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <LoggedInHeader />
        <Header />
        <HeaderNav />
        <div className='Switch'>
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
            <Route exact path='/comments/:comment_id'>
              <CommentEditor />
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
