import { Container, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#68f9fa',
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" color="error" gutterBottom>
        404 - Not Found
      </Typography>
      <Button component={Link} to={'/'} variant="contained" color="primary">
        Go Back Home
      </Button>
    </Container>
  );
}

export default NotFound;
