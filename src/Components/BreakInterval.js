import React from 'react';

function BreakInterval(props) {
    return (
        <section className="interval-container">
            <button>Down</button>
            <p>{props.breakInterval}</p>
            <button>Up</button>
        </section>
    )
}

export default BreakInterval;