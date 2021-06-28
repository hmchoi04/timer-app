import React from 'react';

function SessionLength(props) {
    return (
        <section>
            <h4>Session Length</h4>
            <section class="interval-container">
                <button>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button>Up</button>
            </section>
        </section>
    )
}

export default SessionLength;