import React from 'react';
import {
    Router,
    Switch,
    Route
  } from "react-router-dom";
import StreamCreate from './stream/StreamCreate';
import StreamList from './stream/StreamList';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamShow from './stream/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            
         <Router history={history}>
           <Header></Header>  
            <Switch>
               <Route path="/" exact>
                  <StreamList/>
               </Route>
               <Route path="/stream/new" exact>
                  <StreamCreate/>
               </Route> 
               <Route path="/streams/edit/:id" exact>
                  <StreamEdit/>
               </Route> 
               <Route path="/stream/delete/:id" exact>
                  <StreamDelete/>
               </Route>
               <Route path="/stream/:id" exact>
                  <StreamShow/>
               </Route>                      
            </Switch> 
        </Router>
        </div>
        
    );
};

export default App;