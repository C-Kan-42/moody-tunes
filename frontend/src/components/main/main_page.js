import React from "react";
import './main_page.scss';

class MainPage extends React.Component {
    render() {
        return (
        <div className="splash">
            <div className="splash-banner"/>
            <iframe src="https://open.spotify.com/embed/track/3YT2vdLbvfcjfCiNR4DsKT" width="400" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        );
    }
}
export default MainPage;
