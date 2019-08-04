import React from "react";
import PinInput from "react-pin-input";
import { Alert } from 'reactstrap';
import './../App.css';
import {AppFrameAction} from "../appframe";
import {Table} from "reactstrap";
import AmendArrow from "./../img/amend-arrow.svg";

class AlertPinSalah extends React.PureComponent{
    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <Alert color="danger">
                    PIN is wrong!
                </Alert>
            </>
        );
    }
}

function tanggal() {
    var fullDate = new Date().toLocaleDateString();
    var spDate = fullDate.split('/');

    var day = '';
    spDate[0].length < 2 ?
       day = '0'+spDate[0]
    : day = spDate[0]

    var month = '';
    spDate[1].length < 2 ?
        month = '0'+spDate[1]
        : month = spDate[1]

    var date = day+'/'+month+'/'+spDate[2];
    return date;
}

class VerifyPIN extends React.PureComponent{
    constructor(props){
        super(props);
    }

    state = {
        value: "",
        visible:false
    }

    onChange = value =>{
        this.setState({ value });
    };

    onClickSubmit = (e) => {
        if(this.state.value.length >= '6'){
            if(this.state.value === '123456') {
                if (this.props.tipe === 'buy'){
                    this.refs.frameAction.closeModal(100);
                    var frameAction = this.refs.frameAction;
                    frameAction.showModal({
                        headerClass: () => <div className="text-white f-12 text-right"><i className="fa fa-calendar-alt"></i> &nbsp; {tanggal()}</div>,
                        contentClass: detailBuyModal,
                        onClose: (result) => console.log('Second modal result = ', result),
                        size: "mini"
                    });
                } else if (this.props.tipe === 'sell'){
                    this.refs.frameAction.closeModal(100);
                    var frameAction = this.refs.frameAction;
                    frameAction.showModal({
                        headerClass: () => <div className="text-white f-12 text-right"><i className="fa fa-calendar-alt"></i> &nbsp; {tanggal()}</div>,
                        contentClass: detailSellModal,
                        onClose: (result) => console.log('Second modal result = ', result),
                        size: "mini"
                    });
                }else if (this.props.tipe === 'amend'){
                    this.refs.frameAction.closeModal(100);
                    var frameAction = this.refs.frameAction;
                    frameAction.showModal({
                        headerClass: () =>
                            <div className="row col-sm-12 px-0 mx-0">
                                <div className="col-sm-6 px-0 mx-0 text-white f-14">Order Information</div>
                                <div className="col-sm-6 px-0 mx-0 text-white f-12 text-right">
                                    <i className="fa fa-calendar-alt"></i> &nbsp; {tanggal()}
                                </div>
                            </div>,
                        contentClass: detailAmendModal,
                        onClose: (result) => console.log('Second modal result = ', result),
                        size: "small"
                    });
                } else if (this.props.tipe === 'withdraw'){
                    this.refs.frameAction.closeModal(100);
                    var frameAction = this.refs.frameAction;
                    frameAction.showModal({
                        headerClass: () => 'Ini : '+this.props.tipe,
                        contentClass: detailWithdrawModal,
                        onClose: (result) => console.log('Second modal result = ', result),
                        size: "mini"
                    });
                }
            } else{
                var visible = true;
                this.setState({ visible });
            }
        }
    };

    onClickCloseAlert = (e) => {
        var visible = false;
        var value = "";
        this.setState({ visible });
        this.pin.clear();
        this.setState({ value });
    };

    forgotPIN = (e) =>{
        var frameAction = this.refs.frameAction;
        frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h1 className="text-center">BIPS</h1></div>,
            contentClass: ForgotPINModal,
            onClose: (result) => console.log('Second modal result = ', result),
            size: "mini"
        });
    }

    render(){
        const {value} = this.state;
        return(
            <>
                <AppFrameAction ref="frameAction" />
                <div className="text-white">
                    <div className="text-center align-self-center align-middle">
                        <div className="d-border-bold img-round-icon">
                            <i className="icofont icofont-lock icofont-4x"></i>
                        </div>
                    </div>
                    <div className="form-group text-center pt-5">
                        <label className="col-sm-12 px-5 py-2 col-form-label f-14 font-weight-bold">Please enter security PIN</label>
                        <label className="col-sm-12 px-5 py-2 col-form-label">Please fullfill with 6 digit security
                        PIN to verify your transaction</label>
                    </div>
                    <div className="form-group mb-0">
                        <PinInput
                            inputStyle={{"color":"#FFFFFF", "border":"#565252 1px solid","border-radius":"10%","width":"15.25%"}}
                            inputFocusStyle={{"color":"#FFFFFF", "border":"#065A96 1px solid", "border-radius":"10%","width":"15.25%"}}
                            length={6}
                            focus
                            secret
                            ref={p => (this.pin = p)}
                            type="numeric"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-12 py-2 px-1 col-form-label">Forgot your PIN?
                            <span className="click-pointer btn btn-link text-primary" onClick={this.forgotPIN}> Click here</span>
                        </label>
                    </div>

                    <div className="form-group py-3">
                        <div className="justify-content-center align-items-center d-flex py-0">
                            <button type="submit" className=
                                {
                                    this.props.tipe === 'buy'? 'btn btn-danger form-control py-0' :
                                        this.props.tipe === 'sell'? 'btn btn-success form-control py-0' :
                                            this.props.tipe === 'amend'? 'btn btn-primary form-control py-0' :
                                                'btn btn-brown form-control py-0'
                                }
                                onClick={this.onClickSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className={this.state.visible ? "col-sm-12 text-center bg-danger fade-in" : "col-sm-12 text-center bg-danger fade-out"}>
                        <div className="px-2 pt-2 text-right"><i className="click-pointer icofont icofont-close" onClick={this.onClickCloseAlert}></i></div>
                        <div className="px-2 py-4">
                            PIN is wrong!
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class detailBuyModal extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="col-sm-12 text-white px-0 mx-0">
                    <div className="col-sm-12 row mx-0 px-0">
                        <div className="col-sm-6 px-0 mx-0">
                            Order Information
                        </div>
                        <div className="col-sm-6 px-0 mx-0 text-right">
                            (Order No: <span className="text-primary">#123456</span>)
                        </div>
                    </div><br/>
                    <div className="col-sm-12 mx-0 px-0">
                        <Table size="sm" responsive borderless className="text-white">
                            <thead className="d-border-table">
                            <tr>
                                <th className="text-center bg-danger" colSpan="3">BUY</th>
                            </tr>
                            </thead>
                            <tbody className="no-wrap d-border-table">
                            <tr>
                                <td>Code</td>
                                <td>:</td>
                                <td>AALI (Astra Argo Lestari Tbk.)</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td className="text-success">12,600</td>
                            </tr>
                            <tr>
                                <td>Vol (Lot)</td>
                                <td>:</td>
                                <td className="text-success">10</td>
                            </tr>
                            <tr>
                                <td>Mkt</td>
                                <td>:</td>
                                <td>RG</td>
                            </tr>
                            <tr>
                                <td>Expire</td>
                                <td>:</td>
                                <td>Day</td>
                            </tr>
                            <tr>
                                <td>Value</td>
                                <td>:</td>
                                <td className="text-success">12,600,000</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div><br/>
                <div className="col-sm-12 text-center mx-0 px-0">Do you want to buy this stock ?</div><br/>
                <div className="col-sm-12 row mx-0 px-0">
                    <div className="col-sm-6 text-right">
                        <button className="btn btn-dark col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>Cancel</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>OK</button>
                    </div>
                </div>
            </>
        );
    }
}

class detailSellModal extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="col-sm-12 text-white px-0 mx-0">
                    <div className="col-sm-12 row mx-0 px-0">
                        <div className="col-sm-6 px-0 mx-0">
                            Order Information
                        </div>
                        <div className="col-sm-6 px-0 mx-0 text-right">
                            (Order No: <span className="text-primary">#123456</span>)
                        </div>
                    </div><br/>
                    <div className="col-sm-12 mx-0 px-0">
                        <Table size="sm" responsive borderless className="text-white">
                            <thead className="d-border-table">
                            <tr>
                                <th className="text-center bg-success" colSpan="3">SELL</th>
                            </tr>
                            </thead>
                            <tbody className="no-wrap d-border-table">
                            <tr>
                                <td>Code</td>
                                <td>:</td>
                                <td>AALI (Astra Argo Lestari Tbk.)</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td className="text-success">12,600</td>
                            </tr>
                            <tr>
                                <td>Vol (Lot)</td>
                                <td>:</td>
                                <td className="text-success">10</td>
                            </tr>
                            <tr>
                                <td>Mkt</td>
                                <td>:</td>
                                <td>RG</td>
                            </tr>
                            <tr>
                                <td>Expire</td>
                                <td>:</td>
                                <td>Day</td>
                            </tr>
                            <tr>
                                <td>Value</td>
                                <td>:</td>
                                <td className="text-success">12,600,000</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div><br/>
                <div className="col-sm-12 text-center mx-0 px-0">Do you want to sell this stock ?</div><br/>
                <div className="col-sm-12 row mx-0 px-0">
                    <div className="col-sm-6 text-right">
                        <button className="btn btn-dark col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>Cancel</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-success col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>OK</button>
                    </div>
                </div>
            </>
        );
    }
}

class detailWithdrawModal extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="col-sm-12 text-white px-0 mx-0">
                    <div className="col-sm-12 row mx-0 px-0">
                        <div className="col-sm-6 px-0 mx-0">
                            Order Information
                        </div>
                        <div className="col-sm-6 px-0 mx-0 text-right">
                            (Order No: <span className="text-primary">#123456</span>)
                        </div>
                    </div><br/>
                    <div className="col-sm-12 mx-0 px-0">
                        <Table size="sm" responsive borderless className="text-white">
                            <thead className="d-border-table">
                            <tr>
                                <th className="text-center bg-brown" colSpan="3">WITHDRAW</th>
                            </tr>
                            </thead>
                            <tbody className="no-wrap d-border-table">
                            <tr>
                                <td>Code</td>
                                <td>:</td>
                                <td>AALI (Astra Argo Lestari Tbk.)</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td className="text-success">12,600</td>
                            </tr>
                            <tr>
                                <td>Vol (Lot)</td>
                                <td>:</td>
                                <td className="text-success">10</td>
                            </tr>
                            <tr>
                                <td>Mkt</td>
                                <td>:</td>
                                <td>RG</td>
                            </tr>
                            <tr>
                                <td>Expire</td>
                                <td>:</td>
                                <td>Day</td>
                            </tr>
                            <tr>
                                <td>Value</td>
                                <td>:</td>
                                <td className="text-success">12,600,000</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div><br/>
                <div className="col-sm-12 text-center mx-0 px-0">Do you want to withdraw this stock ?</div><br/>
                <div className="col-sm-12 row mx-0 px-0">
                    <div className="col-sm-6 text-right">
                        <button className="btn btn-dark col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>Cancel</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-brown col-sm-12" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>OK</button>
                    </div>
                </div>
            </>
        );
    }
}

class detailAmendModal extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="col-sm-12 row mx-0 px-0 mb-2">
                    <div className="col-sm-9 px-1 mx-0 f-14">
                        <span className="pr-4">[Order No: <span className="text-primary">#123456</span>]</span>
                        <span className="text-right pl-5 ml-5">
                            Current Order
                            <img src={AmendArrow} alt="amend-arrow" width="9%" height="auto" className="px-2"/>
                            Amend Order
                        </span>
                    </div>
                </div>
                <div className="col-sm-12 px-0 mx-0 row">
                    <div className="col-sm-6 text-white px-0 mx-0">
                        <div className="col-sm-12 mx-0 px-0">
                            <Table size="sm" responsive borderless className="text-white">
                                <thead></thead>
                                <tbody className="no-wrap d-border-table">
                                <tr>
                                    <th colSpan="3">BUY</th>
                                </tr>
                                <tr>
                                    <td>Code</td>
                                    <td>:</td>
                                    <td>AALI (Astra Argo Lestari Tbk.)</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>:</td>
                                    <td>12,600</td>
                                </tr>
                                <tr>
                                    <td>Vol (Lot)</td>
                                    <td>:</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Mkt</td>
                                    <td>:</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>Expire</td>
                                    <td>:</td>
                                    <td>Day</td>
                                </tr>
                                <tr>
                                    <td>Value</td>
                                    <td>:</td>
                                    <td>12,600,000</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-sm-6 text-white px-1 mx-0">
                        <div className="col-sm-12 mx-0 px-0">
                            <Table size="sm" responsive borderless className="text-white bg-gray-tradding">
                                <thead></thead>
                                <tbody className="no-wrap d-border-table">
                                <tr>
                                    <th colSpan="3" className="text-danger">BUY</th>
                                </tr>
                                <tr>
                                    <td>Code</td>
                                    <td>:</td>
                                    <td>AALI (Astra Argo Lestari Tbk.)</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>:</td>
                                    <td className="text-success">12,600</td>
                                </tr>
                                <tr>
                                    <td>Vol (Lot)</td>
                                    <td>:</td>
                                    <td className="text-success">100</td>
                                </tr>
                                <tr>
                                    <td>Mkt</td>
                                    <td>:</td>
                                    <td>RG</td>
                                </tr>
                                <tr>
                                    <td>Expire</td>
                                    <td>:</td>
                                    <td>Day</td>
                                </tr>
                                <tr>
                                    <td>Value</td>
                                    <td>:</td>
                                    <td className="text-success">12,600,000</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div><br/>
                <div className="col-sm-12 text-center mx-0 px-0">Do you want to amend this stock ?</div><br/>
                <div className="col-sm-12 row mx-0 px-0">
                    <div className="col-sm-6 text-right">
                        <button className="btn btn-dark col-sm-4" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>Cancel</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-primary col-sm-4" onClick={
                            () => {
                                var refs = this.refs;
                                refs.frameAction.closeModal(100)
                            }
                        }>OK</button>
                    </div>
                </div>
            </>
        );
    }
}

class ForgotPINModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <label className="col-sm-12 px-5 py-2 col-form-label text-gray-tradding">Forgot PIN</label>
                <div className="text-white">
                    <div className="form-group">
                        <label className="col-sm-12 px-5 py-2 col-form-label">Enter your email address and we'll
                            send link to reset your PIN
                        </label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-sm-12 px-5 py-2 col-form-label">Email</label>
                        <div className="col-sm-12 px-5 py-0">
                            <input type="email" className="text-white input-login col-sm-12"/>
                        </div>
                    </div>

                    <div className="form-group py-3">
                        <div className="justify-content-center align-items-center d-flex py-0 px-5">
                            <button type="submit" className="btn btn-primary form-control py-0">
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="form-group text-center">
                        <label className="col-sm-12 px-5 py-2 col-form-label">
                            <span className="click-pointer btn btn-link text-primary" onClick={this.closeClick}> Back to Verify PIN</span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
}

export default VerifyPIN;
export {tanggal};