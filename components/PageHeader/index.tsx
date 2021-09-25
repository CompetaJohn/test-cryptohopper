import {Typography} from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subtitle}) => {
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        {subtitle}
      </Typography>
    </>
  )
}

export default PageHeader