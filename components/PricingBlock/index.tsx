import React from "react";
import styles from './index.module.scss';
import {PricingPeriodType} from "../../interfaces";
import PricingPlan from "../PricingPlan";
interface PricingBlockProps {
  pricingPeriod: PricingPeriodType
}

const PricingBlock: React.FC<PricingBlockProps> = ({pricingPeriod}) => {
  return (
    <div className={styles.wrapper}>
      <PricingPlan
        title={'Pioneer'}
        price={'Free'}
        bulletPoints={['20 positions', 'portfolio management', 'manual trading', 'all available exchanges']}
      />
      <PricingPlan
        title={'Explorer'}
        price={'$19.00'}
        pricingPeriod={pricingPeriod}
        bulletPoints={['80 positions', 'portfolio management', 'manual trading', 'all available exchanges']}
      />
      <PricingPlan
        title={'Adventurer'}
        price={'$49.00'}
        pricingPeriod={pricingPeriod}
        bulletPoints={['200 positions', 'portfolio management', 'manual trading', 'all available exchanges']}
      />
      <PricingPlan
        title={'Hero'}
        price={'$99.00'}
        pricingPeriod={pricingPeriod}
        bulletPoints={['500 positions', 'portfolio management', 'manual trading', 'all coin signals', 'market arbitrage', 'algorithm intelligence']}
      />
    </div>
  )
}
export default PricingBlock