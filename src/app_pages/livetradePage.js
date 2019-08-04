import React from 'react';
import { AppFrameAction } from '../appframe.js';
import {Label, Input, Button, Table} from "reactstrap";
import {WSConnectionAction} from "../appnetwork";
import ModalBuy from "./app_modals/modal_buy";
import ModalSell from "./app_modals/modal_sell";
import TableInfoTransaction from "./app_transaction/tableInfoTransaction";

class LiveTradePage extends React.PureComponent {
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
        value: "watchlist"
    }

    render () {
        return (
            <div>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction />
                <div className="col-sm-12 px-0 mx-0 row">
                    <div className="col-mbl-radio px-0 mx-0 row">
                        <ul className="ul-radio col-sm-12 px-0 mx-0 row">
                            <div className="title-radio col-title-radio px-4 mx-0">Display</div>

                            <li className="li-radio col-radio px-0 mx-0" onClick={
                                (e) => {
                                    this.setState({
                                        value : "watchlist"
                                    })
                                }
                            }>
                                <input type="radio" id="f-option" name="selector" checked={this.state.value == "watchlist" ? true : false}/>
                                <label htmlFor="f-option">Watchlist</label>

                                <div className="check"></div>
                            </li>

                            <li className="li-radio col-radio px-0 mx-0" onClick={
                                (e) => {
                                    this.setState({
                                        value : "foreign"
                                    })
                                }
                            }>
                                <input type="radio" id="s-option" name="selector" checked={this.state.value == "foreign" ? true : false}/>
                                <label htmlFor="s-option">Foreign</label>

                                <div className="check"></div>
                            </li>

                            <li className="li-radio col-radio px-0 mx-0" onClick={
                                (e) => {
                                    this.setState({
                                        value : "tick"
                                    })
                                }
                            }>
                                <input type="radio" id="t-option" name="selector" checked={this.state.value == "tick" ? true : false}/>
                                <label htmlFor="t-option">Tick</label>

                                <div className="check"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-mbl-radio-o px-0 mx-0">
                        <div className="title-radio-right col-sm-12 pull-right text-right">
                            <Button className="d-border mx-1 col-sm-3" size="md" color="success" onClick={this.buttonClickSell}><span className="text-white">Sell</span></Button>
                            <Button className="d-border mx-1 col-sm-3" size="md" color="danger" onClick={this.buttonClickBuy}><span className="text-white">Buy</span></Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 row px-0 mx-0 row">
                    <div className="col-sm-8 px-2 mx-0">
                        <div className="card card-600 bg-trading-gray">
                            <Table responsive borderless size="sm" className="text-center align-middle align-self-center">
                                <thead className="text-white t-border-bottom-bold t-border-top-bold">
                                <tr>
                                    <th>Code</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th colSpan="2">Change (%)</th>
                                    <th>T.Vol</th>
                                    <th colSpan="2">Buyer</th>
                                    <th colSpan="2">Seller</th>
                                    <th>Board</th>
                                </tr>
                                </thead>
                                <tbody className="text-white text-center">
                                <tr>
                                    <td>TLKM</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>AALI</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBRI</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>WSKT</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>TLKM</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>AALI</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>PTPP</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>WKST</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>CCLA</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>WSKT</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>TLKM</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>AALI</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>PTPP</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>WKST</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>AALI</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>PTPP</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>BBCA</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>WKST</td>
                                    <td className="text-right">3,760</td>
                                    <td className="text-success text-right"><i className="icofont icofont-caret-up"></i></td>
                                    <td className="text-right text-success">50</td>
                                    <td className="text-right text-success">0.35</td>
                                    <td className="text-right text-success">326,000</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td className="text-warning">D</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>CCLA</td>
                                    <td className="text-right">2,000</td>
                                    <td className="text-danger text-right"><i className="icofont icofont-caret-down"></i></td>
                                    <td className="text-right text-danger">-20</td>
                                    <td className="text-right text-danger">-0.35</td>
                                    <td className="text-right text-danger">156,000</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td className="text-success">F</td>
                                    <td>DE</td>
                                    <td>RG</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-sm-4 px-2 mx-0">
                        <TableInfoTransaction lotshare="infoLiveTradePage"/>
                    </div>
                </div>
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

export default LiveTradePage;
