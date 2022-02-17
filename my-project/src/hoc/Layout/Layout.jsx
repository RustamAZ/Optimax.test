import classes from './Layout.module.scss';

import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Grid from '../Grid/Grid';


const Layout = function(props) {
    return (
        <div className={classes.layout}>
            <Header />
            <div className={classes.wrapper}>
                <main>
                    <Grid>
                        {props.children}
                    </Grid>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Layout;