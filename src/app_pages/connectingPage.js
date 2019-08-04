import React from 'react';
import { AppFrameAction } from '../appframe.js';
import loading from './../img/connecting.gif';

class ConnectingPage extends React.PureComponent {
    render () {
        return (
            <div className="bg-black-trading card-100">
                <AppFrameAction ref="frameAction" />
                <main>
                    <div className="container-fluid p-login text-center align-middle align-self-center">
                        <h1 className="fa-4x">BIPS</h1>
                        <img src={loading} alt="Connecting" className="img-loading"/>
                        <h1>Connecting......</h1>
                    </div>
                </main>
            </div>
        );
    }
}

export default ConnectingPage;
