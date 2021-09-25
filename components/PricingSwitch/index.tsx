import React, {Dispatch, SetStateAction} from "react";
import {PricingPeriodType} from "../../interfaces";
import styles from './index.module.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface PricingSwitchProps {
  updateValue: Dispatch<SetStateAction<PricingPeriodType>>
  value: PricingPeriodType
}

const PricingSwitch:React.FC<PricingSwitchProps> = ({updateValue, value}) => {
  const handleChange = () => {
    const updatedValue = (value === 'year')? 'month' : 'year';
    updateValue(updatedValue);
  }
  return <>
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      className={styles.toggleButtonGroup}
    >
      <ToggleButton className={`${styles.toggleButton} ${value==='year'? styles.selected : ''}`} value="year">Annually</ToggleButton>
      <ToggleButton className={`${styles.toggleButton} ${value==='month'? styles.selected : ''}`} value="month">Monthly</ToggleButton>
    </ToggleButtonGroup>
    );
    </>
}
export default PricingSwitch