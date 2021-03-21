import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div style={{ display: "flex", height: '50vh'}}>
        <img style={{margin: "auto"}} src={preloader}/>
    </div>
}

export default Preloader;