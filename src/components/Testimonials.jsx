import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Excellent service! Booking tickets was seamless, and the real-time updates are very helpful.",
  },
  {
    name: "Jane Smith",
    feedback:
      "Amazing platform! It made my travel experience so much better and hassle-free.",
  },
  {
    name: "Michael Lee",
    feedback:
      "Great user interface and very easy to navigate. Highly recommend it for frequent travelers.",
  },
  {
    name: "Ali Khan",
    feedback:
      "A game-changer for railway travel in Pakistan! The booking process is super simple, and everything works perfectly.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">
          What Our Users Say
        </h2>
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          autoPlay
          interval={5000}
          indicators={false}
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              className="flex justify-center"
              sx={{
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#1E40AF",
                color: "#ffffff",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  maxWidth: "700px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  "{testimonial.feedback}"
                </Typography>
              </Paper>
            </Box>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
