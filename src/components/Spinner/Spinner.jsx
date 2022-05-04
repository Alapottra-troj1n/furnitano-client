import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className=" flex justify-center items-center">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;