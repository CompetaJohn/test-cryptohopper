import React from "react";
import {Button} from "@mui/material";
import styles from "./index.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuMainDesktop = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.menuItem}>Features <KeyboardArrowDownIcon/></Button>
      <Button className={styles.menuItem}>Charts</Button>
      <Button className={styles.menuItem}>Pricing</Button>
      <Button className={styles.menuItem}>Marketplace</Button>
      <Button className={styles.menuItem}>Learn</Button>
      <Button className={styles.menuItem}>Company</Button>
    </div>
  )
}

export default MenuMainDesktop