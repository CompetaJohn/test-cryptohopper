import { PricingPeriodType } from "../../interfaces";
import { Button, Paper, Typography } from "@mui/material";
import styles from "./index.module.scss";
import image from "../../public/price-plan-footers/1.png";
export interface PricingPlanProps {
  title: string;
  priceMonthly: string;
  priceYearly: string;
  pricingPeriod?: PricingPeriodType;
  hidePricingPeriod?: boolean;
  bulletPoints: string[];
  enhance?: boolean;
  backgroundFile?: string;
  flavourText?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  priceMonthly,
  priceYearly,
  pricingPeriod,
  hidePricingPeriod,
  bulletPoints,
  enhance,
  flavourText,
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
        variant="body2"
        className={`${styles.flavourText} ${styles.hideOnDesktop}`}
      >
        {flavourText}
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
      <Typography
        variant="body2"
        className={`${styles.flavourText} ${styles.desktopOnly}`}
      >
        {flavourText}
      </Typography>
    </Paper>
  );
};
export default PricingPlan;
