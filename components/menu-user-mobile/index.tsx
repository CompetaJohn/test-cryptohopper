import IconButton from "@mui/material/IconButton";
import styles from "./index.module.scss";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


const MenuUserMobile = () => {
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
        aria-label="account of current user"
        aria-controls="menu-user-mobile"
        aria-haspopup="true"
        onClick={handleMenu}
        className={styles.userMenu}
      >
        <AccountCircle/>
      </IconButton>
      <Menu
        id="menu-user-mobile"
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
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Signup</MenuItem>
      </Menu>
    </>
  )
}
export default MenuUserMobile;