import React from 'react';

// internal framework libraries
import { WSConnectionAction } from '../appnetwork.js';
import { AppFrameAction, AppFrame, AppModal } from '../appframe.js';

// application-logic libraries
import { BIPSAppContext } from '../AppData.js';

// application-common-UI libraries goes here
// import LandingPage, {CustomFrameHeaderLanding, Landing} from './landingPage.js';
import UISelectionTab from '../selectiontab.js';
import { ContextConnector } from '../appcontext.js';
import LoginPage from './loginPage.js';
import SideBar from "../SideBar";
import ConnectingPage from "./connectingPage";

const CustomFrameHeader = (props) => {
    return (
      <div className="bg-black-trading d-border-top">
          {props.title}
      </div>
    );
  }

class MainPage_Base extends React.Component{
    
    constructor(props){
        super(props);
    }

    doLogin = (userID, password) => {
        this.props.doLogin(userID, password);
    }


    render(){
        var props = this.props;
        return(
            <div>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                {/*<div style={{display:!props.networkState ? "block" : "none" }}>
                    <ConnectingPage/>
                </div>
                <div style={{display:props.networkState && !props.loginState ? "block" : "none"}} >
                    <LoginPage onLogin={this.doLogin} />
                </div>
                <div style={{display: props.networkState && props.loginState ? "block" : "none"}}>*/}

                    <UISelectionTab linkTitles={
                        {
                            landingPage:
                                <div className="text-align-center">
                                    <i className="icon-investment-board fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips">INVESTMENT<br/>BOARD</span>
                                </div>,
                            marketstatistikPage:
                                <div className="text-align-center">
                                    <i className="icon-market-statistic fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 6.5px"}}>MARKET &</span><br/>
                                    <span className="fs-text-bips">STATISTIC</span>
                                </div>,
                            stockPage:
                                <div className="text-align-center">
                                    <i className="icon-stock-page fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 15.3px"}}>
                                              STOCK
                                            </span>
                                </div>,
                            tradePage:
                                <div className="text-align-center">
                                    <i className="icon-trade-page fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 15.3px"}}>
                                              TRADE
                                            </span>
                                </div>,
                            analyticPage:
                                <div className="text-align-center">
                                    <i className="icon-analytic_page fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 7.8px"}}>ANALYTIC</span>
                                </div>,
                            chatsupportPage:
                                <div className="text-align-center">
                                    <i className="icon-chat-support fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 11.1px"}}>CHATS &</span><br/>
                                    <span className="fs-text-bips">SUPPORT</span>
                                </div>,
                            livetradePage:
                                <div className="text-align-center">
                                    <i className="icon-live-trade fs-icon-bips"></i> <br/>
                                    <span className="fs-text-bips" style={{padding:"0px 21.09px"}}>LIVE</span><br/>
                                    <span className="fs-text-bips">TRADE</span>
                                </div>
                        }
                    }/>

                    <div className="row col-lg-12 px-0 mx-0">
                        <SideBar/>
                        <div className="col-lg-11 px-0 mx-0">
                            <AppFrame headerComponent={CustomFrameHeader}/>
                        </div>
                    </div>
                    <AppModal />
                </div>
            /*</div>*/
        )
    }
}

const MainPage = ContextConnector(BIPSAppContext,
    (vars, actions)=>({
        loginState:vars.loginState,
        networkState:vars.networkState,
        doLogin: (userID, password)=>{actions.sendAction('doLogin', {userID, password})},
    })
    )(MainPage_Base);

    export default MainPage;