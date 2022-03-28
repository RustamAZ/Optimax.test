import React from "react";
import classes from './Error.module.scss';
import Button from "../../components/Button/Button";


const ErrorPage = function() {
    return (
        <section className={classes.error}>
            <h1 className={classes.title}>404</h1>
            <h2 className={classes.subTitle}>Page not founded</h2>
            <Button text="Go home page" link='/'/>
        </section>
    )
};

export default ErrorPage;