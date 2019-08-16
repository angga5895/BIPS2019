import React from "react";
import {Button, CustomInput, Input, InputGroup, InputGroupAddon, InputGroupText, Table} from "reactstrap";
import Select from "react-select";
import {AppFrameAction} from "../../appframe";
import VerifyPIN from "../verifyPin";
import {tanggal} from "../verifyPin";

const options = [
    { value: 'rg', label: 'RG' },
    { value: 'day', label: 'Day' }
];

class FormAmend extends React.PureComponent{
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
            <>
                <AppFrameAction ref="frameAction" />
                <div className="form-group row">
                    <div className="col-sm-6 f-18 text-primary">Amend <span className="text-success"> [Sell]</span></div>
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
                        <CustomInput className="col-sm-2 bg-dark-grey py-2" type="checkbox" id={this.props.cb3} label="All" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2">Mkt.</div>
                    <div className="col-sm-10 mr-0 pr-0 row">
                        <Select
                            isDisabled
                            className="header-color col-sm-6"
                            defaultValue={options[0]}
                            label="Single select"
                            options={options}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    neutral0: '#010101',
                                    neutral20 : '#010101',
                                    neutral30 : '#4D4E4E',
                                    neutral40 : '#010101',
                                    neutral80 : '#4D4E4E',
                                    neutral5 :'#4D4E4E',
                                    neutral10 :'#4D4E4E',
                                },
                            })}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-7 mx-0 px-0 row">
                        <div className="col-sm-3">Expire</div>
                        <div className="col-sm-9 mx-0 px-2 mb-3">
                            <Select
                                isDisabled
                                className="header-color col-sm-12"
                                defaultValue={options[1]}
                                label="Single select"
                                options={options}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        neutral0: '#010101',
                                        neutral20 : '#010101',
                                        neutral30 : '#4D4E4E',
                                        neutral40 : '#010101',
                                        neutral80 : '#4D4E4E',
                                        neutral5 :'#4D4E4E',
                                        neutral10 :'#4D4E4E',
                                    },
                                })}
                            />
                        </div>

                        <div className="col-sm-3">Value</div>
                        <div className="col-sm-9 mx-0 px-2 mb-3">
                            <Input className="col-sm-12 d-border bg-dark-grey " size="md" value="12,600"/>
                        </div>
                    </div>

                    <div className="col-sm-5 mx-0 px-2 text-center align-middle align-self-center">
                        <Button size="lg" className="btn btn-lg col-sm-8" color="primary" onClick={this.buttonClickPIN}>
                            <i className="icofont icon-amend-btn icofont-2x"></i>
                            <br/>Amend
                        </Button>
                    </div>
                </div>

                <Table responsive borderless size="sm" className="text-white pb-0 mb-0 d-border-table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className="bg-gray-tradding">Cash On <br/> T+2</td>
                        <td>5,911,198</td>
                        <td className="bg-gray-tradding">Remain <br/> Trade Limit</td>
                        <td>15,000,980</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

class PINVerify extends React.Component {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <VerifyPIN tipe = 'amend'/>
            </>
        );
    }
}

export default FormAmend;
