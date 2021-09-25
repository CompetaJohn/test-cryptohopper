import styles from "./index.module.scss";
import React from "react";


const Logo = () => (
  <a href={'/'}>
    <img className={styles.logo} src={'/logo-light.svg'} alt={'cryptohopper-logo-light'}
         aria-label={'cryptohopper-logo-light'}/>
  </a>
)
export default Logo