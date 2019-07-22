import React, { Fragment, Component } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Bookings from './layouts/Bookings';
import 'antd/dist/antd.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      sidebarActive:false,
      sideAnim:false
    }
  }
  render(){
    // alert(this.state.sidebarActive)
    return [
      <div className="app-wrapper position-relative">
        <Sidebar fadeOut={()=>this.setState({sideAnim:false})} sideAnim={this.state.sideAnim} expandStuff={(state)=>{this.setState({sidebarActive:state})}} sideBarActives={this.state.sidebarActive} />
        <div className={this.state.sidebarActive?"app-main app-main-expand":"app-main "}>
          <Header toggleSideAnim={()=>{this.setState({sideAnim:!this.state.sideAnim})}} />
          <div className="app-content">
            <div className="container-fluid">
              <Bookings />
            </div>
          </div>
        </div>
      </div>,
      // show
      // <div class="modal-backdrop fade"></div>
    ];
  }
}

export default App;
