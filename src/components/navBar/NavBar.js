import React from 'react';
// import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './NavBar.module.css';




export const NavBar = () => {
    


    return (
        <div className={styles.barWrapper}>
            <NavLink className=
            {({ isActive, isPending }) => 
                isPending ? styles.button : isActive ? `${styles.button} ${styles.activeButton}` : styles.button} to={"about"}> About </NavLink>
            {/* <NavLink className=
            {({ isActive, isPending }) => 
                isPending ? styles.button : isActive ? `${styles.button} ${styles.activeButton}` : styles.button} to={"projects"}> Projects </NavLink> */}
            <NavLink className=
            {({ isActive, isPending }) => 
                isPending ? styles.button : isActive ? `${styles.button} ${styles.activeButton}` : styles.button} to={"showcase"}> Showcase </NavLink>
        </div>
    )

}