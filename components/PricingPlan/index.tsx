import {PricingPeriodType} from "../../interfaces";
import {Button, Paper, Typography} from "@mui/material";
import styles from './index.module.scss';

interface PricingPlanProps {
  title: string;
  price: string;
  pricingPeriod?: PricingPeriodType;
  bulletPoints: string[];
  backgroundFile?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({title, price, pricingPeriod, bulletPoints}) => {
  return (
    <Paper className={styles.wrapper}>
      <Typography variant="h5" component="div" gutterBottom className={styles.title}>
        {title}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        {price}
        {pricingPeriod? `/${pricingPeriod}` : ''}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul className={styles.bulletPointsWrapper}>
          {bulletPoints.map((point, i) => (
            <li
              key={`${title}-bullet-${i}`}
              className={styles.bulletPoint}
            >
              {point}
            </li>
          ))
          }
        </ul>
      </Typography>
      <Button variant="outlined" className={styles.button}>Get Started</Button>
    </Paper>
  )
}
export default PricingPlan