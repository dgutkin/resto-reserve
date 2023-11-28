
import React, {useState} from 'react';

function ReservationForm({show}) {

    return (
        <div>
            {show && 
                <p>FORM</p>}
        </div>
    )

}

export default ReservationForm;