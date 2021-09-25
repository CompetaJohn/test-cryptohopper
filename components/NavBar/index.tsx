import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "./index.module.scss";
import MenuMainMobile from "../MenuMainMobile";
import Logo from "../Logo";
import MenuUserMobile from "../MenuUserMobile";
import MenuMainDesktop from "../MenuMainDesktop";
import MenuUserDesktop from "../MenuUserDesktop";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <MenuMainMobile />
          <Box sx={{ flexGrow: 1 }} className={styles.hideOnDesktop} />
          <Logo />
          <Box sx={{ flexGrow: 1 }} className={styles.desktopOnly} />
          <MenuMainDesktop />
          <Box sx={{ flexGrow: 1 }} />
          <MenuUserMobile />
          <MenuUserDesktop />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
