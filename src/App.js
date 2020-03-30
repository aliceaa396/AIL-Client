import React, { Component } from 'react'
import Nav from './Components/Nav/Nav'
import SideDrawer from './Components/SideDraw/SideDrawer';
import BackDrop from './Components/BackDrop/BackDrop';



export class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClick = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backDropToggleClick = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropToggleClick}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Nav 
          drawerClickHandler = {this.drawerToggleClick}
        />

        <SideDrawer 
          show={this.state.sideDrawerOpen}
        />
        
        {backDrop}
        <main style={{marginTop: '64px'}}>
          <p> PAGE CONTENT </p>
        </main>
        
      </div>
    )
  }
}

export default App
