import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { HashRouter,Route,Routes } from 'react-router-dom';
import { RenderCharacter } from './RenderCharacter';
import { DetailCharacter } from './DetailCharacter';
const root = document.querySelector("#root");

ReactDOM.render(
<HashRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<RenderCharacter/>}/>
            <Route path=":characterID" element={<DetailCharacter/>}/>
        </Route>
    </Routes>
</HashRouter>,root)
