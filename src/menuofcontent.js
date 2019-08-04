import React from 'react';
import { ContextConnector } from './appcontext.js';
import { AppFrameContext } from './appframe.js';

import './App.css';

const MenuOfContent_Base = (props) => {
    // expected in props:
    // instances: array of pageInstance object
    // activeInstance: current pageInstance object
    // activateFrame: (instanceName) => {} hook to activate selected frame ID
    // linkTitles: object, mapping instanceName to link title
    return (
        /*<Menu pointing secondary>*/
        <div className="align-self-center ui-menu-padding">
            <ul className="ul-menu">
                {
                    Object.keys(props.instances).map((k) => {
                        var e = props.instances[k];
                        return (
                            <li key={e.instanceName}
                                name={e.instanceName}
                                active={props.activeInstance === e}
                                className={e.instanceName.search('Table') >= 0 ? "li-menu-table" : "li-menu"}
                                onClick={
                                    () => props.activateFrame(e.instanceName)
                                }
                            >
                                <a className={
                                    props.activeInstance === e ?
                                        e.instanceName.search('Table') >= 0 ?
                                            'li-table-active click-pointer text-center li-menu-a py-1' :
                                            'li-active click-pointer text-center li-menu-a py-1'
                                    : 'click-pointer text-center li-menu-a py-1'

                                }>
                                    <span className="f-12">&nbsp;
                                        {
                                            props.linkTitles[e.instanceName] || e.title
                                        }
                                    </span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
};

const MenuOfContent = ContextConnector(AppFrameContext,
    (v,act,props) => ({
        instances: v.pageInstances,
        activeInstance: v.activeInstance,
        activateFrame: (instanceName) => act.sendAction('switchPage', {instanceName})
    })
)(MenuOfContent_Base);

export default MenuOfContent;