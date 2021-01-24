import React, { useState } from 'react';
import "./Switch.css";  // Import CSS file


function Switch() {

    const [on, setOn] = useState(false);

    const cssClass = on ? "Switch Switch--on" : "Switch Switch--off";

    return (
        <div className={cssClass}>
            <h3>Switch</h3>
            <p>{on ? "On" : "Off"}</p>
            <p>
                {on === false ?
                    <button type="button" onClick={() => setOn(true)}>
                        On
                    </button> :
                    <button type="button" onClick={() => setOn(false)}>
                        Off
                    </button>}
            </p>
        </div>
    );
}

export default Switch;
