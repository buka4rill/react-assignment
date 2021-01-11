import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Action from './components/actions/ActionsSection';
import TestPageSection from './components/testPage/TestPageSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'uuid';
import Sidenav from './components/layout/Sidenav';

class App extends Component {

  // Local Storage
  // localStorage = () => {
  //   return {
  //     storeBacklogs: (backlog) => {
  //       let backlogs;

  //       if (localStorage.getItem('backlogs') === null) {
  //         // Add backlogs

  //         // Set backlogs to array
  //         backlogs = [];

  //         // push new backlog to backlogs array
  //         backlogs.push(backlog);

  //         // Set local storage
  //         localStorage.setItem('backlogs', JSON.stringify(backlogs));
  //       } else {
  //         backlogs = JSON.parse(localStorage.getItem('backlogs'));

  //         // Push new logs to already exiting logs
  //         backlogs.push(backlogs);

  //         // Reset Local Storage
  //         localStorage.setItem('backlogs', JSON.stringify(backlogs));
  //       }
  //     },
  //     getBacklogsFromLS: () => {
  //       let backlogs;

  //       // Check to see if there are any backlogs in LS
  //       if (localStorage.getItem('backlogs') === null) {
  //         // Init Backlogs
  //         backlogs = [];
  //       } else {
  //         backlogs = JSON.parse(localStorage.getItem('courses'));
  //       }

  //       return backlogs;
  //     }
  //   }
  // }

  // logData;

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
      ],

      // backlogs: this.getBacklogsFromLS(),

      showSideBar: false,
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

    // Add to LS
    // let lsBacklogs;

    // // If LS is empty
    // if (localStorage.getItem('backlogs') === null ) {
    //   // Add Backlogs to array

    //   lsBacklogs = [];
    //   // Push newBacklogs from input
    //   lsBacklogs.push(newBacklog)
      
    //   // Set LS
    //   localStorage.setItem('backlogs', JSON.stringify(lsBacklogs));
      
    //   // Set newBacklog state
    //   // this.setState({ actions: { backlogs: [...this.state.actions.backlogs, newBacklog] } });
    // } else {
    //   lsBacklogs = JSON.parse(localStorage.getItem('backlogs'));

    //   // Push newBacklogs to existing ls backlogs
    //   lsBacklogs.push(newBacklog);

    //   // Set LS
    //   localStorage.setItem('backlogs', JSON.stringify(lsBacklogs));
    // } 
  }

  // componentDidMount() {
  //   // this.logData = JSON.parse(localStorage.getItem('backlogs'));

  //   // let datas;

  //   // this.logData.forEach(data => {
  //   //   // datas = data;
  //   //   if (data) {
  //   //     datas = data;
  //   //   }
  //   // })

  //   // console.log(datas);

    
  //     this.setState({ actions: { backlogs: [...this.state.actions.backlogs, datas] } });
  //   // } else {
  //   //   // Set state to empty
  //   //   // this.setState( this.state.actions ); 
  //   // }
  // } 

  // Toggle sidebar
  toggleSideBar = (e) => {
    e.preventDefault();

    // Set showSideBar to "true"
    this.setState({ actions: { 
      ...this.state.actions, 
      showSideBar: !this.state.actions.showSideBar 
    }});  
  }

  closeSideBar = (e) => {
    e.preventDefault();

    // Set showSideBar to "false"
    this.setState({ actions: { 
      ...this.state.actions, 
      showSideBar: !this.state.actions.showSideBar 
    }});  
    // console.log("I was clicked")
  }

  // getBacklogsFromLS = () => {
  //   let backlogs;

  //   // Check to see if there are any backlogs in LS
  //   if (localStorage.getItem('backlogs') === null) {
  //     // Init Backlogs
  //     backlogs = [];
  //   } else {
  //     backlogs = JSON.parse(localStorage.getItem('backlogs'));
  //     // this.setState({ actions: { backlogs: [...this.state] }});
  //   }

  //   return backlogs;

  //   // Set state to backlogs
  //   // this.setState({ actions: { backlogs: [...this.state.actions.backlogs, backlogs]} })
  // }

  render() {
    // console.log(this.getBacklogsFromLS());
    // console.log(this.state);
    const { showSideBar } = this.state.actions;

    return (
      <Router>
        <div className="App">
          <Header toggleSideBar={this.toggleSideBar} />
          <Navbar />

          {showSideBar ? (<Sidenav style={{ display: 'block' }} closeSideBar={this.closeSideBar} />) : null }
          <Switch>
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
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
