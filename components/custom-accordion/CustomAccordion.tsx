import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: '8px',
  borderRadius: theme.spacing(1),
  //   border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  }
  // '&:before': {
  //   display: 'none'
  // }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  svg: {
    transition: 'all 150ms ease'
  },
  backgroundColor: 'transparent',
  flexDirection: 'row-reverse',
  '&.Mui-expanded svg': {
    transform: 'rotate(45deg)',
    color: theme.palette.primary.main,
    '& .MuiAccordionSummary-content': {
      color: theme.palette.primary.main
    }
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  color: theme.palette.text.secondary
}));

export type IAccordion = {
  title: string;
  content: string;
};

type Props = {
  data: IAccordion[];
};

const CustomAccordion: React.FC<Props> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {data?.map((d, i) => {
        const expKey = `panel-${i}`;
        return (
          <Accordion
            key={expKey + d.title}
            expanded={expanded === expKey}
            onChange={handleChange(expKey)}
          >
            <AccordionSummary>
              <Typography
                color={expanded === expKey ? 'primary.main' : 'inherit'}
                variant="h6"
                fontWeight={600}
              >
                {d.title}
              </Typography>
              <AddIcon />
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{d.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
