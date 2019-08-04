import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { AppFrameAction } from '../appframe.js';

class ResetPasswordPage extends React.PureComponent {

    render () {
        return (
            <div className="bg-black-trading">
                <AppFrameAction ref="frameAction" />
                <main>
                    <div className="container-fluid p-login">
                        <div className="card card-body bg-black-trading d-border-active">
                            <h1 className="text-center">BIPS</h1>
                            <label className="col-sm-12 px-5 py-4 col-form-label text-gray-tradding">Reset Password</label>
                            <div className="form-group">
                                <label className="col-sm-12 px-5 py-2 col-form-label">New Password</label>
                                <div className="col-sm-12 px-5 py-2">
                                    <input type="password" className="text-white input-login col-sm-12"/>
                                </div>
                            </div>

                            <div className="form-group mb-0">
                                <label className="col-sm-12 px-5 py-2 col-form-label">Confirm New Password</label>
                                <div className="col-sm-12 px-5 py-0">
                                    <input type="password" className="text-white input-login col-sm-12"/>
                                </div>
                            </div>

                            <div className="form-group py-5 mb-0">
                                <div className="justify-content-center align-items-center d-flex py-0 px-5">
                                    <button type="submit" className="btn btn-primary form-control py-0">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ResetPasswordPage;
