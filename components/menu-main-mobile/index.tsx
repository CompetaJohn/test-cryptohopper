import React from "react";
import IconButton from "@mui/material/IconButton";
import styles from "./index.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MenuMainMobile = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleMenu = (event: React.BaseSyntheticEvent) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu-main-mobile"
        sx={{mr: 2}}
        onClick={handleMenu}
        className={styles.iconButton}
      >
        <MenuIcon/>
      </IconButton>
      <Menu
        id="menu-main-mobile"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={styles.menu}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={handleClose}>Charts</MenuItem>
        <MenuItem onClick={handleClose}>Pricing</MenuItem>
        <MenuItem onClick={handleClose}>Marketplace</MenuItem>
        <MenuItem onClick={handleClose}>Learn</MenuItem>
        <MenuItem onClick={handleClose}>Company</MenuItem>
      </Menu>
    </>
  )
}


export default MenuMainMobile