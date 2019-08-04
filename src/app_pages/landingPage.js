// system Libraries
import React from 'react';
import './../App.css';
import UISelectionTab from "../selectiontab";
import {Button, Table, UncontrolledTooltip} from "reactstrap";

// internal framework libraries
import { AppFrameAction } from '../appframe.js';
import {AppFrame, AppFrameProvider, AppModal} from "../appframe";
import { NetAppProvider, WSConnection } from '../appnetwork';
import { BIPSAppContext } from '../AppData.js';
import { ContextConnector } from '../appcontext.js';

// application-logic libraries
import {BIPSAppProvider} from "../AppData";
import FillHeaderTab from "../tabheaderfill";
import SideBar from './../SideBar';

// import frames goes here
import MarketStatistikPage from "./marketstatistikPage";
import StockPage from "./stockPage";
import TradePage from "./tradePage";
import AnalyticPage from "./analyticPage";
import ChatSupportPage from "./chatsupportPage";
import LiveTradePage from "./livetradePage";
import ModalBuy from './app_modals/modal_buy';
import ModalSell from "./app_modals/modal_sell";
import ModalAmend from "./app_modals/modal_amend";
import VerifyPIN from "./verifyPin";
import ModalOrderDetail from "./app_modals/modal_order_detail";

const CustomFrameHeaderLanding_Base = (props) =>{
    // console.log(props.isGrid)
    return (
        <AppFrameProvider
            initialClasses={{
                LandingPage,
                OrderList,
                FixedIncome,
                MutualFund,
            }}
            initialFrames={
                [
                    {className: 'LandingPage', title: 'LANDING PAGE', instanceName: 'landingPageInvboard'},
                    {className: 'OrderList', title: 'ORDER LIST PAGE', instanceName: 'orderListPageInvboard'},
                    {className: 'FixedIncome', title: 'FIXED INCOME PAGE', instanceName: 'fixIncomePageInvboard'},
                    {className: 'MutualFund', title: 'MUTUAL FUND PAGE', instanceName: 'mutualFundPageInvboard'},
                ]
            }>
            {/* <BIPSAppProvider> */}
            <div className="row col-sm-12 px-0 mx-0 align-self-center">
                <div className="col-sm-10 px-0 mx-0 d-border-bottom">
                    <FillHeaderTab linkTitles={
                        {
                            landingPageInvboard: 'PORTOFOLIO',
                            orderListPageInvboard: 'ORDER LIST',
                            fixIncomePageInvboard: 'FIXED INCOME',
                            mutualFundPageInvboard: 'MUTUAL FUND'
                        }
                    }/>
                </div>
                <div className="col-sm-2 pr-4 mx-0 text-right d-border-bottom d-border-left cssmenu">
                    <button className="my-2 mx-0 col-sm-12 btn btn-md btn-dark" onClick={()=>{props.handleView(props.isGrid)}}>{props.isGrid ? "Tabview" : "GridView"}</button>
                </div>
            </div>
            <AppFrame headerComponent={LandingFrameHeader}/>
            <AppModal/>
            {/* </BIPSAppProvider> */}
        </AppFrameProvider>
    );
}

const LandingFrameHeader = (props) => {
    return (
        <>
        </>
    );
}

// bagian utama

class Landing extends React.PureComponent {
    //hanya memanggil headernya saja
    render () {
        return (
            <div className="bg-black-trading px-0 mx-0">
            </div>
        );
    }
}

class LandingPage_Base extends React.PureComponent {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickBuy = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: BuyModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickSell = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: SellModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickAmend = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: AmendModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickWithdraw = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'mini',
            contentClass: WithdrawModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickOrderDetail = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div className="col-sm-12 px-0 mx-0 text-right">
                    <i className="icofont icofont-close text-icofont-close text-border click-pointer" onClick={this.closeClick}></i>
                </div>,
            size: 'large',
            contentClass: OrderDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    render () {
        // console.log(this.props.isGrid)
        return (
            <>
                {this.props.isGrid ?
                    (<div className="bg-black-trading">
                        <AppFrameAction ref="frameAction"></AppFrameAction>
                        <main>
                            <div className="container-fluid">
                                <div className="container px-1 mx-0 col-sm-12 row">
                                    {/* portofolio */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-trading d-border-active-tab">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">PORTOFOLIO EQUITY</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">15,234,000</span>
                                                        <br/> Stock Val
                                                    </div>
                                                    <div className="col-sm-4 px-0 mx-0 text-center">
                                                        <span className="text-success">+1,496,198 (+7.50%)</span>
                                                        <br/> P/L
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body scrollable">
                                                {/* <CardForEquiuty clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell}/> */}
                                                <PortofolioTable classView="text-white f-9" clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell} tp1="ptooltip1" tp2="ptooltip2" tp3="ptooltip3" tp4="ptooltip4" tp5="ptooltip5"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FixedIncome */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">FIXED INCOME</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">46,000,000</span>
                                                        <br/> Total Nominal
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body scrollable">
                                                <FixedIncomeTable classView="text-white f-9" clickbuy={this.buttonClickBuy}/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* order list */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">ORDER LIST</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                            </div>
                                            <div className="card-body scrollable">
                                                <OrderListTable clickamend={this.buttonClickAmend} clickwithdraw={this.buttonClickWithdraw} clickorderdetail={this.buttonClickOrderDetail} classView="text-white f-9"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mutual Funs */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">MUTUAL FUND</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">4,088,802</span>
                                                        <br/> Invested
                                                    </div>
                                                    <div className="col-sm-4 px-0 mx-0 text-center">
                                                        <span className="text-success">+496,198 (+9.50%)</span>
                                                        <br/> P/L
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body scrollable">
                                                <MutualFundTable clickamend={this.buttonClickAmend} classView="text-white f-9"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </main>
                    </div>)
                    :
                    (<>
                        <AppFrameAction ref="frameAction" />
                        <div className="card card-tab-trading bg-black-trading">
                            <div className="card-header bg-grey">
                                <div className="row col-sm-12 px-0 mx-0">
                                    <div className="col-sm-10 px-0 mx-0 f-12">
                                        <div className="row col-sm-12 px-0 mx-0">
                                            <div className="col-sm-2 px-0 mx-0 text-center f-12">
                                                <span className="text-primary">15,234,000</span>
                                                <br/> Stock Val
                                            </div>
                                            <div className="col-sm-4 px-0 mx-0 text-center f-12">
                                                <span className="text-success">+1,496,198 (+7.50%)</span>
                                                <br/> P/L
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                </div>
                            </div>
                            <AppFrameAction ref="frameAction" />
                            <div className="card-body scrollable">
                                <PortofolioTable classView="text-white" clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell} tp1="ptooltip1" tp2="ptooltip2" tp3="ptooltip3" tp4="ptooltip4" tp5="ptooltip5"/>
                            </div>
                        </div>
                    </>)
                }
            </>
        );
    }
}

class OrderList_Base extends React.Component{
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickBuy = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: BuyModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickSell = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: SellModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickAmend = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: AmendModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickWithdraw = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'mini',
            contentClass: WithdrawModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickOrderDetail = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div className="col-sm-12 px-0 mx-0 text-right">
                    <i className="icofont icofont-close text-icofont-close text-border click-pointer" onClick={this.closeClick}></i>
                </div>,
            size: 'large',
            contentClass: OrderDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    render() {
        return (
            <>
                {this.props.isGrid ?
                    (<div className="bg-black-trading">
                        <AppFrameAction ref="frameAction"></AppFrameAction>
                        <main>
                            <div className="container-fluid">
                                <div className="container px-1 mx-0 col-sm-12 row">
                                    {/* portofolio */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">PORTOFOLIO EQUITY</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">15,234,000</span>
                                                        <br/> Stock Val
                                                    </div>
                                                    <div className="col-sm-4 px-0 mx-0 text-center">
                                                        <span className="text-success">+1,496,198 (+7.50%)</span>
                                                        <br/> P/L
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body scrollable">
                                                {/* <CardForEquiuty clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell}/> */}
                                                <PortofolioTable classView="text-white f-9" clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell} tp1="otooltip1" tp2="otooltip2" tp3="otooltip3" tp4="otooltip4" tp5="otooltip5"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FixedIncome */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">FIXED INCOME</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">46,000,000</span>
                                                        <br/> Total Nominal
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body scrollable">
                                                <FixedIncomeTable classView="text-white f-9" clickbuy={this.buttonClickBuy}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-trading d-border-active-tab">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">ORDER LIST</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                            </div>
                                            <div className="card-body scrollable">
                                                <OrderListTable clickamend={this.buttonClickAmend} clickwithdraw={this.buttonClickWithdraw} clickorderdetail={this.buttonClickOrderDetail} classView="text-white f-9"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mutual Funs */}
                                    <div className="col-md-6 px-1 py-2">
                                        <div className="card card-trading bg-black-inactive">
                                            <div className="card-header bg-grey">
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-10 px-0 mx-0">MUTUAL FUND</div>
                                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                </div>
                                                <div className="row col-sm-12 px-0 mx-0">
                                                    <div className="col-sm-2 px-0 mx-0 text-center">
                                                        <span className="text-primary">4,088,802</span>
                                                        <br/> Invested
                                                    </div>
                                                    <div className="col-sm-4 px-0 mx-0 text-center">
                                                        <span className="text-success">+496,198 (+9.50%)</span>
                                                        <br/> P/L
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body scrollable">
                                                <MutualFundTable clickamend={this.buttonClickAmend} classView="text-white f-9"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>)
                    :
                    (<>
                        <AppFrameAction ref="frameAction" />
                        <div className="card card-tab-trading bg-black-trading">
                            <div className="card-header bg-grey">
                                <div className="row col-sm-12 px-0 mx-0">
                                    <div className="col-sm-12 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                </div>
                            </div>
                            <div className="card-body scrollable">
                                <OrderListTable clickamend={this.buttonClickAmend} clickwithdraw={this.buttonClickWithdraw} clickorderdetail={this.buttonClickOrderDetail} classView="text-white"/>
                            </div>
                        </div>
                    </>)
                }
            </>
        );
    }
}

class FixedIncome_Base extends React.PureComponent {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickBuy = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: BuyModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickSell = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: SellModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickAmend = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: AmendModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickWithdraw = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'mini',
            contentClass: WithdrawModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickOrderDetail = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div className="col-sm-12 px-0 mx-0 text-right">
                    <i className="icofont icofont-close text-icofont-close text-border click-pointer" onClick={this.closeClick}></i>
                </div>,
            size: 'large',
            contentClass: OrderDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    render () {
        return (<>
                { this.props.isGrid ?
                    (<div className="bg-black-trading">
                            <AppFrameAction ref="frameAction" />
                            <main>
                                <div className="container-fluid">
                                    <div className="container px-1 mx-0 col-sm-12 row">

                                        {/* portofolio */}
                                        <div className="col-md-6 px-1 py-2">
                                            <div className="card card-trading bg-black-inactive">
                                                <div className="card-header bg-grey">
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-10 px-0 mx-0">PORTOFOLIO EQUITY</div>
                                                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                    </div>
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-2 px-0 mx-0 text-center">
                                                            <span className="text-primary">15,234,000</span>
                                                            <br/> Stock Val
                                                        </div>
                                                        <div className="col-sm-4 px-0 mx-0 text-center">
                                                            <span className="text-success">+1,496,198 (+7.50%)</span>
                                                            <br/> P/L
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-body scrollable">
                                                    {/* <CardForEquiuty clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell}/> */}
                                                    <PortofolioTable classView="text-white f-9" clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell} tp1="ftooltip1" tp2="ftooltip2" tp3="ftooltip3" tp4="ftooltip4" tp5="ftooltip5"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/* FixedIncome */}
                                        <div className="col-md-6 px-1 py-2">
                                            <div className="card card-trading bg-black-trading d-border-active-tab">
                                                <div className="card-header bg-grey">
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-10 px-0 mx-0">FIXED INCOME</div>
                                                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                    </div>
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-2 px-0 mx-0 text-center">
                                                            <span className="text-primary">46,000,000</span>
                                                            <br/> Total Nominal
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-body scrollable">
                                                    <FixedIncomeTable classView="text-white f-9" clickbuy={this.buttonClickBuy}/>
                                                </div>
                                            </div>
                                        </div>

                                        {/* order list */}
                                        <div className="col-md-6 px-1 py-2">
                                            <div className="card card-trading bg-black-inactive">
                                                <div className="card-header bg-grey">
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-10 px-0 mx-0">ORDER LIST</div>
                                                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                    </div>
                                                </div>
                                                <div className="card-body scrollable">
                                                    <OrderListTable clickamend={this.buttonClickAmend} clickwithdraw={this.buttonClickWithdraw} clickorderdetail={this.buttonClickOrderDetail} classView="text-white f-9"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mutual Funs */}
                                        <div className="col-md-6 px-1 py-2">
                                            <div className="card card-trading bg-black-inactive">
                                                <div className="card-header bg-grey">
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-10 px-0 mx-0">MUTUAL FUND</div>
                                                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                                    </div>
                                                    <div className="row col-sm-12 px-0 mx-0">
                                                        <div className="col-sm-2 px-0 mx-0 text-center">
                                                            <span className="text-primary">4,088,802</span>
                                                            <br/> Invested
                                                        </div>
                                                        <div className="col-sm-4 px-0 mx-0 text-center">
                                                            <span className="text-success">+496,198 (+9.50%)</span>
                                                            <br/> P/L
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-body scrollable">
                                                    <MutualFundTable clickamend={this.buttonClickAmend} classView="text-white f-9"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </main>
                        </div>
                    )
                    :
                    (<>
                        <AppFrameAction ref="frameAction" />
                        <div className="card card-tab-trading bg-black-trading">
                            <div className="card-header bg-grey">
                                <div className="row col-sm-12 px-0 mx-0">
                                    <div className="col-sm-10 px-0 mx-0 f-12">
                                        <div className="row col-sm-12 px-0 mx-0">
                                            <div className="col-sm-3 px-0 mx-0 text-center f-12">
                                                <span className="text-primary">46,000,000</span>
                                                <br/> Total Nominal
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                </div>
                            </div>
                            <div className="card-body scrollable">
                                <FixedIncomeTable classView="text-white" clickbuy={this.buttonClickBuy}/>
                            </div>
                        </div>
                    </>)
                }
            </>
        );
    }
}

class MutualFund_Base extends React.PureComponent {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickBuy = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: BuyModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickSell = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: SellModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickAmend = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'large',
            contentClass: AmendModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickWithdraw = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                            onClick={this.closeClick}></i></div>,
            size: 'mini',
            contentClass: WithdrawModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickOrderDetail = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div className="col-sm-12 px-0 mx-0 text-right">
                    <i className="icofont icofont-close text-icofont-close text-border click-pointer" onClick={this.closeClick}></i>
                </div>,
            size: 'large',
            contentClass: OrderDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    render () {
        return (<>
            {this.props.isGrid ?
                (<div className="bg-black-trading">
                    <AppFrameAction ref="frameAction"></AppFrameAction>
                    <main>
                        <div className="container-fluid">
                            <div className="container px-1 mx-0 col-sm-12 row">
                                {/* portofolio */}
                                <div className="col-md-6 px-1 py-2">
                                    <div className="card card-trading bg-black-inactive">
                                        <div className="card-header bg-grey">
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-10 px-0 mx-0">PORTOFOLIO EQUITY</div>
                                                <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                            </div>
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-2 px-0 mx-0 text-center">
                                                    <span className="text-primary">15,234,000</span>
                                                    <br/> Stock Val
                                                </div>
                                                <div className="col-sm-4 px-0 mx-0 text-center">
                                                    <span className="text-success">+1,496,198 (+7.50%)</span>
                                                    <br/> P/L
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body scrollable">
                                            {/* <CardForEquiuty clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell}/> */}
                                            <PortofolioTable classView="text-white f-9" clickbuy={this.buttonClickBuy} clicksell={this.buttonClickSell} tp1="mtooltip1" tp2="mtooltip2" tp3="mtooltip3" tp4="mtooltip4" tp5="mtooltip5"/>
                                        </div>
                                    </div>
                                </div>

                                {/* FixedIncome */}
                                <div className="col-md-6 px-1 py-2">
                                    <div className="card card-trading bg-black-inactive">
                                        <div className="card-header bg-grey">
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-10 px-0 mx-0">FIXED INCOME</div>
                                                <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                            </div>
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-2 px-0 mx-0 text-center">
                                                    <span className="text-primary">46,000,000</span>
                                                    <br/> Total Nominal
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body scrollable">
                                            <FixedIncomeTable classView="text-white f-9" clickbuy={this.buttonClickBuy}/>
                                        </div>
                                    </div>
                                </div>

                                {/* Order list */}
                                <div className="col-md-6 px-1 py-2">
                                    <div className="card card-trading bg-black-inactive">
                                        <div className="card-header bg-grey">
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-10 px-0 mx-0">ORDER LIST</div>
                                                <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                            </div>
                                        </div>
                                        <div className="card-body scrollable">
                                            <OrderListTable clickamend={this.buttonClickAmend} clickwithdraw={this.buttonClickWithdraw} clickorderdetail={this.buttonClickOrderDetail} classView="text-white f-9"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Mutual Funs */}
                                <div className="col-md-6 px-1 py-2">
                                    <div className="card card-trading bg-black-trading d-border-active-tab">
                                        <div className="card-header bg-grey">
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-10 px-0 mx-0">MUTUAL FUND</div>
                                                <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                                            </div>
                                            <div className="row col-sm-12 px-0 mx-0">
                                                <div className="col-sm-2 px-0 mx-0 text-center">
                                                    <span className="text-primary">4,088,802</span>
                                                    <br/> Invested
                                                </div>
                                                <div className="col-sm-4 px-0 mx-0 text-center">
                                                    <span className="text-success">+496,198 (+9.50%)</span>
                                                    <br/> P/L
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body scrollable">
                                            <MutualFundTable clickamend={this.buttonClickAmend} classView="text-white f-9"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>)
                :
                (<>
                    <AppFrameAction ref="frameAction" />
                    <div className="card card-tab-trading bg-black-trading">
                        <div className="card-header bg-grey">
                            <div className="row col-sm-12 px-0 mx-0">
                                <div className="col-sm-10 px-0 mx-0 f-12">
                                    <div className="row col-sm-12 px-0 mx-0">
                                        <div className="col-sm-2 px-0 mx-0 text-center f-12">
                                            <span className="text-primary">4,088,802</span>
                                            <br/> Invested
                                        </div>
                                        <div className="col-sm-4 px-0 mx-0 text-center f-12">
                                            <span className="text-success">+496,198 (+9.50%)</span>
                                            <br/> P/L
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 text-right font-weight-bold px-0 mx-0"><i className="f-18 ion ion-md-sync click-pointer"></i></div>
                            </div>
                        </div>
                        <div className="card-body scrollable">
                            <MutualFundTable clickamend={this.buttonClickAmend} classView="text-white"/>
                        </div>
                    </div>
                </>)
            }
        </>);
    }
}

// tabel Portofolio
const PortofolioTable = (props) => {
    return(
        <Table borderless responsive size="sm" className={props.classView}>
            <thead className="t-border-bottom-bold no-wrap">
            <tr>
                <th className="align-middle text-center" rowSpan="2">Code <i className="ion ion-ios-arrow-down"></i></th>
                <th className="align-middle text-center" rowSpan="2">Avg. Price</th>
                <th className="align-middle text-center" rowSpan="2">Last Price</th>
                <th className="align-middle text-center t-border-bottom" colSpan="2">T.Vol</th>
                <th className="align-middle text-center" rowSpan="2">Stock Val</th>
                <th className="align-middle text-center" rowSpan="2" colSpan="2">P/L</th>
                <th className="align-middle text-center" rowSpan="2">Remark</th>
                <th className="align-middle text-center" rowSpan="2">Action</th>
            </tr>
            <tr>
                <th className="align-middle text-center">Lot</th>
                <th className="align-middle text-center">Share</th>
            </tr>
            </thead>
            {/* no appdata */}
            <tbody className="no-wrap">
            <tr className="t-border-bottom">
                <td className="align-middle text-center">AALI</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right text-danger">12,550</td>
                <td className="align-middle text-right">12</td>
                <td className="align-middle text-right">122</td>
                <td className="align-middle text-right">12,650,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -60,240</td>
                <td className="align-middle text-right text-danger">-0.40%</td>
                <td className="align-middle text-center"><i className="fa fa-info-circle text-danger" id={props.tp1}></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9" onClick={props.clickbuy}>Buy more</button>
                    <button className="btn btn-sm btn-success mx-1 f-9 w-45" onClick={props.clicksell}>Sell</button>
                </td>
            </tr>
            <tr className="t-border-bottom">
                <td className="align-middle text-center">ADHI</td>
                <td className="align-middle text-right">1,529</td>
                <td className="align-middle text-right text-danger">1,429</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">100</td>
                <td className="align-middle text-right">1,529,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -15,000</td>
                <td className="align-middle text-right text-danger">-1.50%</td>
                <td className="align-middle text-center"><i className="fa fa-info-circle text-info" id={props.tp2}></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9" onClick={props.clickbuy}>Buy more</button>
                    <button className="btn btn-sm btn-success mx-1 f-9 w-45" onClick={props.clicksell}>Sell</button>
                </td>
            </tr>
            <tr className="t-border-bottom">
                <td className="align-middle text-center">ANTM</td>
                <td className="align-middle text-right">1,025</td>
                <td className="align-middle text-right text-danger">1,025</td>
                <td className="align-middle text-right">2</td>
                <td className="align-middle text-right">210</td>
                <td className="align-middle text-right">1,025,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -25,000</td>
                <td className="align-middle text-right text-danger">-2.50%</td>
                <td className="align-middle text-center"><i className="fa fa-info-circle text-info" id={props.tp3}></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9" onClick={props.clickbuy}>Buy more</button>
                    <button className="btn btn-sm btn-success mx-1 f-9 w-45" onClick={props.clicksell}>Sell</button>
                </td>
            </tr>
            <tr className="t-border-bottom">
                <td className="align-middle text-center">ASII</td>
                <td className="align-middle text-right">7,125</td>
                <td className="align-middle text-right text-danger">7,025</td>
                <td className="align-middle text-right">9</td>
                <td className="align-middle text-right">930</td>
                <td className="align-middle text-right">7,125,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -50,000</td>
                <td className="align-middle text-right text-danger">-5.78%</td>
                <td className="align-middle text-center"><i className="fa fa-info-circle text-info" id={props.tp4}></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9" onClick={props.clickbuy}>Buy more</button>
                    <button className="btn btn-sm btn-success mx-1 f-9 w-45" onClick={props.clicksell}>Sell</button>
                </td>
            </tr>
            <tr className="t-border-bottom">
                <td className="align-middle text-center">BBCA</td>
                <td className="align-middle text-right">27,400</td>
                <td className="align-middle text-right text-success">27,800</td>
                <td className="align-middle text-right">4</td>
                <td className="align-middle text-right">410</td>
                <td className="align-middle text-right">27,400,000</td>
                <td className="align-middle text-right text-success"><i className="icofont icofont-caret-up"></i> +250,660</td>
                <td className="align-middle text-right text-success">+2.50%</td>
                <td className="align-middle text-center"><i className="fa fa-info-circle text-info" id={props.tp5}></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9" onClick={props.clickbuy}>Buy more</button>
                    <button className="btn btn-sm btn-success mx-1 f-9 w-45" onClick={props.clicksell}>Sell</button>
                </td>
            </tr>
            </tbody>
            <UncontrolledTooltip placement="auto" target={props.tp1} innerClassName="bg-danger text-black">
                Not yet submit annual financial report
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="auto" target={props.tp2} innerClassName="bg-info">
                Not issue
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="auto" target={props.tp3} innerClassName="bg-info">
                Not issue
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="auto" target={props.tp4} innerClassName="bg-info">
                Not issue
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="auto" target={props.tp5} innerClassName="bg-info">
                Not issue
            </UncontrolledTooltip>
        </Table>
    )
}

// tabel orderlist
const OrderListTable = (props) =>{
    return(
        <Table borderless responsive size="sm" className={props.classView}>
            <thead className="t-border-bottom-bold no-wrap">
            <tr>
                <th className="align-middle text-center" rowSpan="2">Order#</th>
                <th className="align-middle text-center" rowSpan="2">Market <br/> Order#</th>
                <th className="align-middle text-center" rowSpan="2">Code <i className="ion ion-ios-arrow-down"></i></th>
                <th className="align-middle text-center" rowSpan="2">Cmd</th>
                <th className="align-middle text-center" rowSpan="2">Status</th>
                <th className="align-middle text-center" rowSpan="2"></th>
                <th className="align-middle text-center" rowSpan="2">Remark</th>
                <th className="align-middle text-center" rowSpan="2">Type</th>
                <th className="align-middle text-center" rowSpan="2">Mkt</th>
                <th className="align-middle text-center t-border-bottom" colSpan="2">T.Vol</th>
                <th className="align-middle text-center" rowSpan="2">Price</th>
                <th className="align-middle text-center t-border-bottom" colSpan="2">Match Vol</th>
                <th className="align-middle text-center" rowSpan="2">Avg. <br/> Match <br/> Price</th>
                <th className="align-middle text-center" rowSpan="2">Amount</th>
                <th className="align-middle text-center" rowSpan="2">Time</th>
                <th className="align-middle text-center" rowSpan="2">Action</th>
            </tr>
            <tr>
                <th className="align-middle text-center">Lot</th>
                <th className="align-middle text-center">Share</th>
                <th className="align-middle text-center">Lot</th>
                <th className="align-middle text-center">Share</th>
            </tr>
            </thead>
            <tbody className="no-wrap">
            <tr>
                <td className="align-middle text-right text-primary click-pointer" onClick={props.clickorderdetail}>001682</td>
                <td className="align-middle text-center">MKT021</td>
                <td className="align-middle text-center text-primary">AALI</td>
                <td className="align-middle text-center text-danger">BUY</td>
                <td className="align-middle text-center">Done</td>
                <td className="align-middle text-center text-success"><i className="fa fa-check"></i></td>
                <td className="align-middle text-center"></td>
                <td className="align-middle text-center">Day</td>
                <td className="align-middle text-center">RG</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">100</td>
                <td className="align-middle text-right">12,625</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">100</td>
                <td className="align-middle text-right">12,625</td>
                <td className="align-middle text-right">12,625,000</td>
                <td className="align-middle text-center">11:22:17</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-primary mx-1 f-9" onClick={props.clickamend}>Amend</button>
                    <button className="btn btn-sm btn-brown mx-1 f-9" onClick={props.clickwithdraw} disabled>Withdraw</button>
                </td>
            </tr>
            <tr className="bg-gray-tradding">
                <td className="align-middle text-right text-primary click-pointer" onClick={props.clickorderdetail}>001681</td>
                <td className="align-middle text-center">-</td>
                <td className="align-middle text-center text-primary">AALI</td>
                <td className="align-middle text-center text-success">SELL</td>
                <td className="align-middle text-center">Sending...</td>
                <td className="align-middle text-center text-tosca"><i className="fas fa-hourglass-half"></i></td>
                <td className="align-middle text-center">to Server</td>
                <td className="align-middle text-center">Day</td>
                <td className="align-middle text-center">RG</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">1000</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">0</td>
                <td className="align-middle text-right">0</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">12,650,000</td>
                <td className="align-middle text-center">11:22:10</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-primary mx-1 f-9" disabled onClick={props.clickamend}>Amend</button>
                    <button className="btn btn-sm btn-brown mx-1 f-9" disabled onClick={props.clickwithdraw}>Withdraw</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle text-right text-primary click-pointer" onClick={props.clickorderdetail}>001680</td>
                <td className="align-middle text-center">MKT012</td>
                <td className="align-middle text-center text-primary">AALI</td>
                <td className="align-middle text-center text-success">SELL</td>
                <td className="align-middle text-center">Done</td>
                <td className="align-middle text-center text-success"><i className="fa fa-check"></i></td>
                <td className="align-middle text-center"></td>
                <td className="align-middle text-center">Day</td>
                <td className="align-middle text-center">RG</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">1000</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">10</td>
                <td className="align-middle text-right">1000</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">12,650,000</td>
                <td className="align-middle text-center">11:20:17</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-primary mx-1 f-9" disabled onClick={props.clickamend}>Amend</button>
                    <button className="btn btn-sm btn-brown mx-1 f-9" disabled onClick={props.clickwithdraw}>Withdraw</button>
                </td>
            </tr>
            <tr className="bg-gray-tradding">
                <td className="align-middle text-right text-primary click-pointer" onClick={props.clickorderdetail}>001679</td>
                <td className="align-middle text-center">MKT010</td>
                <td className="align-middle text-center text-primary">AALI</td>
                <td className="align-middle text-center text-danger">BUY</td>
                <td className="align-middle text-center">Partial</td>
                <td className="align-middle text-center text-success"><i className="fa fa-check"></i></td>
                <td className="align-middle text-center">Amended</td>
                <td className="align-middle text-center">Day</td>
                <td className="align-middle text-center">RG</td>
                <td className="align-middle text-right">15</td>
                <td className="align-middle text-right">1500</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">5</td>
                <td className="align-middle text-right">500</td>
                <td className="align-middle text-right">12,650</td>
                <td className="align-middle text-right">12,650,000</td>
                <td className="align-middle text-center">11:12:17</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-primary mx-1 f-9" onClick={props.clickamend}>Amend</button>
                    <button className="btn btn-sm btn-brown mx-1 f-9" onClick={props.clickwithdraw}>Withdraw</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle text-right text-primary click-pointer" onClick={props.clickorderdetail}>001678</td>
                <td className="align-middle text-center">MKT009</td>
                <td className="align-middle text-center text-primary">BBCA</td>
                <td className="align-middle text-center text-danger">BUY</td>
                <td className="align-middle text-center">Open</td>
                <td className="align-middle text-center text-success"><i className="fa fa-check"></i></td>
                <td className="align-middle text-center">Amended</td>
                <td className="align-middle text-center">Day</td>
                <td className="align-middle text-center">RG</td>
                <td className="align-middle text-right">8</td>
                <td className="align-middle text-right">0</td>
                <td className="align-middle text-right">29,500</td>
                <td className="align-middle text-right">0</td>
                <td className="align-middle text-right">0</td>
                <td className="align-middle text-right">29,500</td>
                <td className="align-middle text-right">23,600,000</td>
                <td className="align-middle text-center">11:10:12</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-primary mx-1 f-9" onClick={props.clickamend}>Amend</button>
                    <button className="btn btn-sm btn-brown mx-1 f-9" onClick={props.clickwithdraw}>Withdraw</button>
                </td>
            </tr>
            </tbody>
        </Table>
    )
}

// FixedIncomeTable
const FixedIncomeTable = (props) => {
    return(
        <Table borderless responsive size="sm" className={props.classView}>
            <thead className="t-border-bottom-bold no-wrap">
            <tr>
                <th className="align-middle text-center">#</th>
                <th className="align-middle text-center">Serial <i className="ion ion-ios-arrow-down"></i></th>
                <th className="align-middle text-center">Nominal (IDR)</th>
                <th className="align-middle text-center">Coupon</th>
                <th className="align-middle text-center">Coupon Payment <br/> Date</th>
                <th className="align-middle text-center">Due Date</th>
                <th className="align-middle text-center">Detail</th>
                <th className="align-middle text-center">Action</th>
            </tr>
            </thead>
            <tbody className="no-wrap">
            <tr>
                <td className="align-middle text-right">1</td>
                <td className="align-middle text-center">SUNMP15042019</td>
                <td className="align-middle text-right">7,000,000</td>
                <td className="align-middle text-right">8,0%</td>
                <td className="align-middle text-center">date 20 every month</td>
                <td className="align-middle text-center">02 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr className="bg-gray-tradding">
                <td className="align-middle text-right">2</td>
                <td className="align-middle text-center">SUNMP16042019</td>
                <td className="align-middle text-right">5,000,000</td>
                <td className="align-middle text-right">7,0%</td>
                <td className="align-middle text-center">date 21 every month</td>
                <td className="align-middle text-center">03 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle text-right">3</td>
                <td className="align-middle text-center">SUNMP17042019</td>
                <td className="align-middle text-right">2,000,000</td>
                <td className="align-middle text-right">5,0%</td>
                <td className="align-middle text-center">date 22 every month</td>
                <td className="align-middle text-center">04 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr className="bg-gray-tradding">
                <td className="align-middle text-right">4</td>
                <td className="align-middle text-center">SUNMP18042019</td>
                <td className="align-middle text-right">6,000,000</td>
                <td className="align-middle text-right">8,0%</td>
                <td className="align-middle text-center">date 23 every month</td>
                <td className="align-middle text-center">05 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle text-right">5</td>
                <td className="align-middle text-center">SUNMP19042019</td>
                <td className="align-middle text-right">4,000,000</td>
                <td className="align-middle text-right">9,0%</td>
                <td className="align-middle text-center">date 24 every month</td>
                <td className="align-middle text-center">06 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr className="bg-gray-tradding">
                <td className="align-middle text-right">6</td>
                <td className="align-middle text-center">SUNMP20042019</td>
                <td className="align-middle text-right">12,000,000</td>
                <td className="align-middle text-right">6,0%</td>
                <td className="align-middle text-center">date 25 every month</td>
                <td className="align-middle text-center">07 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle text-right">7</td>
                <td className="align-middle text-center">SUNMP21042019</td>
                <td className="align-middle text-right">10,000,000</td>
                <td className="align-middle text-right">6,0%</td>
                <td className="align-middle text-center">date 26 every month</td>
                <td className="align-middle text-center">08 Jan 2021</td>
                <td className="align-middle text-center text-danger"><i className="fa fa-search click-pointer"></i></td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy More</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            </tbody>
        </Table>
    )
}

// Mutual Fund table
const MutualFundTable = (props) => {
    return(
        <Table borderless responsive size="sm" className={props.classView}>
            <thead className="t-border-bottom-bold t-border-top no-wrap">
            <tr>
                <th className="align-middle text-center">Code</th>
                <th className="align-middle text-center">NAV</th>
                <th className="align-middle text-center">NAV Date</th>
                <th className="align-middle text-center">Currency</th>
                <th className="align-middle text-center" colSpan="2">Potential P/L</th>
                <th className="align-middle text-center">Action</th>
            </tr>
            </thead>
            <tbody className="no-wrap">
            <tr>
                <td className="align-middle"><span className="font-weight-bold">000D7Q</span>
                    <br/><span>RDPT BUMN Fund...</span></td>
                <td className="align-middle text-right font-weight-bold">12,650</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">12,650,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -60,240</td>
                <td className="align-middle text-right text-danger">-0.40%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle"><span className="font-weight-bold">0007DT</span>
                    <br/><span>Reksa Dana Penyetaan...</span></td>
                <td className="align-middle text-right font-weight-bold">1,529</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">1,529,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -15,000</td>
                <td className="align-middle text-right text-danger">-1.50%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle"><span className="font-weight-bold">000D7Q</span>
                    <br/><span>RDPT BUMN Fund...</span></td>
                <td className="align-middle text-right font-weight-bold">1,025</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">1,025,000</td>
                <td className="align-middle text-right text-success"><i className="icofont icofont-caret-up"></i> +250,660</td>
                <td className="align-middle text-right text-success">+2.50%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle"><span className="font-weight-bold">0007DT</span>
                    <br/><span>Reksa Dana Penyetaan...</span></td>
                <td className="align-middle text-right font-weight-bold">7,125</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">7,125,000</td>
                <td className="align-middle text-right text-success"><i className="icofont icofont-caret-up"></i> +175</td>
                <td className="align-middle text-right text-success">+1.75%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>

            <tr>
                <td className="align-middle"><span className="font-weight-bold">000D7Q</span>
                    <br/><span>RDPT BUMN Fund...</span></td>
                <td className="align-middle text-right font-weight-bold">12,650</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">12,650,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -60,240</td>
                <td className="align-middle text-right text-danger">-0.40%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            <tr>
                <td className="align-middle"><span className="font-weight-bold">0007DT</span>
                    <br/><span>Reksa Dana Penyetaan...</span></td>
                <td className="align-middle text-right font-weight-bold">1,529</td>
                <td className="align-middle text-center">06/03/2019</td>
                <td className="align-middle text-right font-weight-bold">1,529,000</td>
                <td className="align-middle text-right text-danger"><i className="icofont icofont-caret-down"></i> -15,000</td>
                <td className="align-middle text-right text-danger">-1.50%</td>
                <td className="align-middle text-center">
                    <button className="btn btn-sm btn-danger mx-1 f-9">Buy Fund</button>
                    <button className="btn btn-sm btn-primary mx-1 f-9">Redemption</button>
                </td>
            </tr>
            </tbody>
        </Table>
    )
}

class BuyModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalBuy/>
            </>
        );
    }
}

class SellModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalSell/>
            </>
        );
    }
}

class AmendModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalAmend/>
            </>
        );
    }
}

class WithdrawModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <VerifyPIN tipe = 'withdraw'/>
            </>
        );
    }
}

class OrderDetailModal extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalOrderDetail/>
            </>
        );
    }
}

const CustomFrameHeaderLanding = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        isGrid:vars.isGrid,
        handleView:(isGrid)=>{actions.sendAction('handleView',{isGrid})}
    })
)(CustomFrameHeaderLanding_Base);

const LandingPage = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        isGrid:vars.isGrid,
    })
)(LandingPage_Base);

const OrderList = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        isGrid:vars.isGrid,
    })
)(OrderList_Base);

const FixedIncome = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        isGrid:vars.isGrid,
    })
)(FixedIncome_Base);

const MutualFund = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        isGrid:vars.isGrid,
    })
)(MutualFund_Base);

export { CustomFrameHeaderLanding, Landing };
export default LandingPage;
