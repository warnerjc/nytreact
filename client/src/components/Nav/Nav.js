import React from 'react';
import './Nav.css';

const Nav = () => (

    <header className='container top-sticky'>
            <div className='row'>
                <div className='col'>
                    <div className='navbar navbar-light bg-white'>
                        <a className='navbar-brand' href='/'>
                            New York Times Scrubber
                        </a>
                    </div>
                </div>
                <div className='col'>
                    <div className='navbar navbar-light bg-white justify-content-end'>
                        <a className='navbar-brand' href='/saved'>
                            Saved Articles
                        </a>
                    </div>                
                </div>                
            </div>
            <div className='row'>
                <div className='col'>
                    <hr className='my-4' />
                </div>
            </div>        
    </header>

);

export default Nav;