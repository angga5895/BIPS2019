import React from "react";
import {Input, InputGroup, InputGroupAddon, InputGroupText, Table, UncontrolledTooltip} from "reactstrap";

class TableInfoTransaction extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="col-sm-12 row px-0 mx-0">
                    <div className="col-sm-3 px-0 mx-0">
                        <InputGroup size="sm">
                            <Input className="col-sm-12 d-border bg-dark-grey" value="AALI" size="sm"/>
                            <InputGroupAddon addonType="append">
                                <InputGroupText className="bg-gold text-white">90%</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>

                    <div className="col-sm-3 px-0 mx-0">
                        <label className="col-sm-12 f-12 f-xs-14 px-0 mx-0 text-primary text-center">
                            7,545,000
                            <br/><span className="text-white f-9">My Investment In AALI</span>
                        </label>
                    </div>

                    <div className="col-sm-2 px-0 mx-0">
                        <label className="col-sm-12 f-12 f-xs-14 px-0 mx-0 text-danger text-center">
                            -1,18%
                            <br/><span className="text-white f-9">%Change</span>
                        </label>
                    </div>

                    <div className="col-sm-2 px-0 mx-0">
                        <label className="col-sm-12 f-12 f-xs-14 px-0 mx-0 text-primary text-center" id={this.props.lotshare}>
                            <span id="lotShare">6</span>
                            <br/><span className="text-white f-9">Lot</span>
                        </label>
                    </div>

                    <div className="col-sm-2 px-0 mx-0">
                        <label className="col-sm-12 f-12 f-xs-14 px-0 mx-0 text-danger text-center">
                            -90,240
                            <br/><span className="text-white f-9">P/L</span>
                        </label>
                    </div>
                </div>

                <div><i className="fa fa-info-circle text-danger"></i>&nbsp; Not yet submit annual financial report</div>

                <Table responsive borderless size="sm" className="text-white d-border-table bg-dark-grey">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">Last</td>
                        <td className="text-danger d-border-tr-gray text-right">12,650</td>
                        <td className="bg-gray-tradding d-border-tr-black">Previous</td>
                        <td className="text-warning d-border-tr-gray text-right">12,650</td>
                        <td className="bg-gray-tradding d-border-tr-black">Freq</td>
                        <td className="d-border-tr-gray text-right">779</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">Change</td>
                        <td className="text-danger d-border-tr-gray text-right"><i className="icofont icofont-caret-down"></i> -50</td>
                        <td className="bg-gray-tradding d-border-tr-black">Open</td>
                        <td className="text-success d-border-tr-gray text-right">12,650</td>
                        <td className="bg-gray-tradding d-border-tr-black">Vol</td>
                        <td className="text-danger d-border-tr-gray text-right">2 K</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">%</td>
                        <td className="text-danger d-border-tr-gray text-right">-0.40%</td>
                        <td className="bg-gray-tradding d-border-tr-black">High</td>
                        <td className="text-success d-border-tr-gray text-right">12,800</td>
                        <td className="bg-gray-tradding d-border-tr-black">Val</td>
                        <td className="text-danger d-border-tr-gray text-right">2.6 B</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">Lower AR</td>
                        <td className="d-border-tr-gray text-right">12,400</td>
                        <td className="bg-gray-tradding d-border-tr-black">Low</td>
                        <td className="text-danger d-border-tr-gray text-right">12,350</td>
                        <td className="bg-gray-tradding d-border-tr-black">F. Buy</td>
                        <td className="d-border-tr-gray text-right">1.1 B</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Upper AR</td>
                        <td className="text-right">13,000</td>
                        <td className="bg-gray-tradding">Avg.</td>
                        <td className="text-danger text-right">12,639.92</td>
                        <td className="bg-gray-tradding">F. Sell</td>
                        <td className="text-right">825.5 M</td>
                    </tr>
                    </tbody>
                </Table>

                <div className="card card-375 bg-grey">
                    <div className="card-body scrollable">
                        <Table responsive borderless size="sm" className="text-white bg-dark-grey px-2">
                            <thead className="d-border-top d-border-bottom">
                            <tr>
                                <th className="text-center">NoB</th>
                                <th className="text-center">Bid Vol</th>
                                <th className="text-center">Bid</th>
                                <th className="text-center">Offer</th>
                                <th className="text-center">Offer Vol</th>
                                <th className="text-center">NoS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-right">4</td>
                                <td className="text-right">17</td>
                                <td className="text-right text-warning">12,600</td>
                                <td className="text-right text-success">12,625</td>
                                <td className="text-right">35</td>
                                <td className="text-right">4</td>
                            </tr>
                            <tr>
                                <td className="text-right">7</td>
                                <td className="text-right">19</td>
                                <td className="text-right text-danger">12,575</td>
                                <td className="text-right text-success">12,650</td>
                                <td className="text-right">15</td>
                                <td className="text-right">4</td>
                            </tr>
                            <tr>
                                <td className="text-right">3</td>
                                <td className="text-right">85</td>
                                <td className="text-right text-danger">12,550</td>
                                <td className="text-right text-success">12,675</td>
                                <td className="text-right">681</td>
                                <td className="text-right">2</td>
                            </tr>
                            <tr>
                                <td className="text-right">8</td>
                                <td className="text-right">14</td>
                                <td className="text-right text-danger">12,525</td>
                                <td className="text-right text-success">12,700</td>
                                <td className="text-right">25</td>
                                <td className="text-right">7</td>
                            </tr>
                            <tr>
                                <td className="text-right">4</td>
                                <td className="text-right">274</td>
                                <td className="text-right text-danger">12,500</td>
                                <td className="text-right text-success">12,725</td>
                                <td className="text-right">121</td>
                                <td className="text-right">4</td>
                            </tr>
                            <tr>
                                <td className="text-right">3</td>
                                <td className="text-right">14</td>
                                <td className="text-right text-danger">12,475</td>
                                <td className="text-right text-success">12,750</td>
                                <td className="text-right">316</td>
                                <td className="text-right">3</td>
                            </tr>
                            <tr>
                                <td className="text-right">2</td>
                                <td className="text-right">178</td>
                                <td className="text-right text-danger">12,450</td>
                                <td className="text-right text-success">12,775</td>
                                <td className="text-right">228</td>
                                <td className="text-right">2</td>
                            </tr>
                            <tr>
                                <td className="text-right">5</td>
                                <td className="text-right">20</td>
                                <td className="text-right text-danger">12,425</td>
                                <td className="text-right text-success">12,800</td>
                                <td className="text-right">224</td>
                                <td className="text-right">5</td>
                            </tr>
                            <tr>
                                <td className="text-right">1</td>
                                <td className="text-right">739</td>
                                <td className="text-right text-danger">12,400</td>
                                <td className="text-right text-success">12,825</td>
                                <td className="text-right">10</td>
                                <td className="text-right">1</td>
                            </tr>
                            <tr>
                                <td className="text-right">2</td>
                                <td className="text-right">22</td>
                                <td className="text-right text-danger">12,350</td>
                                <td className="text-right text-success">12,850</td>
                                <td className="text-right">158</td>
                                <td className="text-right">2</td>
                            </tr>
                            </tbody>
                            <tfoot className="d-border-top">
                            <tr>
                                <th className="text-right">34</th>
                                <th className="text-right">1,436</th>
                                <th colSpan="2" className="text-center">Total</th>
                                <th className="text-right">1,813</th>
                                <th className="text-right">39</th>
                            </tr>
                            </tfoot>
                        </Table>
                    </div>
                </div>
                <UncontrolledTooltip placement="top" target={this.props.lotshare} innerClassName="bg-primary">
                    600 Share
                </UncontrolledTooltip>
            </>
        );
    }
}

export default TableInfoTransaction;