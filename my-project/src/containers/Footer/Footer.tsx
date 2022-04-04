import React from 'react';
import classes from './Footer.module.scss'

const Footer: React.FC = function() {
    return (
        <footer className={classes.footer}>
            <span>© 2021 Copyright</span>
        </footer>
    )
};

export default Footer;