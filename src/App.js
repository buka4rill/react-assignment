import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Action from './components/actions/ActionsSection';
import TestPageSection from './components/testPage/TestPageSection';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import Sidenav from './components/layout/Sidenav';

class App extends Component {

  // App level state
  // Passed down as props to ActionSection and to ActionCard
  state = {
    // Actions
    actions: {
      backlogs: [
        {
          id: uuid.v4(),
          title: 'Apply gradient colours on the dashboard sidenav',
          date: 'Due Aug 8',
          isNotClicked: true
        },  
        {
          id: uuid.v4(),
          title: 'Make Background Image blur',
          date: 'Due Aug 9',
          isNotClicked: true,
        },  
        {
          id: uuid.v4(),
          title: 'Apply gradient colours on the navigations',
          date: 'Due Aug 10',
          isNotClicked: true
        },  
      ]
    }
  }

  // AddBacklogs passed up from Backlogs up to Action Section
  // to app
  // Add backlogs cards
  addBacklogs = text => {
    // Pass text into State
    const newBacklog = {
      id: uuid.v4(),
      title: text,
      date: 'Due Aug 12',
      isNotClicked: true
    }

    // Set newBacklog state
    this.setState({ actions: { backlogs: [...this.state.actions.backlogs, newBacklog] } });
  }


  render() {
    // console.log(this.state.actions.backlogs);
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Sidenav />
          
          <Route exact path="/" render={ props => (
            <Fragment>
              <Action 
                backlogs={this.state.actions.backlogs}
                addBacklogs={this.addBacklogs}
              />
            </Fragment>
          )} />

          <Route exact path="/test" render={ props => (
            <Fragment>
              <TestPageSection 
                backlogs={this.state.actions.backlogs}
              />
            </Fragment>
          )} />

          
          {/* <TestPageSection /> */}
        </div>
      </Router>
    );
  }
}


export default App;