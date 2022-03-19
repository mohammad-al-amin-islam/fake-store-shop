import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h1>Logo</h1>
                    </div>
                    <div className="col-md-10">
                        <ul className='all-list d-flex justify-content-end fw-bold'>
                            <li className='m-2 p-2'>Home</li>
                            <li className='m-2 p-2'>Contact</li>
                            <li className='m-2 p-2'>Cart</li>
                            <li className='m-2 p-2'>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;