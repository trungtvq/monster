import React from 'react';
import { askForPermissioToReceiveNotifications } from '../initializeFirebase';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      click to ask
    </button>
);

export default NotificationButton;