import { Component } from "react";
import './Sidebar.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheatersIcon from '@mui/icons-material/Theaters';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h4 className="sidebarTitle">Dashboard</h4>
                            <ul className="sidebarList">
                                <li className="sidebarListItem">
                                    <AccountBoxIcon/>
                                    Account
                                </li>
                                <li className="sidebarListItem">
                                    <TheatersIcon/>
                                    Movies
                                </li>
                                <li className="sidebarListItem">
                                    <SupervisorAccountIcon/>
                                    Movie Admin
                                </li>
                                
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar