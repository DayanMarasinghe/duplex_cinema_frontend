import { Component } from "react";
import './Topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';



class Topbar extends Component {
    render() {
        return (
            <div className='topbar'>
                <div className='topbarWrapper'>
                    <div className='topLeft'>
                        <span className='logo'>SYSTEM ADMIN</span>
                    </div>
                    <div className='topRight'>
                        <div className="topbarIconContainer">
                            <NotificationsActiveIcon />
                        </div>
                        <div className="topbarIconContainer">
                            <LanguageIcon />
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <SettingsIcon />
                        </div>
                        <img src='https://images.medindia.net/amp-images/beauty/skin-care-tips-for-working-women.jpg' alt='' className='topAvatar' />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Topbar