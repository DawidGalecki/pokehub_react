import React from 'react';
import classes from './Layout.module.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import spinner from '../../assets/spinner-logo.png';

const Layout = props => {
    return (
        <>
            <main className={classes.Content}>
                <div className={classes.LogoContainer}>
                    <a href={'/'}>
                        <img className={classes.Logo1} src={logo1} alt="logo" />
                        <img
                            className={classes.Spinning}
                            src={spinner}
                            alt="logo"
                        />
                        <img className={classes.Logo2} src={logo2} alt="logo" />
                    </a>
                </div>

                {props.children}
            </main>
        </>
    );
};

export default Layout;
