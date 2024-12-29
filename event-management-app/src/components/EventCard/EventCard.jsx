import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const events = [
  {
    title: 'Tech Conference 2024',
    description: 'Join us for the latest in tech innovations.',
    date: '2024-03-15',
  },
  {
    title: 'Summer Music Fest',
    description: 'Experience the best music of the summer.',
    date: '2024-06-20',
  },
  {
    title: 'Sports Day',
    description: 'A day of fun and competition.',
    date: '2024-07-10',
  },
  // Add more events here
]

const EventCard = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to EventApp
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Discover and manage amazing events near you.
        </Typography>
        <Button variant="contained" color="primary" href="/createevents">Create New Event</Button>
      </Box>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                  Date: {event.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  )
}

export default EventCard