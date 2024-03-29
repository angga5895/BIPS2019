import React from "react";
import {Button, CustomInput, Input, InputGroup, InputGroupAddon, InputGroupText, Table} from "reactstrap";
import Select from "react-select";
import {AppFrameAction} from "../../appframe";
import VerifyPIN, {tanggal} from "../verifyPin";
import {cssmode} from "../../App";

const options = [
    { value: 'rg', label: 'RG' },
    { value: 'day', label: 'Day' }
];

class FormBuy extends React.PureComponent{
    constructor(props){
        super(props);
    }

    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickPIN = (e) => {
        var frameAction = this.refs.frameAction;
        frameAction.showModal({
            headerClass: () => <div className="text-right"><i className="icofont icofont-close text-icofont-close text-border click-pointer"
                              onClick={this.closeClick}></i></div>,
            contentClass: PINVerify,
            onClose: (result) => console.log('Second modal result = ', result),
            size: "mini"
        });
    }

    render(){
        return(
            <div>
                <AppFrameAction ref="frameAction" />
                <div className="form-group row">
                    <div className="col-sm-6 f-18 text-danger">Buy</div>
                    <div className="col-sm-6 text-right"><i className="fa fa-calendar-alt"></i> {tanggal()}</div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">Code</div>
                    <div className="col-sm-10 mr-0 pr-0 row">
                        <Input className="col-sm-3 d-border bg-dark-grey " size="md" value="AALI"/>
                        <InputGroup className="col-sm-9">
                            <InputGroupAddon addonType="append">
                                <InputGroupText className="bg-gold">90%</InputGroupText>
                            </InputGroupAddon>
                            <Input className="d-border bg-dark-grey " size="md" value="Astra Argo Lestari Tbk."/>
                        </InputGroup>
                        <CustomInput className="py-2" type="checkbox" id={this.props.cb1} label="Prevent same order" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2">Price</div>
                    <div className="col-sm-10 mr-0 pr-0 row">
                        <Input className="col-sm-6 d-border bg-dark-grey " size="md" value="12,600"/>
                        <CustomInput className="mx-2 col-sm-5 py-2 bg-dark-grey" type="checkbox" id={this.props.cb2} label="Auto last" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2">Vol</div>
                    <div className="col-sm-10 mr-0 pr-0 row">
                        <Input className="col-sm-6 d-border bg-dark-grey " size="md" value="10"/>
                        <label className="col-sm-2 bg-dark-grey py-2">Lot</label>
                        <Button className="col-sm-2 btn btn-sm btn-dark py-2" size="md">Max</Button>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2">Mkt.</div>
                    <div className="col-sm-10 mr-0 pr-0 row">
                        <SelectMkt/>
                        <CustomInput className="mx-2 col-sm-5 bg-dark-grey py-2 pr-0" type="checkbox" id={this.props.cb3} label="Order Booking" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-7 mx-0 px-0 row">
                        <div className="col-sm-3">Expire</div>
                        <div className="col-sm-9 mx-0 px-2 mb-3">
                            <SelectExp />
                        </div>

                        <div className="col-sm-3">Value</div>
                        <div className="col-sm-9 mx-0 px-2 mb-3">
                            <Input className="col-sm-12 d-border bg-dark-grey " size="md" value="12,600"/>
                        </div>
                    </div>

                    <div className="col-sm-5 mx-0 px-2 text-center align-middle align-self-center">
                        <Button size="lg" className="btn btn-lg btn-danger col-sm-8" onClick={this.buttonClickPIN}>
                            <i className="icofont icon-buy-btn icofont-2x"></i>
                            <br/>Buy
                        </Button>
                    </div>
                </div>

                <Table responsive borderless size="sm" className="text-white pb-0 mb-0 d-border-table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">Cash On <br/> T+2</td>
                        <td className="d-border-tr-gray">5,911,198</td>
                        <td className="bg-gray-tradding d-border-tr-black">Remain <br/> Trade Limit</td>
                        <td className="d-border-tr-gray">15,000,980</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding d-border-tr-black">Cash Buy <br/>(Share)</td>
                        <td className="d-border-tr-gray">230</td>
                        <td className="bg-gray-tradding d-border-tr-black">Cash Buy <br/>(Lot)</td>
                        <td className="d-border-tr-gray">2</td>
                    </tr>
                    <tr>
                        <td className="bg-gray-tradding">Max Buy <br/>(Share)</td>
                        <td>303</td>
                        <td className="bg-gray-tradding">Max Buy <br/>(Lot)</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

class PINVerify extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <VerifyPIN tipe = 'buy'/>
            </>
        );
    }
}

class SelectMkt extends React.Component {
    selectStyleNight = theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            neutral0  : '#181717',
            neutral20 : '#565252',
            neutral30 : '#565252',
            neutral40 : '#cccccc',
            neutral80 : '#FFFFFF',
            primary75 : '#FFFFFF',
            primary50 : '#4D4D4E',
            primary25 : '#4D4D4E',
            primary : '#808282',
        },
    });

    selectStyleLight = theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            neutral0  : '#E7E7E7',
            neutral20 : '#9A9A9A',
            neutral30 : '#9A9A9A',
            neutral40 : '#767676',
            neutral80 : '#888888',
            primary75 : '#888888',
            primary50 : '#F3F3F3',
            primary25 : '#F3F3F3',
            primary : '#0363A7',
        },
    });

    render() {
        return (
            <Select
                className="header-color col-sm-6"
                defaultValue={options[0]}
                label="Single select"
                options={options}
                theme={cssmode == 'night' ? this.selectStyleNight : this.selectStyleLight}
            />
        );
    }
}

class SelectExp extends React.Component {
    selectStyleNight = theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            neutral0  : '#181717',
            neutral20 : '#565252',
            neutral30 : '#565252',
            neutral40 : '#cccccc',
            neutral80 : '#FFFFFF',
            primary75 : '#FFFFFF',
            primary50 : '#4D4D4E',
            primary25 : '#4D4D4E',
            primary : '#0363A7',
        },
    });

    selectStyleLight = theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            neutral0  : '#E7E7E7',
            neutral20 : '#9A9A9A',
            neutral30 : '#9A9A9A',
            neutral40 : '#767676',
            neutral80 : '#888888',
            primary75 : '#888888',
            primary50 : '#F3F3F3',
            primary25 : '#F3F3F3',
            primary : '#0363A7',
        },
    });

    render() {
        return (
            <Select
                className="header-color col-sm-12"
                defaultValue={options[1]}
                label="Single select"
                options={options}
                theme={cssmode == 'night' ? this.selectStyleNight : this.selectStyleLight}
            />
        );
    }
}

export default FormBuy;