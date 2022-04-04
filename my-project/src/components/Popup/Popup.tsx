import { useEffect, useState } from 'react'

import { PopupProps } from '../../types/components/popup';

import classes from './Popup.module.scss';

const Popup: React.FC<PopupProps>= ({setActive, children}: PopupProps) => {
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
