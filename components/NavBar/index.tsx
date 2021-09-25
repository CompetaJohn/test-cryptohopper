import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './index.module.scss';
import MenuMainMobile from "../MenuMainMobile";
import Logo from "../Logo";
import MenuUserMobile from "../MenuUserMobile";
import MenuMainDesktop from "../MenuMainDesktop";
import MenuUserDesktop from "../MenuUserDesktop";

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