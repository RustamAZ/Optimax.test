import { useEffect, useState } from 'react'
import classes from './Popup.module.scss';

const Popup = ({setActive, children}) => {
    const [popupActive, setPopupActive] = useState(false);

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return document.body.classList.remove('no-scroll');
    }, [])

    return (
            <div className={classes.container}>
                <div onClick={() => {setActive(false)}} className={classes.overlay}>
                </div>
                
                {children}
            </div>
        )
}

export default Popup;