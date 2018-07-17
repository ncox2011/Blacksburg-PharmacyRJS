import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Pharmacy from './Pharmacy';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<Router>
<Pharmacy />
    </Router>), document.getElementById('root'));

registerServiceWorker();
