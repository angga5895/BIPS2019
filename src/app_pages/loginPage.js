import React from 'react';

// internal framework libraries
import { WSConnectionAction } from '../appnetwork.js';
import { AppFrameAction } from '../appframe.js';
import { ContextConnector } from '../appcontext.js';
import { BIPSAppContext } from '../AppData.js';

import { CommentActions } from 'semantic-ui-react';

class DisclaimerModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <div className="text-white">
                    <p className="text-justify px-5 mx-5 py-1">
                        Proses akses terhadap efek, eksekusi perdagangan serta kinerja dan respon dari system
                        trading bisa terpengaruh, termasuk timbulnya keterlambatan dan kegagalan, oleh volatilitas,
                        volume perdagangan efek tinggi, fluktuasi pasar lainnya, tidak likuidnya suatu efek,
                        resiko dan kondisi pasar lainnya, keterlambatan informasi, kesalahan system, dan perangkat
                        lunak, permasalahan dengan system internet yang terkait dengan volume dan kepasitas
                        lalu - lintas internet, dan faktor - faktor lainnya. Salah satu atau lebih dari
                        faktor - faktor tersebut bisa terjadi sebelum atau sesudah transaksi di-input di dalam system,
                        sehingga menyebabkan keterlambatan atau kegagalan permasalahan order, perubahan order,
                        eksekusi transaksi dan/atau salah satu dari tindakan tersebut di atas. Anda menyatakan
                        telah mengetahui resiko - resiko tersebut, dan membebaskan Bahana Sekuritas dari tanggungjawab
                        terhadap hal tersebut.
                    </p>
                    <p className="text-justify px-5 mx-5 py-1">
                        Account access, trade execution and system response and performance may adversely affected,
                        including delays and failures, as a result of market volatility, high share volume,
                        other market fluctuations, illiquidity, other market conditions and risks, quote delays,
                        system and software errors, Internet system problems relating to Internet traffic volume
                        and capacity or other causes, and other factors. One or more of these factors may occur
                        before or after you place a trade, resulting in delayed or failed order placement, order
                        cancellation, trade execution and/or acknowledgement of any of those actions. Solely you
                        assume those risks, and give indemnity to PT. Bahana Securities.
                    </p>
                    <div className="text-center">
                            <button className="btn btn-primary col-sm-3" onClick={this.closeClick}>Close</button>
                    </div>
                </div>
            </>
        );
    }
}

class ForgotModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <label className="col-sm-12 px-5 py-2 col-form-label text-gray-tradding">Forgot Password</label>
                <div className="text-white">
                    <div className="form-group">
                        <label className="col-sm-12 px-5 py-2 col-form-label">Enter your email address and we'll
                        send link to reset your password
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
                            <span className="click-pointer btn btn-link text-primary" onClick={this.closeClick}> Back to Login Page</span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
}

class SignUpModal extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
            </>
        );
    }
}

class LoginPage extends React.PureComponent {
    buttonClickDisclaimer = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center">Disclaimer</div>,
            closeIcon: false,
            contentClass: DisclaimerModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickForgot = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h1 className="text-center">BIPS</h1></div>,
            closeIcon: false,
            size : "mini",
            contentClass: ForgotModal,
            onClose: (result) => {console.log('Modal 2 result = ', result)}
        })
    }

    buttonClickSignUp = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-danger font-weight-bold text-center">Sign Up Belum Tersedia</div>,
            closeIcon: true,
            size : "mini",
            contentClass: SignUpModal,
            onClose: (result) => {console.log('Modal 3 result = ', result)}
        })
    }

    buttonClickLogin = () => {
        var r = this.refs;
        var p = this.props;

        p.onLogin(r.userID.value, r.password.value);
        // console.log(r)
    }

    render () {
        return (
            <div className="bg-black-trading">
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction  ref="wsAction" />
                <main>
                    <div className="container-fluid p-login">
                        <div className="card card-body bg-black-trading d-border-active">
                            <h1 className="text-center">BIPS</h1>
                            <div className="form-group">
                                <label className="col-sm-12 px-5 py-2 col-form-label">Username or Email</label>
                                <div className="col-sm-12 px-5 py-2">
                                    <input type="text" ref="userID" className="text-white input-login col-sm-12"/>
                                </div>
                            </div>
                            <div className="form-group mb-0">
                                <label className="col-sm-12 px-5 py-2 col-form-label">Password</label>
                                <div className="col-sm-12 px-5 py-0">
                                    <input type="password" ref="password" className="text-white input-login col-sm-12"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-12 px-5 py-2 col-form-label">Forgot your password?
                                    <span className="click-pointer btn btn-link text-primary" onClick={this.buttonClickForgot}> Click here</span>
                                </label>
                            </div>

                            <div className="form-group py-0 mb-0">
                                <div className="justify-content-center align-items-center d-flex py-0 px-5">
                                    <button type="submit" onClick={this.buttonClickLogin} className="btn btn-primary form-control py-0">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="form-group py-0 my-0 text-right">
                                <label className="py-0 px-5 col-form-label">
                                    <label className="click-pointer px-0 btn btn-link" onClick={this.buttonClickDisclaimer}>
                                        Disclaimer
                                    </label>
                                </label>
                            </div>

                            <div className="form-group py-0 my-0 text-center">
                                <label className="col-sm-12 px-5 py-2 col-form-label">New BIPS?
                                    <span className="click-pointer btn btn-link text-primary" onClick={this.buttonClickSignUp}> Sign Up</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default LoginPage;
