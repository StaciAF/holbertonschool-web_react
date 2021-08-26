import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import { getLatestNotification } from '../utils/utils'
import PropTypes from 'prop-types'

const Notifications = ({ displayDrawer }) => {
    return (
        <>
            <div className="menuItem">Your notifications</div>
            { displayDrawer && (
                <div className="Notifications">
                    <p>Here is the list of notifications
                <button style={{ position: "relative", top: "-50px", right: "-900px" }}
                            onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} alt="close" style={{ height: "45px", width: "45px" }}></img>
                        </button>
                    </p>
                    <ul>
                        <li data-priority="default">New course available</li>
                        <li data-priority="urgent">New resume available</li>
                        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} data-priority="urgent" />
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propType = {
    displayDrawer: PropTypes.bool,
};
Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;