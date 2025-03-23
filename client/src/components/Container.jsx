import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./AppBar";
import AccordionUsage from "./Accordion";
import FormPropsTextFields from "./Form";
import BasicTable from "./Table";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ height: "100vh" }}>
          <AccordionUsage />
          <FormPropsTextFields />
          <BasicTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}
