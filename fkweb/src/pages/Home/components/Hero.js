import React from 'react';
import ReactDOM from 'react-dom';

class Hero extends React.Component{

    render(){
        return(
            <div id="fk-hero" className="clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-wrap">
                                <form action="" id="fk-search-form" className="form-inline">
                                    <div className="form-group mx-sm-3 mb-2">
                                        <label for="location">Location: </label>
                                        <input type="text" name="location" className="form-control" id="location" />
                                    </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <label for="pickup">Pickup: </label>
                                        <input type="text" name="location" className="form-control" id="pickup" />
                                    </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <label for="dropoff">Dropoff: </label>
                                        <input type="text" name="dropoff" className="form-control" id="dropoff" />
                                    </div>
                                    <button type="text" name="submit" className="btn btn-primary mx-sm-3 mb-2" id="submit">Search Bike</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Hero