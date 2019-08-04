import React from 'react';
import { AppFrameAction } from '../appframe.js';

class StockSummaryPage extends React.PureComponent {

  render () {
    return (
      <div>
        <AppFrameAction ref="frameAction" />
        <h1>STOCK SUMMARY GOES HERE</h1>
      </div>
    );
  }
}

export default StockSummaryPage;
