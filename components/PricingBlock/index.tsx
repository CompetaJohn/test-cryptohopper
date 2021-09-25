import React from "react";
import styles from "./index.module.scss";
import { PricingPeriodType } from "../../interfaces";
import PricingPlan, { PricingPlanProps } from "../PricingPlan";

interface PricingBlockProps {
  pricingPeriod: PricingPeriodType;
  pricingPlans: PricingPlanProps[];
}

const PricingBlock: React.FC<PricingBlockProps> = ({
  pricingPeriod,
  pricingPlans,
}) => {
  return (
    <div className={styles.pricingBlockWrapper}>
      {pricingPlans.map((plan) => (
        <div key={`${plan}-pricingBlock`}>
          <PricingPlan
            title={plan.title}
            priceMonthly={plan.priceMonthly}
            priceYearly={plan.priceYearly}
            pricingPeriod={pricingPeriod}
            bulletPoints={plan.bulletPoints}
            hidePricingPeriod={!!plan.hidePricingPeriod}
            enhance={plan.enhance === true}
            flavourText={plan.flavourText ? plan.flavourText : ""}
          />
        </div>
      ))}
    </div>
  );
};
export default PricingBlock;
