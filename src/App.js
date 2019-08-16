// system Libraries
import React from 'react';
import { Icon } from 'semantic-ui-react';

// internal framework libraries
import { AppFrameProvider, AppFrame, AppModal } from './appframe.js';
import { NetAppProvider, WSConnection } from './appnetwork';


// application-logic libraries
import UISelectionTab from './selectiontab.js';
import { BIPSAppProvider, BIPSAppContext } from './AppData.js';
import FillHeaderTab from './tabheaderfill.js';

// // application-UI-pages goes here
import LandingPage, {CustomFrameHeaderLanding, Landing} from './app_pages/landingPage.js';
import PortfolioPage from './app_pages/portfolioPage.js';
import StockSummaryPage from './app_pages/stockSummary.js';
import AnalyticPage from './app_pages/analyticPage';
import ChatSupportPage from './app_pages/chatsupportPage';
import LiveTradePage from './app_pages/livetradePage';
import MarketStatistikPage, {CustomFrameHeaderMarketStatistik, MarketStatistik} from './app_pages/marketstatistikPage';
import StockPage, {CustomFrameHeaderStock, Stock} from './app_pages/stockPage';
import TradePage from './app_pages/tradePage';
import LoginPage from './app_pages/loginPage';
import MainPage from './app_pages/mainPage';

//choose night or light
const cssmode = 'light';

if (cssmode == 'night'){
    // require css nightmode
    require('./semantic-dist/semantic.min.css');
    require('./bootstrap-dist/bootstrap/dist/css/bootstrap.min.css');
    require('./App.css');
} else if(cssmode == 'light') {
    // require css lightmode
    require('./semantic-dist/semantic-lightmode.min.css');
    require('./bootstrap-dist/bootstrap/dist/css/bootstrap-lightmode.min.css');
    require('./App-lightmode.css');
}

class App extends React.Component {
  
  render() {
    return (
      <AppFrameProvider
        initialClasses={{Landing, MarketStatistik, Stock, TradePage, AnalyticPage, ChatSupportPage, LiveTradePage, LoginPage}}
        initialFrames={
          [
            {className: 'Landing', title: <CustomFrameHeaderLanding/>, instanceName: 'landingPage'},
            {className: 'MarketStatistik', title: <CustomFrameHeaderMarketStatistik/>, instanceName: 'marketstatistikPage'},
            {className: 'Stock', title: <CustomFrameHeaderStock/>, instanceName: 'stockPage'},
            {className: 'TradePage', title: 'TRADE PAGE', instanceName: 'tradePage'},
            {className: 'AnalyticPage', title: 'ANALYTIC PAGE', instanceName: 'analyticPage'},
            {className: 'ChatSupportPage', title: 'CHAT SUPPORT PAGE', instanceName: 'chatsupportPage'},
            {className: 'LiveTradePage', title: '', instanceName: 'livetradePage'},
            // {className: 'LoginPage', title: 'LOGIN', instanceName: 'loginPage'},
          ]
        }
      >
        <NetAppProvider>
          <BIPSAppProvider>
            <WSConnection />
            <MainPage />
          </BIPSAppProvider> 
        </NetAppProvider>
      </AppFrameProvider>
    )
  }
}

export default App;
export {cssmode};
