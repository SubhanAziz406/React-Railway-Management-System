import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TicketGuide = () => {
  const guideItems = [
    {
      question: "How to Book a Ticket?",
      answer:
        "Visit the 'Start Booking' section on our homepage. Enter your details, choose a train, and proceed with payment.",
    },
    {
      question: "How to Cancel a Ticket?",
      answer:
        "Go to 'My Bookings', select the ticket, and click 'Cancel Ticket'. Follow the steps for a successful cancellation.",
    },
    {
      question: "What Payment Methods Are Accepted?",
      answer:
        "We accept credit/debit cards, online banking, and mobile wallet payments for your convenience.",
    },
    {
      question: "How to View My Bookings?",
      answer:
        "Log in to your account and navigate to the 'My Bookings' section to view all your past and current tickets.",
    },
  ];

  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto p-8 bg-white rounded shadow-lg max-w-3xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
          Ticket Booking Guide
        </h2>
        <div className="space-y-4">
          {guideItems.map((item, index) => (
            <Accordion key={index} sx={{ backgroundColor: "#F3F4F6" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" className="font-bold">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-700">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketGuide;
