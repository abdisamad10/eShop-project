 import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reducer, {initialState} from  './Reducer';
import { StateProvider } from './StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
 <StateProvider initialState={initialState} reducer={reducer}>
    <App />
 </StateProvider>
 </StrictMode>
);


