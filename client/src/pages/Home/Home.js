import React, { Component } from 'react';

class Home extends Component {



    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='jumbotron bg-white'>
                        <div className='row'>
                            <div className='col'>
                                <h1 className='h3'>
                                    Search Articles
                                </h1>
                            </div>
                            <div className='col text-right'>
                                <a class="btn btn-outline-secondary btn-md" href="#" role="button" onClick={this.handleSearchClick}>Search</a>
                            </div>
                        </div>
                        
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
                    </div>
                </div>                
            </React.Fragment>
        );
    }
                    
}
                
export default Home;