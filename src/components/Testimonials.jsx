import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Excellent service! Booking tickets was seamless, and the real-time updates are very helpful.',
  },
  {
    name: 'Jane Smith',
    feedback: 'Amazing platform! It made my travel experience so much better and hassle-free.',
  },
  {
    name: 'Michael Lee',
    feedback: 'Great user interface and very easy to navigate. Highly recommend it for frequent travelers.',
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
      <Carousel
        animation="fade"
        navButtonsAlwaysVisible
        autoPlay
        interval={4000}
        indicators={false}
        sx={{ width: '100%', maxWidth: '700px' }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            className="flex justify-center p-6"
            sx={{
              backgroundColor: '#1E40AF', // Tailwind's blue-800 equivalent
              borderRadius: '10px',
              color: '#ffffff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                borderRadius: '8px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                maxWidth: '650px',
                width: '100%',
              }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body1" style={{ fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.6' }}>
                "{testimonial.feedback}"
              </Typography>
            </Paper>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
