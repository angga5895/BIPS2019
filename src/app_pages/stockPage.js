import React from 'react';
import './../App.css';
import Select from 'react-select';
import {Button, Table, InputGroupText, Input,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
    CustomInput, InputGroup, InputGroupAddon, FormGroup, Form, TabContent, TabPane } from "reactstrap";
    import {AppFrame, AppFrameAction, AppFrameProvider, AppModal} from "../appframe";

    
import {BIPSAppProvider, BIPSAppContext } from "../AppData";
import FillHeaderTab from "../tabheaderfill";
import { NetAppContext, WSConnectionAction } from '../appnetwork.js';
import { ContextConnector } from '../appcontext.js';

import ModalBuy from "./app_modals/modal_buy";
import ModalSell from "./app_modals/modal_sell";
import MenuOfContent from "./../menuofcontent";
import TableInfoTransaction from "./app_transaction/tableInfoTransaction";
import FormAmend from "./app_transaction/form_amend";
import FormSell from "./app_transaction/form_sell";
import FormBuy from "./app_transaction/form_buy";
import StockChart from "./StockChart";

const CustomFrameHeaderStock = (props) => {
    return (
        <AppFrameProvider
            initialClasses={{ StockWatchlist, StockHistoryPage, StockPage}}
            initialFrames={
                [
                    {className: 'StockPage', title: 'STOCK PAGE', instanceName: 'stockPage'},
                    {className: 'StockWatchlist', title: 'STOCK WATCHLIST PAGE', instanceName: 'stockWatchlistPage'},
                    {className: 'StockHistoryPage', title: 'STOCK HISTORY PAGE', instanceName: 'stockHistoryPage'},
                ]
            }
            initActions={[
                ['switchPage', {instanceName: 'stockWatchlistPage'}],
              ]}
            >
            {/* <BIPSAppProvider> */}
            <WSConnectionAction />
                <div className="col-sm-12 px-0 mx-0 align-self-center">
                    <div className="col-sm-12 pb-1 px-0 mx-0 d-border-bottom">
                        <FillHeaderTab linkTitles={
                            {
                                stockPage : 'STOCK INFO',
                                stockWatchlistPage: 'STOCK WATCHLIST',
                                stockHistoryPage: 'STOCK TRADE HISTORY'
                            }
                        } />
                    </div>
                </div>
                <AppFrame headerComponent={StockFrameHeader}/>
                <AppModal/>
            {/* </BIPSAppProvider> */}
        </AppFrameProvider>
    );
}

const StockFrameHeader = (props) => {
    return (
        <></>
    );
}

class Stock extends React.PureComponent {
    //hanya memanggil headernya saja
    render () {
        return (
            <div className="bg-black-trading px-0 mx-0">
            </div>
        );
    }
}

const StockInfo = (props) => {
    return(
        <AppFrameProvider
            initialClasses={{TableStockInfo, TableProfil, TableCorpAction}}
            initialFrames={
                [
                    {className: 'TableStockInfo', title: 'STOCK INFO', instanceName: 'stockInfoTable'},
                    {className: 'TableProfil', title: 'PROFIL', instanceName: 'profilTable'},
                    {className: 'TableCorpAction', title: 'CORP ACTION', instanceName: 'corpActionTable'},
                ]
            }>
            {/*<BIPSAppProvider>*/}
                <WSConnectionAction />
                <div className="row col-sm-12 px-0 mx-0 pt-1">
                    <div className="col-sm-12 px-2">
                        <MenuOfContent linkTitles={
                            {
                                stockInfoTable : 'STOCK INFO',
                                profilTable : 'PROFIL',
                                corpActionTable : 'CORP ACTION'
                            }
                        } />
                    </div>
                    <div className="col-sm-12 px-2">
                        <AppFrame headerComponent={StockInfoFrameHeader}/>
                    </div>
                </div>
            {/*</BIPSAppProvider>*/}
        </AppFrameProvider>
    );
}

class TableStockInfo extends React.PureComponent{
    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <Table responsive size="sm" className="text-white my-2" bordered>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding">Listed</td>
                        <td className="text-primary">19,246,883</td>
                        <td className="bg-gray-tradding">IPO</td>
                        <td className="text-primary">1,550</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Tradeable</td>
                        <td className="text-primary">19,246,883</td>
                        <td className="bg-gray-tradding">Base</td>
                        <td className="text-primary">1,230</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Fg Avail</td>
                        <td className="text-primary">19,246,883</td>
                        <td className="bg-gray-tradding">Board</td>
                        <td className="text-primary">Main</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Mkt. Capital(M)</td>
                        <td className="text-primary text-right" colSpan="3">24.299T</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Corp. Action</td>
                        <td className="text-primary text-right" colSpan="3">No Corporation Action</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Marginable</td>
                        <td className="text-primary text-right" colSpan="3">Marginable and Shirt Selling</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Sub Sector</td>
                        <td className="text-primary text-right" colSpan="3">Plantation</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

class TableProfil extends React.PureComponent{
    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <Table responsive size="sm" className="text-white my-2" bordered>
                    <thead>
                    <tr>
                        <th>Table Profil</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding">Profil</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

class TableCorpAction extends React.PureComponent{
    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <Table responsive size="sm" className="text-white my-2" bordered>
                    <thead>
                    <tr>
                        <th>Table Corp Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding">Corp Action</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

const StockInfoFrameHeader = (props) => {
    return (
        <></>
    );
}

class StockPage extends React.PureComponent {
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

    render () {
        return (
            <div className="bg-black-trading">
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" /> {/* websocket connection component*/} 
                <main>
                    <div className="container-fluid">
                        <div className="py-2">
                            <div className="px-1 mx-0 my-2 col-sm-12 row">
                                <label className="align-self-center col-sm-1 px-0 mx-0">Code</label>
                                <Input className="col-sm-2 d-border bg-dark-grey text-center align-self-center" size="md" value="AALI"/>
                                <div className="col-sm-1 text-center align-self-center"><i className="fa fa-search fa-2x click-pointer text-dark"></i></div>
                                <Input className="col-sm-3 d-border bg-dark-grey align-self-center" size="md" value="Arga Argo Lestari Tbk."/>
                            </div>
                            <div className="px-1 mx-0 my-2 col-sm-12 row">
                                <div className="col-sm-2 px-0 mx-0">
                                    <InputGroup size="md">
                                        <Input className="col-sm-12 d-border bg-dark-grey" value="AALI" size="md"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-gold text-white">90%</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>

                                <div className="col-sm-6 row">
                                    <label className="col-sm-5 f-18 f-xs-14">
                                        Astra Argo Lestari Tbk.
                                    </label>
                                    <label className="col-sm-3 f-18 f-xs-14">
                                        Last <span className="text-danger">12,650</span>
                                    </label>
                                    <label className="col-sm-4 text-danger f-18 f-xs-14">
                                        <i className="oi oi-caret-bottom"></i>
                                        -175 (-1.36%)
                                    </label>
                                </div>

                                <div className="col-sm-4 align-self-center mx-2 px-0">
                                    <Button className="d-border mx-1 pull-right col-sm-5 col-md-3" size="md" color="success" onClick={this.buttonClickSell}><span className="text-white">Sell</span></Button>
                                    <Button className="d-border mx-1 pull-right col-sm-5 col-md-3" size="md" color="danger" onClick={this.buttonClickBuy}><span className="text-white">Buy</span></Button>
                                </div>
                            </div>
                            <div className="px-1 mx-0 col-sm-12 row">
                                <div className="col-md-7 px-1 py-2">
                                    <div className="card card-grafik bg-trading-gray">
                                        <StockChart/>
                                    </div>
                                    <StockInfo/>
                                </div>
                                <div className="col-md-5 px-1 py-2">
                                    <TableInfoTransaction lotshare="stockInfoBuy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

class StockHistoryPage extends React.PureComponent {

    render () {
        return (
            <div className="bg-black-trading">
                <AppFrameAction ref="frameAction" />
                <main>
                    <div className="container-fluid">
                        <div className="py-2">
                            <div className="px-1 mx-0 my-2 col-sm-12 row">
                                <label className="align-self-center col-sm-1 px-0 mx-0">Code</label>
                                <Input className="col-sm-2 d-border bg-dark-grey text-center align-self-center" size="md" value="AALI"/>
                                <div className="col-sm-1 text-center align-self-center"><i className="fa fa-search fa-2x click-pointer text-dark"></i></div>
                                <Input className="col-sm-3 d-border bg-dark-grey align-self-center" size="md" value="Arga Argo Lestari Tbk."/>
                            </div>

                            <div className="px-2 mx-0 mt-5 col-sm-12 row">
                                <div className="col-sm-2 px-0 mx-0">
                                    <Form>
                                        <FormGroup>
                                            <InputGroup>
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="date placeholder"
                                                    className="bg-gray-tradding d-border text-white"
                                                />
                                                <InputGroupAddon addonType="prepend" className="bg-gray-tradding d-border text-white">
                                                    <InputGroupText className="bg-gray-tradding d-border text-white">
                                                        <i className="fa fa-calendar-alt"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div className="col-sm-10 px-2 mx-0">
                                    <Table borderless responsive size="sm" className="bg-black-trading">
                                        <thead></thead>
                                        <tbody className="t-border-top t-border-bottom">
                                        <tr>
                                            <td>
                                                Last <span className="text-danger"> 3,870</span>
                                            </td>
                                            <td>
                                                Change(%) &nbsp;
                                                <span className="text-danger">
                                                    <i className="icofont icofont-caret-down"></i> 3,870
                                                </span>
                                            </td>
                                            <td>
                                                High <span className="text-danger"> 3,870</span>
                                            </td>
                                            <td>
                                                Low <span className="text-danger"> 3,870</span>
                                            </td>
                                            <td>
                                                T.Vol <span className="text-danger"> 156</span>
                                            </td>
                                            <td>
                                                Value(T) <span className="text-danger"> 156,000</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                            <div className="px-1 mx-0 col-sm-12 row">
                                <div className="col-sm-8 px-1 py-2">
                                    <div className="card card-475 bg-trading-gray">
                                        <Table responsive borderless size="sm" className="text-center align-middle align-self-center">
                                            <thead className="text-white t-border-bottom-bold t-border-top-bold">
                                            <tr>
                                                <th>Broker</th>
                                                <th>Bid Vol</th>
                                                <th>Bid Val <br/> (B)</th>
                                                <th>Avg. Bid</th>
                                                <th>Sell Vol</th>
                                                <th>Sell Val <br/> (B)</th>
                                                <th>Avg. Sell</th>
                                                <th>Net Val<br/> (B)</th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-success">
                                            <tr>
                                                <td>DX</td>
                                                <td className="text-right">2,000</td>
                                                <td className="text-right">2,000</td>
                                                <td className="text-right">10,800</td>
                                                <td className="text-right">3,000</td>
                                                <td className="text-right">3,000</td>
                                                <td className="text-right">2,100</td>
                                                <td className="text-right">500,000</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                                <div className="col-sm-4 px-1 py-2">
                                    <div className="col-sm-12 row px-0 mx-0 mb-3 card card-mini bg-trading-gray">
                                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                                                <thead className="text-white t-border-top-bold t-border-bottom-bold">
                                                <tr>
                                                    <th>Price</th>
                                                    <th>Freq</th>
                                                    <th>T.Vol</th>
                                                    <th>Value(T)</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-success">
                                                <tr>
                                                    <td className="text-right">10,870</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">156 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,860</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">26 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,850</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">142 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,840</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">150 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,870</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">156 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,860</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">26 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,850</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">142 </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right">10,840</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">150 </td>
                                                </tr>
                                                </tbody>
                                        </Table>
                                    </div>
                                    <div className="col-sm-12 row px-0 mx-0 mb-3 card card-mini bg-trading-gray">
                                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                                                <thead className="text-white t-border-top-bold t-border-bottom-bold">
                                                <tr>
                                                    <th>Buyer</th>
                                                    <th>Volume</th>
                                                    <th>Freq</th>
                                                    <th>Avg</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-success">
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">10,870</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">10,860</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">10,850</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">10,840</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">10,870</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">10,860</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">10,850</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">10,840</td>
                                                </tr>
                                                </tbody>
                                        </Table>
                                    </div>
                                    <div className="col-sm-12 row px-0 mx-0 mb-3 card card-mini bg-trading-gray">
                                        <Table responsive borderless size="sm" className="text-center align-self-center align-middle">
                                                <thead className="text-white t-border-top-bold t-border-bottom-bold">
                                                <tr>
                                                    <th>Seller</th>
                                                    <th>Volume</th>
                                                    <th>Freq</th>
                                                    <th>Avg</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-success">
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">10,870</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">10,860</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">10,850</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">10,840</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">20</td>
                                                    <td className="text-right">5</td>
                                                    <td className="text-right">10,870</td>
                                                </tr>
                                                <tr>
                                                    <td>DX</td>
                                                    <td className="text-right">25</td>
                                                    <td className="text-right">6</td>
                                                    <td className="text-right">10,860</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">23</td>
                                                    <td className="text-right">7</td>
                                                    <td className="text-right">10,850</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-warning">DX</td>
                                                    <td className="text-right">24</td>
                                                    <td className="text-right">8</td>
                                                    <td className="text-right">10,840</td>
                                                </tr>
                                                </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        );
    }
}

// StockWatchlist
const StockWatchlist = (props) => {
    return(
        <AppFrameProvider
            initialClasses={{BuyPage, SellPage, AmendPage}}
            initialFrames={
                [
                    {className: 'BuyPage', title: 'STOCK WATCHLIST BUY', instanceName: 'stockWatchlistBuy'},
                    {className: 'SellPage', title: 'STOCK WATCHLIST SELL', instanceName: 'stockWatchlistSell'},
                    {className: 'AmendPage', title: 'STOCK WATCHLIST AMEND', instanceName: 'stockWatchlistAmend'},
                ]
            }>
            {/* <BIPSAppProvider> */}
                <div className="row col-sm-12 pl-2 mx-0 pt-1">
                    <div className="col-sm-4 px-0 mx-0">
                        <AppModal/>
                        <TableStockWatchlist/>
                    </div>
                    <div className="col-sm-8 px-0 mx-0">
                        <div className="col-sm-12 px-2 d-border-bottom">
                            <MenuOfContent linkTitles={
                                {
                                    stockWatchlistBuy : 'BUY',
                                    stockWatchlistSell: 'SELL',
                                    stockWatchlistAmend: 'AMEND'
                                }
                            } />
                        </div>
                        <div className="col-sm-12 px-2">
                            <AppFrame headerComponent={StockWatchlistFrameHeader}/>
                        </div>
                    </div>
                </div>
            {/* </BIPSAppProvider> */}
        </AppFrameProvider>
    );
}

const StockWatchlistFrameHeader = (props) => {
    return (
        <></>
    );
}

// tael Watchlist
class TableStockWatchlist_Base extends React.Component{
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickAmendRegister = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            size: 'tiny',
            contentClass: RegisterAmendModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    componentDidMount(){
        var p=this.props;
        
        // console.log(this.refs.wsAction.connectionState)
        // this.refs.wsAction.send(msg);

        // this.props.subscribeStock(p.sessionID);
    }

    handleSubcribeMsg = () => {
        var p=this.props;
        var msg={
            action_type:'SUBSCRIBE',
            sub_type:'STOCK_SUMMARY',
            session_id:p.sessionID,
            data:['TLKM','HOME', 'BMRI','ANTM', 'WSKT', 'PTPP','AGRI', 'BBCA', 'BBRI', 
                'SMRA',  'AALI', 'ADHI', 'ASII', 'ASRI', 'CTRA', 'BBCA' , 'MISC-IND' ],};
        this.refs.wsAction.send(JSON.stringify(msg));
    }
    
    render(){
        var props = this.props;
        var stockCodes = Object.keys(props.stockSummary)
        return(<>
            <WSConnectionAction ref="wsAction" /> {/* websocket connection component */}
            <div className="card card-75 bg-black-trading">
                <button onClick={this.handleSubcribeMsg}>subscribe</button>
                <AppFrameAction ref="frameAction" />
                <div className="card-header d-border-bottom">
                    <div className="col-sm-12 px-0 row">
                        <div className="col-sm-6 px-0 mx-0 text-left">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a">
                                    <label className="ml-3 btn btn-sm btn-grey col-md-9">
                                        Order by <i className="icofont icofont-caret-down"></i>
                                    </label>
                                </DropdownToggle>
                                <DropdownMenu className="menu-dropdown" left>
                                    <DropdownItem tag="a" href="#" className="item-hover text-white">Code</DropdownItem>
                                    <DropdownItem tag="a" href="#" className="item-hover text-white">Price</DropdownItem>
                                    <DropdownItem tag="a" href="#" className="item-hover text-white">T.Vol</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="col-sm-6 px-0 mx-0 text-right">
                            <button className="btn btn-sm btn-grey" onClick={this.buttonClickAmendRegister}>Register/Amend</button>
                        </div>
                    </div>
                </div>
                <div className="card-body scrollable">
                    <Table responsive borderless size="sm" className="text-white">
                        <thead className="d-border text-center">
                        <tr>
                            <th>Code</th>
                            <th>Price</th>
                            <th></th>
                            <th colSpan="2">Change (%)</th>
                            <th>T.Vol</th>
                        </tr>
                        </thead>
                        <tbody className="d-border text-center">
                            {
                                stockCodes.map((scode)=>{
                                    var stockData = props.stockSummary[scode];
                                    return<tr key={scode}>
                                        <td>{scode}</td>
                                        <td className={stockData.change < 0 ? "text-danger text-right":(stockData.change > 0 ? "text-success text-right" : "text-white text-right")}>{stockData.last_price}</td>
                                        {
                                            stockData.change < 0 ?
                                                <td className="text-danger"><i className="icofont icofont-caret-down"></i></td>
                                                : (stockData.change > 0 ? 
                                                    <td className="text-success"><i className="icofont icofont-caret-up"></i></td> 
                                                    :<td></td>)
                                        }
                                        <td className={stockData.change < 0 ? "text-danger text-right":(stockData.change > 0 ? "text-success text-right" : "text-white text-right")}>{stockData.change}</td>
                                        <td className={stockData.change < 0 ? "text-danger text-right":(stockData.change > 0 ? "text-success text-right" : "text-white text-right")}>{stockData.chg_prcntg}</td>
                                        <td className={stockData.change < 0 ? "text-danger text-right":(stockData.change > 0 ? "text-success text-right" : "text-white text-right")}>{stockData.vol}</td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>);
    }
    
}

class BuyPage extends React.Component{
    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction /> {/* websocket connection component */}
                <div className="col sm-8 px-0 mx-0 row">
                    <div className="col-sm-6 pr-3 pl-0 mt-4">
                        <TableInfoTransaction lotshare="buyPage" />
                    </div>
                    <div className="col-sm-6 mt-4 d-border-active bg-dark-grey">
                        <FormBuy cb1="checkbox1buystock" cb2="checkbox2buystock" cb3="checkbox3buystock"/>
                    </div>
                </div>
            </>
        );
    }

}

class SellPage extends React.Component{
    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction /> {/* websocket connection component */}
                <div className="col sm-8 px-0 mx-0 row">
                    <div className="col-sm-6 pr-3 pl-0 mt-4">
                        <TableInfoTransaction lotshare="sellPage" />
                    </div>
                    <div className="col-sm-6 mt-4 d-border-active bg-dark-grey">
                        <FormSell cb1="checkbox1sellstock" cb2="checkbox2sellstock" cb3="checkbox3sellstock" cb4="checkbox4sellstock"/>
                    </div>
                </div>
            </>
        );
    }

}

class AmendPage extends React.Component{
    render(){
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction /> {/* websocket connection component */}
                <div className="col sm-8 px-0 mx-0 row">
                    <div className="col-sm-6 pr-3 pl-0 mt-4">
                        <TableInfoTransaction lotshare="amendPage" />
                    </div>
                    <div className="col-sm-6 mt-4 d-border-active bg-dark-grey">
                        <FormAmend cb1="checkbox1amendstock" cb2="checkbox2amendstock" cb3="checkbox3amendstock"/>
                    </div>
                </div>
            </>
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

const TableStockWatchlist = ContextConnector(BIPSAppContext,
    (vars, actions, props)=>({
        subscribeMsg: vars.subscribeMsg,
        stockSummary:vars.stockSummary,
        sessionID:vars.sessionID,
        subscribeStock:(sessionID) => {actions.sendAction('subscribeStock', {sessionID})}
    })
)(TableStockWatchlist_Base)

class RegisterAmendModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div>
                    <div className="cssmenumodal bg-grey pb-4 col-sm-12 mx-0 px-0">
                        <ul>
                            <li className={ this.state.activeTab === '1' ? 'd-border-bottom active click-pointer col-sm-6 px-0 mx-0 f-12 text-center' : 'd-border-bottom text-white click-pointer col-sm-6 px-0 mx-0 f-12 text-center' } onClick={() => { this.toggle('1'); }}><a><span className="f-11">&nbsp; Amend Group</span></a></li>
                            <li className={ this.state.activeTab === '2' ? 'd-border-bottom active click-pointer col-sm-6 px-0 mx-0 f-12 text-center' : 'd-border-bottom text-white click-pointer col-sm-6 px-0 mx-0 f-12 text-center' } onClick={() => { this.toggle('2'); }}><a><span className="f-11">&nbsp; Add Group</span></a></li>
                        </ul>
                    </div>
                    <TabContent activeTab={this.state.activeTab} className="card-475">
                        <TabPane tabId="1" className="d-border">
                            <div className="card card-xmini bg-grey">
                                <div className="card-body scrollable">
                                    <Table responsive size="sm" borderless className="text-white text-center">
                                        <thead className="t-border-bottom-bold">
                                        <tr>
                                            <th>Group Name</th>
                                            <th>Total Member</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-primary">Group A</td>
                                            <td>5</td>
                                            <td><a className="text-primary click-pointer">Edit</a> | <a className="text-danger click-pointer">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary">Group B</td>
                                            <td>12</td>
                                            <td><a className="text-primary click-pointer">Edit</a> | <a className="text-danger click-pointer">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary">Group C</td>
                                            <td>15</td>
                                            <td><a className="text-primary click-pointer">Edit</a> | <a className="text-danger click-pointer">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary">Group D</td>
                                            <td>26</td>
                                            <td><a className="text-primary click-pointer">Edit</a> | <a className="text-danger click-pointer">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary">Group E</td>
                                            <td>27</td>
                                            <td><a className="text-primary click-pointer">Edit</a> | <a className="text-danger click-pointer">Delete</a></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                            <div className="form-group row col-sm-12 px-0 mx-0 my-4 text-white">
                                <div className="col-sm-5">
                                    <label className="col-sm-12">Name</label>
                                </div>
                                <div className="col-sm-7">
                                    <Input className="col-sm-12 bg-gray-tradding border-gray-tradding" type="text" value="Group A"/>
                                </div>
                            </div>

                            <div className="card card-xs bg-grey">
                                <div className="card-body scrollable">
                                    <Table responsive size="sm" borderless className="text-white">
                                        <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Price</th>
                                            <th>Change/%</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-primary no-wrap align-middle align-self-center">
                                                <div className="form-group row col-sm-12 my-0 align-middle align-self-center">
                                                    <Input className="bg-gray-tradding border-gray-tradding col-sm-4" size="sm" readonly value="AALI"/>
                                                    &nbsp;<label className="text-white my-0 align-middle align-self-center f-9"> Astra Argo Lestari Tbk.</label>
                                                </div>
                                            </td>
                                            <td className="no-wrap align-middle align-self-center">12,650</td>
                                            <td className="no-wrap align-middle align-self-center text-danger"><i className="icofont icofont-caret-down"></i> -175(-1.36%)</td>
                                            <td className="no-wrap align-middle align-self-center"><Button size="sm" className="btn btn-sm btn-danger">
                                                <i className="fa fa-minus"></i>
                                            </Button></td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary no-wrap align-middle align-self-center">
                                                <div className="form-group row col-sm-12 my-0 align-middle align-self-center">
                                                    <Input className="bg-gray-tradding border-gray-tradding col-sm-4" size="sm" readonly value="TLKM"/>
                                                    &nbsp;<label className="text-white my-0 align-middle align-self-center f-9"> Telekomunikasi Indonesia Tbk.</label>
                                                </div>
                                            </td>
                                            <td className="no-wrap align-middle align-self-center">15,650</td>
                                            <td className="no-wrap align-middle align-self-center text-success"><i className="icofont icofont-caret-up"></i> +175(+1.36%)</td>
                                            <td className="no-wrap align-middle align-self-center"><Button size="sm" className="btn btn-sm btn-danger">
                                                <i className="fa fa-minus"></i>
                                            </Button></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                            <div className="form-group row col-sm-12 px-0 mx-0 my-3 text-white">
                                <div className="col-sm-7">
                                    <Input className="col-sm-12 bg-gray-tradding border-gray-tradding" value="BBCA"/>
                                </div>
                                <div className="col-sm-1 px-0 mx-0 align-self-center align-middle">
                                    <i className="fa fa-search click-pointer f-18"></i>
                                </div>
                                <div className="col-sm-1 px-0 mx-0 align-self-center align-middle">
                                    <Button size="sm" className="btn bg-gray-tradding border-gray-tradding"><i className="fa fa-plus"></i></Button>
                                </div>
                            </div>

                            <div className="form-group row col-sm-12 px-0 mx-0 mt-5 pt-5 text-white">
                                <div className="col-sm-9 align-self-center align-middle">
                                    <label className="text-muted">Max Group is 10 group with 45 stock list</label>
                                </div>
                                <div className="col-sm-3 align-self-center align-middle">
                                    <Button size="sm" className="btn bg-gray-tradding border-gray-tradding col-sm-12">Save</Button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2" className="d-border">
                            <div className="form-group row col-sm-12 px-0 mx-0 my-4 text-white">
                                <div className="col-sm-5">
                                    <label className="col-sm-12">Group Name</label>
                                </div>
                                <div className="col-sm-7">
                                    <Input className="col-sm-12 bg-gray-tradding border-gray-tradding" type="text" value="Group A"/>
                                </div>
                            </div>

                            <div className="card card-xs bg-grey">
                                <div className="card-body scrollable">
                                    <Table responsive size="sm" borderless className="text-white">
                                        <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Price</th>
                                            <th>Change/%</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-primary no-wrap align-middle align-self-center">
                                                <div className="form-group row col-sm-12 my-0 align-middle align-self-center">
                                                    <Input className="bg-gray-tradding border-gray-tradding col-sm-4" size="sm" readonly value="AALI"/>
                                                    &nbsp;<label className="text-white my-0 align-middle align-self-center f-9"> Astra Argo Lestari Tbk.</label>
                                                </div>
                                            </td>
                                            <td className="no-wrap align-middle align-self-center">12,650</td>
                                            <td className="no-wrap align-middle align-self-center text-danger"><i className="icofont icofont-caret-down"></i> -175(-1.36%)</td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary no-wrap align-middle align-self-center">
                                                <div className="form-group row col-sm-12 my-0 align-middle align-self-center">
                                                    <Input className="bg-gray-tradding border-gray-tradding col-sm-4" size="sm" readonly value="TLKM"/>
                                                    &nbsp;<label className="text-white my-0 align-middle align-self-center f-9"> Telekomunikasi Indonesia Tbk.</label>
                                                </div>
                                            </td>
                                            <td className="no-wrap align-middle align-self-center">15,650</td>
                                            <td className="no-wrap align-middle align-self-center text-success"><i className="icofont icofont-caret-up"></i> +175(+1.36%)</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                            <div className="form-group row col-sm-12 px-0 mx-0 my-3 text-white">
                                <div className="col-sm-7">
                                    <Input className="col-sm-12 bg-gray-tradding border-gray-tradding" value="BBCA"/>
                                </div>
                                <div className="col-sm-1 px-0 mx-0 align-self-center align-middle">
                                    <i className="fa fa-search click-pointer f-18"></i>
                                </div>
                                <div className="col-sm-1 px-0 mx-0 align-self-center align-middle">
                                    <Button size="sm" className="btn bg-gray-tradding border-gray-tradding"><i className="fa fa-plus"></i></Button>
                                </div>
                            </div>

                            <br/><br/><br/><br/><br/><br/>
                            <div className="form-group row col-sm-12 px-0 mx-0 mt-5 pt-5 text-white">
                                <div className="col-sm-9 align-self-center align-middle">
                                    <label className="text-muted">Max Group is 10 group with 45 stock list</label>
                                </div>
                                <div className="col-sm-3 align-self-center align-middle">
                                    <Button size="sm" className="btn bg-gray-tradding border-gray-tradding col-sm-12">Save</Button>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </>
        );
    }
}

export { CustomFrameHeaderStock, Stock, BuyPage, SellPage, AmendPage };
export default StockPage;
