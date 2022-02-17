import classes from './Home.module.scss';

const Home = function() {
    return (
        <>
            <h1 className={classes.HomeTitle}>HOME</h1>
            <p className={classes.HomeDesc}>
                React dl education
            </p>
        </>
    )
}

export default Home;