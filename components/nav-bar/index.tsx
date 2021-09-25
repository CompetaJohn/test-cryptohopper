import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './index.module.scss';
import MenuMainMobile from "../menu-main-mobile";
import Logo from "../logo";
import MenuUserMobile from "../menu-user-mobile";
import MenuMainDesktop from "../menu-main-desktop";
import MenuUserDesktop from "../menu-user-desktop";

const NavBar = () => {
  return (
    <AppBar position="sticky" style={{backgroundColor: 'white'}}>
      <Toolbar className={styles.toolbar}>
        <MenuMainMobile/>
        <Logo/>
        <MenuMainDesktop/>
        <MenuUserMobile/>
        <MenuUserDesktop/>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;