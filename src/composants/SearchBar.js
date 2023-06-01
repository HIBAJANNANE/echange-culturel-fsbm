import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <TextField
        id="search"
        label="Recherche"
        variant="outlined"
        size="small"
        sx={{
          borderRadius: '10px',
          width: '300px' // Modifier la largeur de la barre de recherche
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
