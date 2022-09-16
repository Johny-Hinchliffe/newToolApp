import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Box, Typography} from '@mui/material';

export default function Loader({text}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
       {text ? <Typography textAlign="center" variant="h6" sx={{mb: 3}}>{text}</Typography> : null}
        
      <CircularProgress color='primary' />
    </Box>
  );
}
