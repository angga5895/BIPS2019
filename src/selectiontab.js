import React from 'react';
import { ContextConnector } from './appcontext.js';
import { AppFrameContext } from './appframe.js';
import { Menu, Input } from 'semantic-ui-react';
import Select from 'react-select';
import { Table ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import user_avatar from './img/man.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledCollapse } from 'reactstrap';
import {cssmode} from "./App";


const options = [
    { value: 'componentindex', label: 'Component Index' },
    { value: 'componenthome', label: 'Component Home' }
];

const option = [
    { value: 'indonesia', label: 'Indonesia (IDX)' }
];

class MenuHeader extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                {
                    Object.keys(this.props.id.instances).map((k) => {
                            var e = this.props.id.instances[k];
                            return (
                                <Menu.Item
                                    className = "col-sm-tab"
                                    key={e.instanceName}
                                    name={e.instanceName}
                                    active={this.props.id.activeInstance === e}
                                    onClick={
                                        () => this.props.id.activateFrame(e.instanceName)
                                    }
                                >
                                    {
                                        this.props.id.linkTitles[e.instanceName] || e.title
                                    }
                                </Menu.Item>
                            )
                        }
                    )
                }
            </>
        );
    }
}

const UISelectionTab_Base = (props) => {
  // expected in props:
  // instances: array of pageInstance object
  // activeInstance: current pageInstance object
  // activateFrame: (instanceName) => {} hook to activate selected frame ID
  // linkTitles: object, mapping instanceName to link title
  return (
    <>
        <div>
            <div className="d-xxl-none d-xxl-block d-border-bottom-bold mb-1">
                <Menu className="row">
                    <div className="col-hd-1 mx-2 px-0 text-center align-middle align-self-center">
                        <h2>BIPS</h2>
                    </div>
                    <div className="d-border-left d-border-right row col-hd-9 px-0 mr-2">
                        <MenuHeader id={props}/>

                        <Menu.Menu className="col-sm-2 px-0 ml-3 align-self-center">
                            <SelectItem1/>
                        </Menu.Menu>

                        <Menu.Menu className="col-sm-2 px-0 ml-3 align-self-center">
                            <SelectItem2/>
                        </Menu.Menu>
                    </div>

                    <div className="col-hd-2 row">

                        <Menu.Menu className="col-sm-8 px-4 mx-0">
                            <InfoCash/>
                        </Menu.Menu>

                        <Menu.Menu className="px-1">
                            <UserInfo/>
                        </Menu.Menu>
                    </div>

                </Menu>
            </div>
            <div className="d-sml-none d-sml-block d-border-bottom-bold mb-1">
                <Navbar color="sm-header" dark>
                    <div className="col-sm-12 px-0 mx-0 row">
                        <div className="col-sm-1 px-0 mx-0 align-self-center text-center">
                            <NavbarBrand href="/" className="mr-auto text-white"><h2>BIPS</h2></NavbarBrand>
                        </div>
                        <div className="col-sm-10 px-0 mx-0 align-self-center text-center">
                            <div className="col-sm-12 align-self-center text-center row">
                                <div className="col-sm-8 px-0 mx-0 row">
                                    <Menu.Menu className="col-sm-6 px-4 align-self-center">
                                        <SelectItem1/>
                                    </Menu.Menu>

                                    <Menu.Menu className="col-sm-6 px-4 align-self-center">
                                        <SelectItem2/>
                                    </Menu.Menu>
                                </div>
                                <div className="col-sm-4 px-0 mx-0 row">
                                    <Menu.Menu className="col-sm-8 px-4 mx-0">
                                        <InfoCash/>
                                    </Menu.Menu>

                                    <Menu.Menu className="col-sm-4 px-1 mx-0">
                                        <UserInfo/>
                                    </Menu.Menu>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 px-0 mx-0 align-self-center text-center">
                            <NavbarToggler id="toggler" className="mr-2" />
                        </div>
                        <UncontrolledCollapse toggler="#toggler" navbar>
                            <Menu className="row col-sm-12">
                                <MenuHeader id={props}/>
                            </Menu>
                        </UncontrolledCollapse>
                    </div>
                </Navbar>
            </div>
            <div className="d-xsml-none d-xsml-block d-border-bottom-bold mb-1">
                <Navbar color="sm-header" dark>
                    <div className="col-sm-12 px-0 mx-0 row">
                        <div className="col-sm-1 px-0 mx-0 align-self-center text-center">
                            <NavbarBrand href="/" className="mr-auto text-white"><h2>BIPS</h2></NavbarBrand>
                        </div>
                        <div className="col-sm-10 px-0 mx-0 align-self-center text-center">
                            <div className="col-sm-12 align-self-center text-center row">
                                <div className="col-sm-7 px-0 mx-0 row">
                                    <Menu.Menu className="col-sm-6 px-2 align-self-center">
                                        <SelectItem1/>
                                    </Menu.Menu>

                                    <Menu.Menu className="col-sm-6 px-2 align-self-center">
                                        <SelectItem2/>
                                    </Menu.Menu>
                                </div>
                                <div className="col-sm-5 px-0 mx-0 row">
                                    <Menu.Menu className="col-sm-8 px-4 mx-0">
                                        <InfoCash/>
                                    </Menu.Menu>

                                    <Menu.Menu className="col-sm-4 px-1 mx-0">
                                        <UserInfo/>
                                    </Menu.Menu>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 px-0 mx-0 align-self-center text-center">
                            <NavbarToggler id="toggler" className="mr-2" />
                        </div>
                        <UncontrolledCollapse toggler="#toggler" navbar>
                            <Menu className="row col-sm-12">
                                <MenuHeader id={props}/>
                            </Menu>
                        </UncontrolledCollapse>
                    </div>
                </Navbar>
            </div>
            <div className="d-xxsml-none d-xxsml-block d-border-bottom-bold mb-1">
                <Navbar color="sm-header" dark>
                    <div className="col-sm-12 px-0 mx-0 row">
                        <div className="col-sm-3 px-0 mx-0 align-self-center text-center">
                            <NavbarBrand href="/" className="mr-auto text-white"><h2>BIPS</h2></NavbarBrand>
                        </div>
                        <div className="col-sm-8 px-0 mx-0 align-self-center text-center">
                            <div className="col-sm-12 align-self-center text-center row">
                                <Menu.Menu className="col-sm-7 px-5 mx-0">
                                    <InfoCash/>
                                </Menu.Menu>

                                <Menu.Menu className="col-sm-5 px-2 mx-0">
                                    <UserInfo/>
                                </Menu.Menu>
                            </div>
                        </div>
                        <div className="col-sm-1 px-0 mx-0 align-self-center text-center">
                            <NavbarToggler id="toggler" className="mr-2" />
                        </div>
                    </div>
                    <div className="col-sm-12 px-0 mx-0 row">
                        <Menu.Menu className="col-sm-6 px-4 align-self-center">
                            <SelectItem1/>
                        </Menu.Menu>

                        <Menu.Menu className="col-sm-6 px-4 align-self-center">
                            <SelectItem2/>
                        </Menu.Menu>
                    </div>
                    <UncontrolledCollapse toggler="#toggler" navbar>
                        <Menu className="row col-sm-12">
                            <MenuHeader id={props}/>
                        </Menu>
                    </UncontrolledCollapse>
                </Navbar>
            </div>
            <div className="d-xsm-none d-xsm-block d-border-bottom-bold mb-1">
                <Navbar color="sm-header" dark>
                    <div className="align-self-center text-center col-sm-12 row">
                        <div className="col-mbl-3 text-center align-self-center">
                            <NavbarBrand href="/" className="mr-auto text-white"><h3>BIPS</h3></NavbarBrand>
                        </div>
                        <div className="col-mbl-4 text-center align-self-center">
                            <Menu.Menu>
                                <InfoCash/>
                            </Menu.Menu>
                        </div>
                        <div className="col-mbl-3">
                            <Menu.Menu>
                                <UserInfo/>
                            </Menu.Menu>
                        </div>
                        <div className="col-mbl-2 text-center align-self-center">
                            <NavbarToggler id="toggler"/>
                        </div>
                    </div>

                    <div className="col-sm-12 px-0 mx-0 row text-center align-self-center">
                        <Menu.Menu className="col-mbl-6 px-2 align-self-center text-center">
                            <SelectItem1/>
                        </Menu.Menu>

                        <Menu.Menu className="col-mbl-6 px-2 align-self-center text-center align-self-center">
                            <SelectItem2/>
                        </Menu.Menu>
                    </div>

                    <UncontrolledCollapse toggler="#toggler" navbar>
                        <Menu className="row col-sm-12">
                            <MenuHeader id={props}/>
                        </Menu>
                    </UncontrolledCollapse>
                </Navbar>
            </div>
        </div>
    </>
  )
};

const UISelectionTab = ContextConnector(AppFrameContext,
  (v, act, props) => ({
    instances: v.pageInstances,
    activeInstance: v.activeInstance,
    activateFrame: (instanceName) => act.sendAction('switchPage', {instanceName})
  })
)(UISelectionTab_Base);

class SelectItem1 extends React.Component {
    selectStyleNight = theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            neutral0: '#181717',
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
            neutral0  : '#F8F9F9',
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
            <div className="nav-link col-sm-12 px-0 mx-0 py-3 text-white">
                <div className="col-md-12 bg-black-trading px-0 text-center">
                    <Select
                        className="f-12"
                        defaultValue={option[0]}
                        label="Single select"
                        options={option}
                        theme={cssmode == 'night' ? this.selectStyleNight : this.selectStyleLight}
                    />
                </div>
                <label className="col-md-12 f-11-center">11/03/2019 | 09.45 <span className="text-success"> Open</span></label>
            </div>
        );
    }
}

class SelectItem2 extends React.Component {
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
            neutral0  : '#F8F9F9',
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
            <div className="nav-link col-sm-12 px-0 mx-0 py-3 text-white">
                <div className="col-md-12 bg-black-trading px-0">
                    <Select
                        className="f-12"
                        defaultValue={options[0]}
                        label="Single select"
                        options={options}
                        theme={cssmode == 'night' ? this.selectStyleNight : this.selectStyleLight}
                    />
                </div>
                <label className="col-md-12 f-11-center text-success">6,453,98 +68.8 (+1.08%)</label>
            </div>
        );
    }
}

class InfoCash extends React.Component {
    render() {
        return (
            <div className="nav-link px-0 mx-0 pt-4 pb-0 text-white align-self-center">
                <UncontrolledDropdown setActiveFromChild className="align-self-center">
                    <DropdownToggle tag="a">
                        <Table size="sm" borderless className="text-white cursor-menu">
                            <thead></thead>
                            <tbody>
                            <tr className="f-12 text-center">
                                <td className="text-success"><i className="fa fa-square"></i></td>
                                <td>Cash Balance</td>
                                <td rowSpan="2" className="py-2"><i className="f-11-center text-gray-tradding oi oi-caret-bottom"></i></td>
                            </tr>
                            <tr className="f-16 text-primary">
                                <td colSpan="2" className="text-center">15,911,198</td>
                            </tr>
                            </tbody>
                        </Table>
                    </DropdownToggle>
                    <DropdownMenu className="menu-dropdown" left>
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left px-2">Cash Balance <div className="text-primary text-right">5,911,198</div> </DropdownItem>
                        <DropdownItem divider className="d-border" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left px-2">Buy Limit <div className="text-primary text-right">15,000,981</div> </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

class UserInfo extends React.Component {
    render() {
        return (
            <div className="nav-link px-0 mx-0 py-3 text-white">
                <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a">
                        <div className="cursor-menu py-2">
                            <img src={user_avatar} alt="User" className="img-avatar d-border mr-2"/><i className="f-11-center text-gray-tradding oi oi-caret-bottom"></i>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu className="menu-dropdown" right>
                        <DropdownItem header className="bg-gray-tradding text-white">
                            <table>
                                <thead></thead>
                                <tbody>
                                <tr><td className="f-18">Mr. John Du</td></tr>
                                <tr><td className="f-14">001-01-008538</td></tr>
                                <tr><td className="f-11">john.du@gmail.com</td></tr>
                                </tbody>
                            </table>
                        </DropdownItem>
                        <div className="row col-md-12">
                            <table>
                                <thead></thead>
                                <tbody>
                                <tr>
                                    <td><DropdownItem tag="a" href="#" className="item-hover text-white mr-1">Regular <br/> Account</DropdownItem></td>
                                    <td><DropdownItem tag="a" href="#" className="item-hover text-white ml-1" active>Margin <br/> Account</DropdownItem></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="oi oi-pie-chart"></i>&nbsp;&nbsp; Portofolio & Balance</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="fa fa-stopwatch"></i>&nbsp;&nbsp; Historical Trade List</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="ion ion-ios-cash"></i>&nbsp;&nbsp; Fund Transfer</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="fa fa-stopwatch"></i>&nbsp;&nbsp; Transaction History</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="fa fa-user-ninja"></i>&nbsp;&nbsp; Inquiry Of Account</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="ion ion-ios-lock"></i>&nbsp;&nbsp; Change Password/PIN</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="fa fa-cog"></i>&nbsp;&nbsp; Settings</DropdownItem>
                        <DropdownItem divider className="d-border py-0 my-0" />
                        <DropdownItem tag="a" href="#" className="item-hover text-white text-left"><i className="oi oi-power-standby"></i>&nbsp;&nbsp; Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default UISelectionTab;