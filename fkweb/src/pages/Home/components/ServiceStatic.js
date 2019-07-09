import React from 'react';

class ServiceStatic extends React.Component{

    render(){
        return(
            <section className="py-6 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">One-of-a-kind vacation rentals </p>
                        <h2 className="mb-5">Booking with us is easy</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <svg className="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#destination-map-1"></use>
                                    </svg>
                                </div>
                                <h3 className="h5">Find the perfect rental</h3>
                                <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <svg className="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#pay-by-card-1"> </use>
                                    </svg>
                                </div>
                                <h3 className="h5">Book with confidence</h3>
                                <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <svg className="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#heart-1"> </use>
                                    </svg>
                                </div>
                                <h3 className="h5">Enjoy your vacation</h3>
                                <p className="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default ServiceStatic