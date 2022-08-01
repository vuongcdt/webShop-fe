import { useState, useEffect } from 'react';

const AlertNotification = ({alertInfor}) => {

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(false);
        setTimeout(() => {
            setDisplay(true);
        },alertInfor.displayTime)
    }, [alertInfor])

    return <div hidden={display} className={`position-fixed top-0 end-0 mt-3 me-3 alert ${alertInfor.result ? 'alert-success' : 'alert-danger'}`} style={{zIndex:'999'}}>
        {alertInfor.text}
    </div>
}

export default AlertNotification;