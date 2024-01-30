import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { capitlizeFirstLetter } from '~helper/index';

interface MovieCardProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

function MovieCard({ Poster, Title, Type, Year, imdbID }: MovieCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          height: 315,
          width: 215,
          backgroundImage: `url("${Poster}")`,
          cursor: 'pointer',
        }}
      >
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            height: '100%',
            width: '100%',
            border: '5px solid white',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            '&:hover': {
              background: '#000A',
              border: '5px solid #1876D288',
            },
          }}
        >
          {hovered && (
            <>
              <Typography variant="h4" fontWeight="600">
                {Year}
              </Typography>
              <Typography variant="h4" fontWeight="600">
                {capitlizeFirstLetter(Type)}
              </Typography>
              <Button variant="contained">Details</Button>
            </>
          )}
        </Box>
      </Box>
      <Typography variant="body1">{Title}</Typography>
      <Typography variant="subtitle2" sx={{ color: 'silver' }}>
        {Year}
      </Typography>
    </Box>
  );
}

export default MovieCard;
