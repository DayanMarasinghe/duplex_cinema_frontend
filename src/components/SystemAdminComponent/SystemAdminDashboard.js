import React, { Component } from "react";
import './SystemAdminDashboard.css'
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import ViewAdmin from "./MovieAdmin/ViewAdmin";


class SystemAdminDashboard extends Component {

    render() {
        return (
            <div>
                <Topbar />
                <div className="containers ">
                    <Sidebar />
                    <div className="others">
                        <ViewAdmin/>
                    </div>
                </div>
            </div>  
        );
    }
}

export default SystemAdminDashboard
