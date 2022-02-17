import React from "react";
import classes from './Error.module.scss';
import CustomLink from "../../components/CustomLink/CustomLink";

const ErrorPage = function() {
    return (
        <section className={classes.error}>
            <h1 className={classes.title}>404</h1>
            <h2 className={classes.subTitle}>Page not founded</h2>
            <CustomLink text="Go home page" link='/'/>
        </section>
    )
};

export default ErrorPage;