import React from 'react';
import Auxt from '../../hoc/Auxt';
import classes from './Layout.css'; 

const layout = (props) => (
    <Auxt>
        <div>Toolbar, SideWar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxt>
)

export default layout;