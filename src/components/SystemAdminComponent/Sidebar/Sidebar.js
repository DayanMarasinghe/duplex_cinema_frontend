import { Component } from "react";
import './Sidebar.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheatersIcon from '@mui/icons-material/Theaters';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Link} from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (
            <div  className="sidebar">
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
                                    <Link to= "/systemadmindashboard" >Movies</Link>
                                </li>
                                
                                <li className="sidebarListItem">
                                    <SupervisorAccountIcon/>
                                    <Link to= "/viewadmin" >Movie Admin</Link>
                                </li>

                                
                                
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar