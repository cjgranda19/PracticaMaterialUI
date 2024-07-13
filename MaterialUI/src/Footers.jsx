import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2', height: '300px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="AssignmentTurnedInTwoToneIcon"
            sx={{ mr: 2 }}
          >
            <AssignmentTurnedInTwoToneIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Footer Brand
          </Typography>
          <Button color="inherit">Facebook</Button><FacebookIcon />
          <Button color="inherit">Instagram</Button><InstagramIcon />
          <Button color="inherit">WhatsApp</Button><WhatsAppIcon />
        </Toolbar>
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Universidad de las Fuerzas Armadas ESPE" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="0997884812" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Más Info" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="mvmaldonado3@espe.edu.ec" />
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}