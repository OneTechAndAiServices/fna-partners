
 'use client';

import {
  Box,
  Typography,
  useMediaQuery,
  Drawer,
  IconButton,
  CircularProgress,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { green } from '@/components/utils/Utils';
import {
  EmailOutlined,
  LinkedIn,
  PhoneOutlined,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

/* ——— sections you already have ——— */
import Banner from './Banner';
import Text from './Text';
import VatConsultant from '../services/VatConsultant';
import Ifrs from '../ifrs/Ifrs';
import Budget from '../budget/Budget';
import Management from '../management/Management';
import StrategicPlanning from '../strategic/StrategicPlanning';
import BusinessFeasbility from '../business/BusinessFeasbility';
import FormOnly from '../contactUs/FormOnly';
import NavbarWeb from '../NavbarWeb';
/* ———————————————————————— */

export default function OurServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

  const router   = useRouter();
  const pathname = usePathname();

  /* ---------- helpers ---------- */
  const goHome = () => {
    if (pathname !== '/') router.push('/');
    setOpen(false);
  };

  const goContact = () => {
    setLoading(true);
    if (pathname === '/') {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
      setLoading(false);
    } else {
      /* remember intent, then redirect */
      localStorage.setItem('scrollToId', 'contact');
      router.push('/');
    }
    setOpen(false);
  };

  /* fire after redirect */
  useEffect(() => {
    const id = localStorage.getItem('scrollToId');
    if (id) {
      setTimeout(
        () =>
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth' }),
        700
      );
      localStorage.removeItem('scrollToId');
      setLoading(false);
    }
  }, [pathname]);
useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);


  /* ——— Drawer content ——— */
  // const drawerMenu = (
  //   <Box p={3} width={250} textAlign="center" mt={4}>
  //     <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
  //       <CloseIcon />
  //     </IconButton>
  //     <Typography sx={{ my: 2, cursor: 'pointer' }} onClick={goHome}>
  //       Home
  //     </Typography>
  //     <Typography sx={{ my: 2, cursor: 'pointer' }} onClick={goHome}>
  //       Services
  //     </Typography>
  //     <Typography sx={{ my: 2, cursor: 'pointer' }} onClick={goHome}>
  //       About Us
  //     </Typography>
  //     <Typography sx={{ my: 2, cursor: 'pointer' }} onClick={goHome}>
  //       Blogs & News
  //     </Typography>
  //     <Typography sx={{ my: 2, cursor: 'pointer' }} onClick={goContact}>
  //       Contact Us
  //     </Typography>
  //   </Box>
  // );

  return (
    <>
    
      {/* <Box
        sx={{
    px: 2,
    py: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1500,
    backgroundColor: isScrolled ? '#ffffff' : 'transparent',
    boxShadow: isScrolled ? '0px 2px 10px rgba(0,0,0,0.05)' : 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  }}
      >
        {/* logo (left) 
        <Box >
          <Image
            src="/logo.png"
            alt="logo"
            priority
            width={148}
            height={46}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* navbar (center) 
        {!isMobile && (
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#fff',
                alignItems: 'center',
                borderRadius: 40,
                boxShadow: '0 1px 10px rgba(0,0,0,0.1)',
                px: 3,
                py: 1,
              }}
            >
              <Typography sx={navStyle} onClick={goHome}>
                Home
              </Typography>
              <Typography mx={1} color="#ccc">
                •
              </Typography>
              <Typography sx={navStyle} onClick={goHome}>
                About Us
              </Typography>
              <Typography mx={1} color="#ccc">
                •
              </Typography>
              <Typography sx={navStyle} onClick={goHome}>
                Services
              </Typography>
              <Typography mx={1} color="#ccc">
                •
              </Typography>
              <Typography sx={navStyle} onClick={goHome}>
                Blogs & News
              </Typography>
              <Typography mx={1} color="#ccc">
                •
              </Typography>
              <Typography sx={navStyle} onClick={goContact}>
                Contact Us
              </Typography>
            </Box>
          </Box>
        )}

        {/* hamburger (right) 
        {isMobile && (
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        )}
      </Box> */}
<NavbarWeb/>
      {/* {loading && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={1400}
          bgcolor="rgba(255,255,255,0.7)"
        >
          <CircularProgress />
        </Box>
      )} */}

      {/* ========= DRAWER ========= */}
      {/* <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        {drawerMenu}
      </Drawer> */}

      {/* ========= PAGE SECTIONS ========= */}
      <Banner />
      <Text />
      <VatConsultant />
      <Ifrs />
      <Budget />
      <Management />
      <StrategicPlanning />
      <BusinessFeasbility />

      <Box id="contact">
        <FormOnly />
      </Box>

      {/* ========= FOOTER ========= */}
      {/* <Box sx={{background: `linear-gradient(to right, #005430, #00BA6A)`,}} py={4} px={4}>
        <Grid container spacing={2}>
          <Grid  size={{xs:12,md:3}}>
            <Typography sx={{ fontSize: 18, color: 'white' }}>
              Social Links
            </Typography>
            <Box mt={1}>
              <IconButton
                href="https://www.linkedin.com/company/fna-partners-gcc/"
                target="_blank"
              >
                <LinkedIn sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:3}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 3, py: 1 }}>
              <Typography sx={{ fontSize: 18, color: 'white' }}>Site Map</Typography>
              <Typography sx={footerStyle} onClick={goHome}>
                Home
              </Typography>
              <Typography sx={footerStyle} onClick={goHome}>
                Services
              </Typography>
              <Typography sx={footerStyle} onClick={goHome}>
                About Us
              </Typography>
              <Typography sx={footerStyle} onClick={goHome}>
                Blogs & News
              </Typography>
              <Typography sx={footerStyle} onClick={goContact}>
                Contact Us
              </Typography>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:3}}>
            <Typography sx={{ fontSize: 18, color: 'white' }}>Privacy</Typography>
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" color="white">
                Quick Links
              </Typography>
              <Link href="/privacy-policy" style={{ textDecoration: 'none' }}>
                <Typography sx={footerLink}>Privacy Policy</Typography>
              </Link>
              <Link href="/terms-and-condition" style={{ textDecoration: 'none' }}>
                <Typography sx={footerLink}>Terms and Conditions</Typography>
              </Link>
              <Link href="/cookie-policy" style={{ textDecoration: 'none' }}>
                <Typography sx={footerLink}>Cookie Policy</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:3}}>
            <Typography sx={{ fontSize: 18, color: 'white' }}>Contacts</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <PhoneOutlined sx={{ fontSize: 18, color: 'white' }} />
              <Typography ml={2} sx={{ color: 'white', transition: '0.3s' }}>
                050‑2405436
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailOutlined sx={{ fontSize: 18, color: 'white' }} />
              <Typography ml={2} sx={{ color: 'white', transition: '0.3s' }}>
                info@fna‑partners.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}

/* ——— styles ——— */
const navStyle = {
  fontSize: 14,
  my: 1,
  fontWeight: 500,
  color: 'black',
  cursor: 'pointer',
  '&:hover': { color: '#007aff' },
};

const footerStyle = {
  fontSize: 14,
  my: 1,
  fontWeight: 500,
  color: 'white',
  cursor: 'pointer',
  '&:hover': { color: '#007aff' },
};

const footerLink = {
  ':hover': { color: 'white', transition: '0.3s' },
  transition: '0.3s',
  color: 'white',
  my: 1,
};
