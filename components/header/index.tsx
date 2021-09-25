import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './index.module.scss';
import MenuMainMobile from "../menu-main-mobile";
import Logo from "../logo";
import MenuUserMobile from "../menu-user-mobile";

const Header = () => {

  return (
    <AppBar position="sticky" style={{backgroundColor: 'white'}}>
      <Toolbar className={styles.toolbar}>
        <MenuMainMobile/>
        <Logo/>
        <MenuUserMobile/>
      </Toolbar>
    </AppBar>
  )
}
export default Header;