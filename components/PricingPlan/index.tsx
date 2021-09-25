import { PricingPeriodType } from "../../interfaces";
import { Button, Paper, Typography } from "@mui/material";
import styles from "./index.module.scss";

export interface PricingPlanProps {
  title: string;
  priceMonthly: string;
  priceYearly: string;
  pricingPeriod?: PricingPeriodType;
  hidePricingPeriod?: boolean;
  bulletPoints: string[];
  enhance?: boolean;
  backgroundFile?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  priceMonthly,
  priceYearly,
  pricingPeriod,
  hidePricingPeriod,
  bulletPoints,
  enhance,
}) => {
  return (
    <Paper
      className={`${styles.wrapper} ${
        enhance ? styles.wrapperEnhanced : styles.wrapperBasic
      }`}
    >
      {enhance && (
        <Button
          variant="outlined"
          className={`${styles.button} ${styles.bestValueButton}`}
        >
          Best Value
        </Button>
      )}
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className={styles.title}
      >
        {title}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        {`
          ${pricingPeriod === "month" ? priceMonthly : priceYearly}${
          hidePricingPeriod ? "" : "/month"
        }
        `}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        gutterBottom
        className={styles.desktopOnly}
      >
        <ul className={styles.bulletPointsWrapper}>
          {bulletPoints.map((point, i) => (
            <li key={`${title}-bullet-${i}`} className={styles.bulletPoint}>
              {point}
            </li>
          ))}
        </ul>
      </Typography>
      <Button
        variant="outlined"
        className={`
          ${styles.button} ${
          enhance
            ? styles.getStartedButtonEnhanced
            : styles.getStartedButtonBasic
        }
        `}
      >
        Get Started
      </Button>
    </Paper>
  );
};
export default PricingPlan;
