import React, { Component } from 'react'
// import Nav from './Components/Nav/Nav'
// import SideDrawer from './Components/SideDraw/SideDrawer';
// import BackDrop from './Components/BackDrop/BackDrop';
import Header from './Components/Header/Header'



export class App extends Component {

  render() {
  

    return (
      <div style={{height: '100%'}}>
        <Header />
        
        <main style={{marginTop: '64px'}}>
          <p> PAGE CONTENT </p>
        </main>
        
      </div>
    )
  }
}

export default App
