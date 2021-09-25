import React from "react";
import { Typography } from "@mui/material";
import styles from "./index.module.scss";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom
        className={styles.pageSubtitle}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default PageHeader;