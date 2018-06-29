import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='jumbotron bg-white'>
                        <h1 className='h1'>
                            Search Articles
                        </h1>
                        <hr className="my-4" />
                        <form>
                            <div class="form-row">
                                <div class="col-7">
                                    <input type="text" class="form-control" placeholder="Topic" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Start Year" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="End Year" />
                                </div>
                            </div>
                        </form>
                        <hr className='my-4' />
                        <a class="btn btn-outline-secondary btn-md" href="#" role="button">Search</a>
                    </div>
                </div>                
            </React.Fragment>
        );
    }
                    
}
                
export default Home;