import { Box, CircularProgress } from '@mui/material';

interface LoaderProps {
  size?: number;
}

function Loader({ size }: LoaderProps) {
  return (
    <Box
      sx={{
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'center',
        my: 2,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}

export default Loader;
