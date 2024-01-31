import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  Paper,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMovieQuery } from './services/movieApi';
import Loader from '~components/Loader';

const Details = () => {
  const { id } = useSelector((state: any) => state.movie);

  const { data, isLoading } = useGetMovieQuery({ id });

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    imdbRating,
  } = data || {};

  return (
    <Box sx={{ mt: 5 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Card
          sx={{
            background: 'black',
          }}
        >
          <img src={Poster} alt={Title} />
          <CardContent>
            <Typography sx={{ color: 'white' }} variant="h4" gutterBottom>
              {Title} ({Year})
            </Typography>
            <Typography
              sx={{ color: 'white' }}
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
            >
              {Genre} | {Runtime} | {Released} ({Country})
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body1" paragraph>
              {Plot}
            </Typography>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>Director:</strong> {Director}
                </Typography>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>Writer:</strong> {Writer}
                </Typography>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>Actors:</strong> {Actors}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>Language:</strong> {Language}
                </Typography>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>Awards:</strong> {Awards}
                </Typography>
                <Typography sx={{ color: 'white' }} variant="body2">
                  <strong>IMDb Rating:</strong> {imdbRating}/10
                </Typography>
              </Grid>
            </Grid>
            <Typography
              sx={{ color: 'white' }}
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
            >
              Ratings:
            </Typography>
            <Paper sx={{ background: 'black' }} elevation={0}>
              {Ratings?.map?.((rating: any) => (
                <Chip
                  sx={{ mr: 1 }}
                  key={rating.Source}
                  avatar={<Avatar>{rating.Source[0]}</Avatar>}
                  label={`${rating.Source}: ${rating.Value}`}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Paper>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Details;
