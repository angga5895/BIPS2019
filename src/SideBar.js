import React from "react";
import {Button} from "reactstrap";
import Select from "react-select";
import {cssmode} from "./App";


const option = [
    { value: 'groupA', label: 'Group A' },
    { value: 'groupB', label: 'Group B' }
];

class SideBar extends React.Component{
    render(){
        return(
            <>
                <div className="col-lg-1 px-0 mx-0 bg-black-trading d-border">
                    <div className="flex-grow-1">
                        <div className="flex-lg-column mb-2 cssmenu">
                            <div className="align-self-center text-center d-border-bottom col-sm-12 paddingY-2 px-0 mx-0">
                                <i className="far fa-2x fa-star"></i>
                            </div>
                        </div>
                        <div className="nav flex-lg-column">
                            <div className="nav-link align-self-center text-center px-0 bg-grey-mystic col-sm-12">
                                <SelectGroup/>
                            </div>
                            <div className="nav-link align-self-center text-center pr-2 pl-1">
                                <h5>AALI</h5>
                                <p className="f-11-center mb-2 text-danger">12,650</p>
                                <hr className="bg-white my-0"/>
                            </div>
                            <div className="nav-link align-self-center text-center pr-2 pl-1">
                                <h5>ADHI</h5>
                                <p className="f-11-center mb-2 text-danger">1,529</p>
                                <hr className="bg-white my-0"/>
                            </div>
                            <div className="nav-link align-self-center text-center pr-2 pl-1">
                                <h5>ANTM</h5>
                                <p className="f-11-center mb-2 text-danger">27,400</p>
                                <hr className="bg-white my-0"/>
                            </div>
                            <div className="nav-link align-self-center text-center pr-2 pl-1">
                                <h5>ASII</h5>
                                <p className="f-11-center mb-2 text-danger">1,025</p>
                                <hr className="bg-white my-0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class SelectGroup extends React.Component {
    selectStyleNight = theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
                ...theme.colors,
                neutral0: '#3D3E3F',
                neutral20 : '#333332',
                neutral30 : '#333332',
                neutral40 : '#1A1A1A',
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
            neutral0: '#E7E8E8',
            neutral20 : '#DDDDDD',
            neutral30 : '#DDDDDD',
            neutral40 : '#767676',
            neutral80 : '#999999',
            primary75 : '#999999',
            primary50 : '#F3F3F3',
            primary25 : '#F3F3F3',
            primary : '#CCCCCC',
        },
    });

    render() {
        return (
            <div className="col-sm-12 px-0 mx-0 text-white">
                <div className="col-md-12 bg-grey-mystic px-0 text-center">
                    <Select
                        className="f-9 col-sm-12 px-0 text-center"
                        defaultValue={option[0]}
                        label="Single select"
                        options={option}
                        theme={cssmode == 'night' ? this.selectStyleNight : this.selectStyleLight}
                    />
                </div>
            </div>
        );
    }
}

export default SideBar;