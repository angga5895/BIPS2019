import React from 'react';
import { AppFrameAction } from '../appframe.js';

class AnalyticPage extends React.PureComponent {

    render () {
        return (
            <div>
                <AppFrameAction ref="frameAction" />
                <h1>WELCOME TO ANALYTIC PAGE</h1>
            </div>
        );
    }
}

export default AnalyticPage;
