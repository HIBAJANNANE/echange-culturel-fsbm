import * as React from 'react';
import { NavLink} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SearchBar from '../composants/SearchBar';
import MyGrid from '../composants/MyGrid';
import Button from '@mui/material-next/Button';
import { blue } from '@mui/material/colors';
//import PartenaireAcademique from './composants/PartenaireAcademique';
//import PartenaireIndustriel from './composants/PartenaireIndustriel';

const Main = styled('main')({
  flexGrow: 1,
  padding: theme => theme.spacing(3),
});

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main>
            
        <NavLink exact to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h6" color="inherit" noWrap>
            Mon application
        </Typography>
        </NavLink>
        <SearchBar />
        <h1>Boostez votre carrière</h1>
        <Button component={NavLink} to="/FsbmEnChiffre" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        Fsbm En Chiffre
        </Button>
        <Button component={NavLink} to="/partenaire-academique" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        Partenaire Académique
        </Button>
        <Button component={NavLink} to="/partenaire-industriel" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        Partenaire industriel
        </Button>
        <Button component={NavLink} to="/MasterMaroc" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        Masters Maroc
        </Button>
        <Button component={NavLink} to="/associations" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        associations
        </Button>
        <Button component={NavLink} to="/clubs" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
        Clubs
        </Button>
        <div>
        <MyGrid />
        <MyGrid />
        </div>
    
      </Main>
    </Box>
  );
}
