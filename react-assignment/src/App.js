import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Action from './components/actions/ActionsSection';

class App extends Component {

  // App level state
  // Passed down as props to ActionSection and to ActionCard
  state = {
    // Actions
    actions: {
      backlogs: [
        {
          id: 1,
          title: 'Apply gradient colours on the dashboard sidenav',
          date: 'Due Aug 8'
        },  
        {
          id: 2,
          title: 'Make Background Image blur',
          date: 'Due Aug 9'
        },  
        {
          id: 3,
          title: 'Apply gradient colours on the navigations',
          date: 'Due Aug 10'
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
      id: 4,
      title: text,
      date: 'Due Aug 12'
    }

    console.log(text)


    this.setState({ actions: { backlogs: [...this.state.actions.backlogs, newBacklog] } });
  
  }




  render() {
    console.log(this.state.actions.backlogs);
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Action 
          backlogs={this.state.actions.backlogs}
          addBacklogs={this.addBacklogs}
        />
      </div>
    );
  }
}


export default App;
