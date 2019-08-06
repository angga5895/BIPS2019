import React from 'react';
import { AppFrameAction } from '../appframe.js';
import {AppFrame, AppFrameProvider, AppModal} from "../appframe";
import {BIPSAppProvider} from "../AppData";
import FillHeaderTab from "../tabheaderfill";
import { NetAppProvider, WSConnection} from './../appnetwork.js';
import {WSConnectionAction} from "./../appnetwork";
import {Table, Button} from "reactstrap";
import Select from "react-select";
import ModalBuy from "./app_modals/modal_buy";
import ModalSell from "./app_modals/modal_sell";
import StockChart from "./StockChart";


const CustomFrameHeaderMarketStatistik= (props) =>{
    return (
        <AppFrameProvider
            initialClasses={{
                MarketStatistikPage,
                StatisticMarketStatistikPage,
                IndiceMarketStatistikPage,
                TopBrokerMarketStatistikPage,
                NewResearchMarketStatistikPage
            }}
            initialFrames={
                [
                    {className: 'MarketStatistikPage', title: 'SUMMARY PAGE', instanceName: 'marketStatistikPage'},
                    {className: 'IndiceMarketStatistikPage', title: 'INDICES PAGE', instanceName: 'indiceMarketStatistikPage'},
                    {className: 'StatisticMarketStatistikPage', title: 'STATISTIC PAGE', instanceName: 'statisticMarketStatistikPage'},
                    {className: 'TopBrokerMarketStatistikPage', title: 'TOP BROKER PAGE', instanceName: 'topBrokerMarketStatistikPage'},
                    {className: 'NewResearchMarketStatistikPage', title: 'NEW & RESEARCH PAGE', instanceName: 'newResearchMarketStatistikPage'},
                ]
            }>
            {/*<BIPSAppProvider>*/}
                <WSConnectionAction />
                    <div className="col-sm-12 px-0 mx-0 align-self-center">
                        <div className="col-sm-12 pb-1 px-0 mx-0 d-border-bottom">
                            <FillHeaderTab linkTitles={
                                {
                                    marketStatistikPage: 'SUMMARY',
                                    indiceMarketStatistikPage: 'INDICES',
                                    statisticMarketStatistikPage: 'STATISTIC',
                                    topBrokerMarketStatistikPage: 'TOP BROKER',
                                    newResearchMarketStatistikPage: 'NEWS & RESEARCH',
                                }
                            }/>
                        </div>
                    </div>
                <AppFrame headerComponent={MarketStatistikFrameHeader}/>
                <AppModal/>
            {/*</BIPSAppProvider>*/}
        </AppFrameProvider>
    );
}

const MarketStatistikFrameHeader = (props) => {
    return (
        <>
        </>
    );
}

class MarketStatistik extends React.PureComponent {
    //hanya memanggil headernya saja
    render () {
        return (
            <div className="bg-black-trading px-0 mx-0">
            </div>
        );
    }
}

class MarketStatistikPage extends React.PureComponent {
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
    
    constructor(props) {
        super(props);

    }

    state = {
        top: "topactive"
    }

    render () {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction />
                <div className="card card-tab-trading bg-black-trading">
                    <div className="card-header bg-grey">

                        <div className="col-sm-12 px-0 mx-0 row">
                            <div className="col-mbl-radio px-0 mx-0 row">
                                <ul className="ul-radio col-sm-12 px-0 mx-0 row">
                                    <li className="li-radio col-radio px-0 mx-0" onClick={
                                        (e) => {
                                            this.setState({
                                                top : "topactive"
                                            })
                                        }
                                    }>
                                        <input type="radio" id="ta-options" name="top" checked={this.state.top == "topactive" ? true : false}/>
                                        <label htmlFor="ta-options" className="no-wrap">Top Active</label>

                                        <div className="check"></div>
                                    </li>

                                    <li className="li-radio col-radio px-0 mx-0" onClick={
                                        (e) => {
                                            this.setState({
                                                top : "topgainers"
                                            })
                                        }
                                    }>
                                        <input type="radio" id="tg-options" name="top" checked={this.state.top == "topgainers" ? true : false}/>
                                        <label htmlFor="tg-options" className="no-wrap">Top Gainers</label>

                                        <div className="check"></div>
                                    </li>

                                    <li className="li-radio col-radio px-0 mx-0" onClick={
                                        (e) => {
                                            this.setState({
                                                top : "toploosers"
                                            })
                                        }
                                    }>
                                        <input type="radio" id="tl-options" name="top" checked={this.state.top == "toploosers" ? true : false}/>
                                        <label htmlFor="tl-options" className="no-wrap">Top Loosers</label>

                                        <div className="check"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-mbl-radio-o px-0 mx-0">
                                <div className="col-sm-12 row mx-0 px-0">
                                    <div className="col-sm-3 mx-0 px-0 title-radio">
                                        <SelectChoose/>
                                    </div>
                                    <div className="col-sm-9 mx-0 px-0 title-radio text-right">
                                        <Button size="sm" className="bg-grey text-white col-sm-6 p-2 button-border-grey">
                                            <i className="fa fa-plus"></i> Add Finnancial Column
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body scrollable">
                        <Table responsive borderless size="sm" className="text-center align-middle align-self-center">
                            <thead className="text-white t-border-bottom">
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Prev.</th>
                                <th>Lost</th>
                                <th></th>
                                <th colSpan="2">Change (%)</th>
                                <th>Open</th>
                                <th>Low</th>
                                <th>High</th>
                                <th>Avg.</th>
                                <th>T.Vol(B)</th>
                                <th>T.Vol</th>
                                <th>Freq</th>
                                <th>F.Buy</th>
                                <th>F.Sell</th>
                                <th>F.Net</th>
                                <th colSpan="2" className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody className="text-white text-center no-wrap">
                            <tr>
                                <td>1</td>
                                <td className="text-primary">TLKM</td>
                                <td className="text-right text-warning">4,000</td>
                                <td className="text-right text-danger">7,400</td>
                                <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                <td className="text-right text-danger">-20</td>
                                <td className="text-right text-danger">-0.35</td>
                                <td className="text-right text-success">4,200</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                                <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className="text-primary">BBCA</td>
                                <td className="text-right text-warning">4,000</td>
                                <td className="text-right text-danger">7,400</td>
                                <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                <td className="text-right text-danger">-20</td>
                                <td className="text-right text-danger">-0.35</td>
                                <td className="text-right text-success">4,200</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                                <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td className="text-primary">BMRI</td>
                                <td className="text-right text-warning">4,000</td>
                                <td className="text-right text-danger">7,400</td>
                                <td className="text-warning text-right"><i className="fa fa-circle"></i></td>
                                <td className="text-right text-warning">0</td>
                                <td className="text-right text-warning">0</td>
                                <td className="text-right text-success">4,200</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-warning">3,100</td>
                                <td className="text-right text-warning">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                                <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td className="text-primary">AALI</td>
                                <td className="text-right text-warning">4,000</td>
                                <td className="text-right text-danger">7,400</td>
                                <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                <td className="text-right text-success">20</td>
                                <td className="text-right text-success">0.35</td>
                                <td className="text-right text-success">4,200</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                                <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td className="text-primary">WSKT</td>
                                <td className="text-right text-warning">5,200</td>
                                <td className="text-right text-danger">3,200</td>
                                <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                <td className="text-right text-success">12</td>
                                <td className="text-right text-success">0.35</td>
                                <td className="text-right text-success">4,200</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right text-danger">3,100</td>
                                <td className="text-right text-success">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-right">3,100</td>
                                <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                                <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        );
    }
}

class IndiceMarketStatistikPage extends React.PureComponent{
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

    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction />

                <Table size="sm" responsive borderless className="text-white mt-3 pb-0 mb-0">
                    <thead className="f-12 text-center text-white t-border-bottom">
                    <tr>
                        <th >Sector</th>
                        <th >Last</th>
                        <th >Change</th>
                        <th >%</th>
                        <th >Prev.Closed</th>
                        <th >Open</th>
                        <th >High</th>
                        <th >Low</th>
                        <th >Volume</th>
                        <th >Value</th>
                        <th >F.Buy</th>
                        <th >F.Sell</th>
                        <th >F.Net</th>
                    </tr>
                    </thead>
                    <tbody className="f-12 text-white">
                    <tr>
                        <td>AGRI</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr className="bg-gray-tradding">
                        <td>BASIC_IND</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr>
                        <td>CONSUMER</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr className="bg-gray-tradding">
                        <td>FINANCE</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr>
                        <td>INFRASTUC</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr className="bg-gray-tradding">
                        <td>MAINING</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr>
                        <td>MISC-IND</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr className="bg-gray-tradding">
                        <td>PROPPERTY</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    <tr>
                        <td>TRADE</td>
                        <td className="text-right">1,450,000</td>
                        <td className="text-right">12,000</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">1,453.76</td>
                        <td className="text-right">102,453,076</td>
                        <td className="text-right">102,453,076,000</td>
                        <td className="text-right">6K</td>
                        <td className="text-right">2K</td>
                        <td className="text-right">4K</td>
                    </tr>
                    </tbody>
                </Table>
                <div className="card card-325 bg-black-trading">
                    <div className="card-header px-0 mx-0 my-0 py-0">
                        <div className="col-sm-3 px-0 mx-0 bg-gray-tradding text-center">
                            <Button size="sm" className="bg-gray-tradding col-sm-12 px-0 mx-0 text-center">FINANCE</Button>
                        </div>
                    </div>
                    <div className="card-body px-0 mx-0 my-0 py-0 scrollable">
                        <Table responsive borderless size="sm" className="text-center align-middle align-self-center">
                        <thead className="text-white t-border-bottom bg-gray-tradding">
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Prev.</th>
                            <th>Lost</th>
                            <th></th>
                            <th colSpan="2">Change (%)</th>
                            <th>Open</th>
                            <th>Low</th>
                            <th>High</th>
                            <th>Avg.</th>
                            <th>T.Vol(B)</th>
                            <th>T.Vol</th>
                            <th>Freq</th>
                            <th>F.Buy</th>
                            <th>F.Sell</th>
                            <th>F.Net</th>
                            <th colSpan="2" className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-white text-center no-wrap">
                        <tr>
                            <td>1</td>
                            <td className="text-primary">TLKM</td>
                            <td className="text-right text-warning">4,000</td>
                            <td className="text-right text-danger">7,400</td>
                            <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                            <td className="text-right text-danger">-20</td>
                            <td className="text-right text-danger">-0.35</td>
                            <td className="text-right text-success">4,200</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                            <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="text-primary">BBCA</td>
                            <td className="text-right text-warning">4,000</td>
                            <td className="text-right text-danger">7,400</td>
                            <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                            <td className="text-right text-danger">-20</td>
                            <td className="text-right text-danger">-0.35</td>
                            <td className="text-right text-success">4,200</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                            <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="text-primary">BMRI</td>
                            <td className="text-right text-warning">4,000</td>
                            <td className="text-right text-danger">7,400</td>
                            <td className="text-warning text-right"><i className="fa fa-circle"></i></td>
                            <td className="text-right text-warning">0</td>
                            <td className="text-right text-warning">0</td>
                            <td className="text-right text-success">4,200</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-warning">3,100</td>
                            <td className="text-right text-warning">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                            <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="text-primary">AALI</td>
                            <td className="text-right text-warning">4,000</td>
                            <td className="text-right text-danger">7,400</td>
                            <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                            <td className="text-right text-success">20</td>
                            <td className="text-right text-success">0.35</td>
                            <td className="text-right text-success">4,200</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                            <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="text-primary">WSKT</td>
                            <td className="text-right text-warning">5,200</td>
                            <td className="text-right text-danger">3,200</td>
                            <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                            <td className="text-right text-success">12</td>
                            <td className="text-right text-success">0.35</td>
                            <td className="text-right text-success">4,200</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right text-danger">3,100</td>
                            <td className="text-right text-success">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-right">3,100</td>
                            <td className="text-center"><Button size="sm" color="danger" className="col-sm-12" onClick={this.buttonClickBuy}>Buy</Button></td>
                            <td className="text-center"><Button size="sm" color="success" className="col-sm-12" onClick={this.buttonClickSell}>Sell</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
            </>
        );
    }
}

class StatisticMarketStatistikPage extends React.PureComponent {
    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction />
                <div className="px-1 mx-0 col-sm-12 row">
                    <div className="col-sm-7 px-1 py-2 d-border-table-right">
                        <div className="card card-600 bg-black-trading">
                            <div className="card-header">
                                <div className="col-sm-12 row">
                                    <div className="col-sm-3 text-white f-16">6,384.90</div>
                                    <div className="col-sm-4 text-success f-14">+5.21 (0.082%) <i className="icofont icofont-caret-up"></i></div>
                                </div>
                                <div className="col-sm-12 f-12">
                                    Jun 2, 16:15 GMT +7 Disclaimer
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="col-sm-12">
                                    <div className="card card-grafik text-white bg-grey">This is chart of statistic</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5 px-1 py-2 d-border-table-left">
                        <div className="card card-600 bg-black-trading text-white">
                            <div className="card-body scrollable">
                                <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                                    <thead className="text-white d-border-table-bottom">
                                    <tr>
                                        <th>BOARD</th>
                                        <th>VALUE(T)</th>
                                        <th>LOT(M)</th>
                                        <th>FREQ</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white no-wrap">
                                    <tr>
                                        <td className="text-center">Reguler</td>
                                        <td className="text-right">6.35</td>
                                        <td className="text-right">100.3</td>
                                        <td className="text-right">403,040 </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Negotiated</td>
                                        <td className="text-right">2.64</td>
                                        <td className="text-right">55.41</td>
                                        <td className="text-right">870 </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Cash</td>
                                        <td className="text-right">0</td>
                                        <td className="text-right">0</td>
                                        <td className="text-right">0 </td>
                                    </tr>
                                    </tbody>
                                    <tfoot className="text-primary">
                                    <tr>
                                        <th className="text-center">Total</th>
                                        <th className="text-right">8.99</th>
                                        <th className="text-right">156.15</th>
                                        <th className="text-right">403,914 </th>
                                    </tr>
                                    </tfoot>
                                </Table>
                                <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                                    <thead className="text-white d-border-table-bottom">
                                    <tr className="bg-gray-tradding">
                                        <th className="text-center" colSpan="4">FOREIGN ACTIVITY</th>
                                    </tr>
                                    <tr>
                                        <th>FOREIGN</th>
                                        <th>VALUE</th>
                                        <th>LOT</th>
                                        <th>FREQ</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white no-wrap">
                                    <tr>
                                        <td className="text-center">F.Buy</td>
                                        <td className="text-right">2.29 T</td>
                                        <td className="text-right">11.68 M</td>
                                        <td className="text-right">63,578 </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">F.Sell</td>
                                        <td className="text-right">3.02 T</td>
                                        <td className="text-right">11.44 M</td>
                                        <td className="text-right">84,982 </td>
                                    </tr>
                                    </tbody>
                                    <tfoot className="text-white">
                                    <tr className="text-primary">
                                        <th className="text-center text-white">F.TOTAL</th>
                                        <th className="text-right">5.31 T</th>
                                        <th className="text-right">23.13 M</th>
                                        <th className="text-right">148,560 </th>
                                    </tr>
                                    <tr className="text-primary">
                                        <th className="text-center text-white">F.NET</th>
                                        <th className="text-right">-731.36 B</th>
                                        <th className="text-right">241,671</th>
                                        <th className="text-right">-21,404 </th>
                                    </tr>
                                    </tfoot>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class TopBrokerMarketStatistikPage extends React.PureComponent {
    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction />
                <div className="col-sm-12 row px-0 mx-0 mb-3 px-2 card card-250 bg-black-trading">
                    <div className="card-body scrollable">
                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                            <thead className="text-white d-border-table-bottom">
                            <tr>
                                <th>#</th>
                                <th></th>
                                <th>Company</th>
                                <th>T.Val(B)</th>
                                <th>B.Val(B)</th>
                                <th>S.Val(B)</th>
                                <th>T.Val(M)</th>
                                <th>T.Freq</th>
                            </tr>
                            </thead>
                            <tbody className="text-white no-wrap">
                            <tr>
                                <td>1</td>
                                <td>DX</td>
                                <td className="text-left">Bahana Sekuritas</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>MS</td>
                                <td className="text-left">Morgan Stanley Sekuritas Indonesia</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>KS</td>
                                <td className="text-left">Kresna Sekuritas</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>RX</td>
                                <td className="text-left">Macquarle Sekuritas Indonesia</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>YU</td>
                                <td className="text-left">CGS-CIMB Sekuritas Indonesia</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>AK</td>
                                <td className="text-left">UBS Sekuritas Indonesia</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>YP</td>
                                <td className="text-left">Mirae Asset Sekuritas Indonesia</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>CC</td>
                                <td className="text-left">MANDIRI SEKURITAS</td>
                                <td className="text-right">93.64</td>
                                <td className="text-right text-success">61.02 </td>
                                <td className="text-right text-danger">38.02 </td>
                                <td className="text-right">104.02 </td>
                                <td className="text-right">5,716 </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-sm-12 row px-0 mx-0 mb-3 px-2 card card-mini bg-black-trading">
                    <div class="card-body scrollable">
                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                        <thead className="text-white d-border-table-bottom">
                        <tr className="bg-grey text-left">
                            <th colSpan="8">TOP BUYER</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Company</th>
                            <th>T.Val(B)</th>
                            <th>B.Val(B)</th>
                            <th>S.Val(B)</th>
                            <th>T.Val(M)</th>
                            <th>T.Freq</th>
                        </tr>
                        </thead>
                        <tbody className="text-white no-wrap">
                        <tr>
                            <td>1</td>
                            <td>DX</td>
                            <td className="text-left">Bahana Sekuritas</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MS</td>
                            <td className="text-left">Morgan Stanley Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>KS</td>
                            <td className="text-left">Kresna Sekuritas</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>RX</td>
                            <td className="text-left">Macquarle Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>YU</td>
                            <td className="text-left">CGS-CIMB Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className="col-sm-12 row px-0 mx-0 mb-3 px-2 card card-mini bg-black-trading">
                    <div className="card-body scrollable">
                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                        <thead className="text-white d-border-table-bottom">
                        <tr className="bg-grey text-left">
                            <th colSpan="8">TOP SELLER</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Company</th>
                            <th>T.Val(B)</th>
                            <th>B.Val(B)</th>
                            <th>S.Val(B)</th>
                            <th>T.Val(M)</th>
                            <th>T.Freq</th>
                        </tr>
                        </thead>
                        <tbody className="text-white no-wrap">
                        <tr>
                            <td>1</td>
                            <td>DX</td>
                            <td className="text-left">Bahana Sekuritas</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MS</td>
                            <td className="text-left">Morgan Stanley Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>KS</td>
                            <td className="text-left">Kresna Sekuritas</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>RX</td>
                            <td className="text-left">Macquarle Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>YU</td>
                            <td className="text-left">CGS-CIMB Sekuritas Indonesia</td>
                            <td className="text-right">93.64</td>
                            <td className="text-right text-success">61.02 </td>
                            <td className="text-right text-danger">38.02 </td>
                            <td className="text-right">104.02 </td>
                            <td className="text-right">5,716 </td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
            </>
        );
    }
}

class NewResearchMarketStatistikPage extends React.PureComponent {
    render(){
        return(
            <div>Test4</div>
        );
    }
}

const option = [
    { value: 'choose', label: 'Choose' },
];

class SelectChoose extends React.Component {
    render() {
        return (
            <div className="col-md-12 bg-black-grey px-0 text-center text-white">
                <Select
                    className="f-12"
                    defaultValue={option[0]}
                    label="Single select"
                    options={option}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            neutral0: '#181717',
                            neutral20 : '#4D4D4E',
                            neutral30 : '#4D4D4E',
                            neutral40 : '#cccccc',
                            neutral80 : '#FFFFFF',
                            primary75 : '#FFFFFF',
                            primary50 : '#565252',
                            primary25 : '#565252',
                            primary : '#808282',
                        },
                    })}
                />
            </div>
        );
    }
}

class BuyModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction /> {/* websocket connection component */}
                <ModalBuy/>
            </>
        );
    }
}

class SellModal extends React.Component  {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction /> {/* websocket connection component */}
                <ModalSell/>
            </>
        );
    }
}

export default MarketStatistikPage;
export {CustomFrameHeaderMarketStatistik, MarketStatistik};
