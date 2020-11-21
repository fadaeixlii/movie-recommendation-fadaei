import { render } from 'react-dom'
import React from 'react';
import App from './App';
import GlobalState from './Components/GlobalState';
render(<GlobalState>
    < App />
</GlobalState>
, document.getElementById("root"));