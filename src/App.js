import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import SidebarOneIn from './components/SidebarOneIn';
import MainPageIn from './components/MainPage/MainPageIn';
import SidebarTwo from './components/SidebarTwo';
import MainPageUnread from './components/MainPage/MainPageUnread';
import MainPageSt from './components/MainPage/MainPageSt';
import MainPageDr from './components/MainPage/MainPageDr';
import MainPageSe from './components/MainPage/MainPageSe';
import MainPageAr from './components/MainPage/MainPageAr';
import MainPageSp from './components/MainPage/MainPageSp';
import MainPageTr from './components/MainPage/MainPageTr';
import MainPagePh from './components/MainPage/MainPagePh';
import MainPageDo from './components/MainPage/MainPageDo';
import MainPageSu from './components/MainPage/MainPageSu';
import MainPageSh from './components/MainPage/MainPageSh';
import MainPageRe from './components/MainPage/MainPageRe';
import MainPageTra from './components/MainPage/MainPageTra';
import MailMessage from './components/MailMessage';
import Compose from './components/Compose';

function App() {
  return (
    <Router>
      <>
        <Header />
        <div style={{display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
          <SidebarOneIn />
          <Switch>
            <Route exact path='/'>
              <MainPageIn/>
            </Route>
            <Route exact path='/unread'>
              <MainPageUnread/>
            </Route>
            <Route exact path='/starred'>
              <MainPageSt />
            </Route>
            <Route exact path='/drafts'>
              <MainPageDr/>
            </Route>
            <Route exact path='/sent'>
              <MainPageSe/>
            </Route>
            <Route exact path='/archive'>
              <MainPageAr/>
            </Route>
            <Route exact path='/spam'>
              <MainPageSp/>
            </Route>
            <Route exact path='/trash'>
              <MainPageTr/>
            </Route>
            <Route exact path='/photos'>
              <MainPagePh />
            </Route>
            <Route exact path='/documents'>
              <MainPageDo/>
            </Route>
            <Route exact path='/subscriptions'>
              <MainPageSu/>
            </Route>
            <Route exact path='/shopping'>
              <MainPageSh/>
            </Route>
            <Route exact path='/receipts'>
              <MainPageRe/>
            </Route>
            <Route exact path='/travel'>
              <MainPageTra/>
            </Route>
            <Route exact path='/inbox/messages'>
              <MailMessage />
            </Route>
            <Route exact path='/compose'>
              <Compose />
            </Route>
          </Switch>
          <SidebarTwo />
        </div>
      </>
      </Router>
  );
}

export default App;
