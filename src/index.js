import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Profile } from '../src/components/Profile';
import user from '../src/data/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile user={user} />
    </App>
  </React.StrictMode>
);
