import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarActives: false
        }
    }

    componentWillMount() {
        this.setState({ sideBarActives: this.props.sideBarActives });
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({sideBarActives:nextProps.sideBarActives});
    // }

    render() {

        return (
            // app-sidebar-collapse
            // fade-in-left
            <div className={this.state.sideBarActives ? "app-sidebar app-sidebar-collapse position-fixed" : this.props.sideAnim===true?"app-sidebar d-none d-lg-block position-fixed fade-in-left":"app-sidebar d-none d-lg-block position-fixed "}>
                <div className="app-logo-wrapper d-flex">
                    <a className="app-logo" href="javascript:void(0);">
                        <img src="icons/logo-icon.png" alt="" className="app-logo-icon" />
                        <img src="icons/logo-default.png" alt="" className="app-logo-default" />
                    </a>
                </div>
                <nav className="app-navigation d-flex flex-column justify-content-between">
                    <ul className="app-link-list list-unstyled mb-0">
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-dashboard"></i><span
                                    className="app-link-text text-uppercase">dashboard</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-small-calendar"></i><span
                                    className="app-link-text text-uppercase">calendar</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white active-link">
                                <i className="fi flaticon-check-mark"></i><span
                                    className="app-link-text text-uppercase">bookings</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-manager"></i><span
                                    className="app-link-text text-uppercase">customers</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-car-1"></i><span className="app-link-text text-uppercase">fleet</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-credit-card"></i><span
                                    className="app-link-text text-uppercase">payments</span>
                            </a>
                        </li>
                        <li className="app-link-list-item">
                            <a href="javascript:void(0);"
                                className="app-link d-flex align-items-center text-decoration-none text-white">
                                <i className="fi flaticon-progress-report"></i><span
                                    className="app-link-text text-uppercase">reports</span>
                            </a>
                        </li>
                    </ul>
                    <div className="app-nav-extra">
                        <a href="javascript:void(0);"
                            className="app-link d-flex align-items-center text-decoration-none text-white">
                            <i className="fi flaticon-settings"></i><span className="app-link-text text-uppercase">settings</span>
                        </a>
                    </div>
                </nav>
                <a href=""
                    onClick={(e) => { e.preventDefault(); this.props.expandStuff(!this.state.sideBarActives); this.setState({ sideBarActives: !this.state.sideBarActives }); }}
                    className="app-sidebar-toggle d-none d-lg-flex align-items-center justify-content-center position-absolute"
                    id="sidebar_toggle">
                    {/* flaticon-menu */}
                    <i className={this.state.sideBarActives ? "fi flaticon-close" : "fi flaticon-menu"}></i>
                </a>

                {/* remove fade-in-left add fade-out-left*/}
                <a href="javascript:void(0);" onClick={()=>this.props.fadeOut()}
                    class="app-sidebar-close d-block d-lg-none position-absolute"
                    id="sidebar_close">
                    <i class="fi flaticon-close"></i>
                </a>
            </div>
        )
    }
}
