import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TicketGuide = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Ticket Booking Guide</h2>
      <div className="space-y-4">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">How to Book a Ticket?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Visit the "Start Booking" section on our homepage. Enter your details, choose a train, and proceed with payment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">How to Cancel a Ticket?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Go to "My Bookings", select the ticket, and click "Cancel Ticket". Follow the steps for a successful cancellation.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default TicketGuide;
