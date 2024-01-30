import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import logo from '~assets/images/logo.png';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image alt="" src={logo} height={50} width={100} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 5, color: 'wheat' }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
