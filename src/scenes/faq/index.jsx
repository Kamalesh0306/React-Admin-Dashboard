import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the purpose of this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Provide a brief overview of the main goals and functionalities of your React Admin Dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What technologies does the dashboard use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            List the technologies, libraries, and frameworks that your dashboard relies on, such as React, Redux, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Is there a demo available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Provide a link to a live demo or screenshots to give users a preview of the dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the data source for the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Clarify where the dashboard retrieves its data from and if it supports various data sources like APIs, databases, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What kind of charts and visualizations are available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          List and briefly describe the types of charts and visualizations included in the dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;