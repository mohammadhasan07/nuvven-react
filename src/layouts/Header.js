import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            sideBarOpen:false,
            searchExpand:false,
            
        }
    }

    render() {
        return (
            <div className="app-header d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">

                            <div className={this.state.searchExpand?"app-searchbar-wrapper d-flex align-items-center m-app-show":"app-searchbar-wrapper d-flex align-items-center"}>
                                <i className="fi flaticon-search"></i>
                                <input type="text" name="app-search" id="" placeholder="Search Here" />
                                {/* remove .m-app-show from .app-searchbar-wrapper when clicked */}
                                <i className="fi flaticon-close d-none" onClick={()=>{this.setState({searchExpand:false})}}></i>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-end align-items-center">
                            <div class="app-sidebar-trigger-wrapper d-md-none">
                                {/* Add .fade-in-left to .app-sidebar when clicked */}
                                <a href="javscript:void(0);" onClick={()=>this.props.toggleSideAnim()} class="app-sidebar-trigger">
                                    <i class="fi flaticon-menu-button"></i>
                                </a>
                            </div>
                            {/* Add .m-app-show to .app-searchbar-wrapper when clicked */}
                            <div className="app-search-trigger-wrapper d-md-none" onClick={()=>{this.setState({searchExpand:true})}}>
                                <a href="javscript:void(0);" class="app-search-trigger">
                                    <i class="fi flaticon-search"></i>
                                </a>
                            </div>
                            <div className="app-notification-wrapper">
                                <a href="javscript:void(0);" className="app-notification position-relative"><i
                                    className="fi flaticon-notifications-button"></i>
                                    <span className="app-badge position-absolute">99+</span>
                                </a>

                            </div>
                            <div className="app-user d-flex align-items-center">
                                <a className="app-user-name d-flex align-items-center" href="javascript:void(0);">Jon Doe <i
                                    className="fi flaticon-arrow-down-sign-to-navigate"></i></a>
                                <img src="icons/user.png" alt="" className="mr-lg-3 ml-lg-3 app-user-img" />
                                <img src="icons/car-rent.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
