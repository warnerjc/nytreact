import React, { Component } from 'react';
import $ from 'axios';

class Home extends Component {

    state = {
        articles: [],
        topic: '',
        startYear: '',
        endYear: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchClick = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {

            // queryURL is the url we'll use to query the API
            let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
            // Begin building an object to contain our API call's query parameters
            // Set the API key
            // queryURL = queryURL + `api-key=40a0c8bc34494063aaf22652d2483e34`;
            // Grab text the user typed into the search input, add to the queryURL
            // queryURL = queryURL + `?q=${this.state.topic}?begin_date=${this.state.startYear}0101?end_date=${this.state.endYear}1231`;
        
            // Logging the URL so we have access to it for troubleshooting
            console.log(queryURL + 'api-key=40a0c8bc34494063aaf22652d2483e34' + `?q=${this.state.topic}` + `?begin_date=${this.state.startYear}`);

            $.get(queryURL + 'api-key=40a0c8bc34494063aaf22652d2483e34')
                .then( response => {
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                });
            }
    };

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
                                <a className='btn btn-outline-secondary btn-md' href='#' role='button' onClick={this.handleSearchClick}>Search</a>
                            </div>
                        </div>
                        
                        <hr className='my-4' />
                        <form>
                            <div className='form-row'>
                                <div className='col-7'>
                                    <input type='text' className='form-control' name='topic' onChange={this.handleInputChange} placeholder='Topic' />
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' name='startYear' onChange={this.handleInputChange} placeholder='Start Year' />
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' name='endYear' onChange={this.handleInputChange} placeholder='End Year' />
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