import React from 'react';
import './Notification.css';

function Notification(props) {
    return (
        <div className="notification-container">
            <div className="notification-top-container">
            
            </div>
            <div className="notification-sub-container">
                <span className="notification-line"></span>
                <div className={`notification ${props.message ? 'active' : ''}`}>
                    {props.message}
                </div>
                <span className="notification-line2"></span>
            </div>
        </div>

    );
}

export default Notification;
