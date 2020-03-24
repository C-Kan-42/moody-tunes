import React from "react";
import './invalid_route.scss';

const InvalidRoute = ({ location }) => (
    <div className="invalid-background">
        <h3 className="invalid-header"> 404 - Page Not Found. Sorry!</h3>
        <h2 className="invalid-subheader">(No match for <code>{location.pathname})</code></h2> 
    </div>
)

export default InvalidRoute;