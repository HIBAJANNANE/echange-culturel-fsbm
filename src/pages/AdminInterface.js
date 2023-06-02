import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container } from '@material-ui/core';

// Composant principal de l'interface administrateur
function AdminInterface() {
  const [events, setEvents] = useState([]);
  const [newEventName, setNewEventName] = useState('');

  // Effectuer une requête API pour récupérer les événements existants
  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.log(error));
  }, []);

  // Gérer la soumission du formulaire pour créer un nouvel événement
  const handleNewEventSubmit = (event) => {
    event.preventDefault();

    fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newEventName })
    })
      .then(response => response.json())
      .then(data => {
        setEvents([...events, data]);
        setNewEventName('');
      })
      .catch(error => console.log(error));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Interface Administrateur
      </Typography>

      <form onSubmit={handleNewEventSubmit}>
        <TextField
          label="Nom de l'événement"
          value={newEventName}
          onChange={(e) => setNewEventName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Créer un nouvel événement
        </Button>
      </form>

      <Typography variant="h6" component="h2" align="center" style={{ marginTop: '2rem' }}>
        Événements existants :
      </Typography>

      {events.map((event) => (
        <Typography key={event.id} variant="body1" component="p">
          {event.name}
        </Typography>
      ))}
    </Container>
  );
}

export default AdminInterface;
