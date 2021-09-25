import React from "react";
import { Button } from "@mui/material";
import styles from "./index.module.scss";

const MenuUserDesktop = () => {
  return (
    <div>
      <Button className={styles.menuItem}>Login</Button>
      <Button className={styles.menuItem}>Signup</Button>
    </div>
  );
};

export default MenuUserDesktop;