



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
import Services from '../services/Services';
import SpecializedServices from '../services/SpecializedServices';
import VatConsultant from '../services/VatConsultant';
import Ifrs from '../ifrs/Ifrs';
import Banner from '../banner/Banner';
import BusinessFeasbility from '../business/BusinessFeasbility';
import StrategicPlanning from '../strategic/StrategicPlanning';
import Budget from '../budget/Budget';
import { green } from '@/components/utils/Utils';
import Management from '../management/Management';
import FormOnly from '../contactUs/FormOnly';
import { EmailOutlined, LinkedIn, PhoneOutlined } from '@mui/icons-material';
import Link from 'next/link';
import AboutUs from '../aboutUs/AboutUs';
import News from '../news/News';

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const logoRef = useRef();

    const handleScroll = (id) => {
        setLoading(true);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        const handleLogoFade = () => {
            const y = window.scrollY;
            if (!isMobile) {
                gsap.to(logoRef.current, {
                    opacity: y > 50 ? 0 : 1,
                    duration: 0.5,
                });
            }
        };

        window.addEventListener('scroll', handleLogoFade);
        return () => window.removeEventListener('scroll', handleLogoFade);
    }, [isMobile]);

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

    const drawerMenu = (
        <Box p={3} width="250px"  mt={8}>
            <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
                <CloseIcon />
            </IconButton>
            <Typography onClick={() => { setOpen(false); handleScroll('home'); }} sx={{ my: 2, cursor: 'pointer' }}>Home</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('services'); }} sx={{ my: 2, cursor: 'pointer' }}>Services</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('about'); }} sx={{ my: 2, cursor: 'pointer' }}>About Us</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('blogs'); }} sx={{ my: 2, cursor: 'pointer' }}>Blogs & News</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('contact'); }} sx={{ my: 2, cursor: 'pointer' }}>Contact Us</Typography>
        </Box>
    );

    return (
        <>

            <Box
                // sx={{
                //     px: 2,
                //     py: 1,
                //     display: 'flex',
                //     justifyContent: 'space-between',
                //     alignItems: 'center',
                //     // bgcolor: '#f4f6f8',
                //     position: 'sticky',
                //     top: 0,
                //     zIndex: 1300,
                //     boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                // }}
                // sx={{
                //     px: 2,
                //     py: 1,
                //     display: 'flex',
                //     justifyContent: 'space-between',
                //     alignItems: 'center',
                //     // backgroundColor: '#fff', // Ensure it's not transparent
                //     position: 'fixed', // Changed from 'sticky' to 'fixed'
                //     top: 0,
                //     left: 0,
                //     width: '100%', // Ensure full width
                //     zIndex: 1500, // Above all content
                //     // boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                // }}
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

                <Box >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={148}
                        height={46}
                        priority
                        style={{ objectFit: 'contain' }}
                    />
                </Box>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <Box
                        sx={{
                            display: 'flex',
                            bgcolor: '#fff',
                            alignItems: "center",
                            borderRadius: '40px',
                            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
                            px: 3,
                            py: 1,
                            ml: -16
                        }}
                    >
                        <Typography onClick={() => handleScroll('home')} sx={navStyle}>Home</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('about')} sx={navStyle}>About Us</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('services')} sx={navStyle}>Services</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('blogs')} sx={navStyle}>Blogs & News</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('contact')} sx={navStyle}>Contact Us</Typography>
                    </Box>
                )}
                <Box>
                    <Box>

                    </Box>
                </Box>

                {isMobile && (
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuIcon sx={{ color: "black" }} />
                    </IconButton>
                )}
            </Box>

            {loading && (
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
            )}


            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                {drawerMenu}
            </Drawer>


            <Box id="home" minHeight="100vh" >
                <Banner />
            </Box>
            <Box id="about">
                <AboutUs />
            </Box>
            <Box id="services"><Services /></Box>
            {/* <SpecializedServices /> */}

            {/* <VatConsultant /> */}
            {/* <BusinessFeasbility /> */}
            <Box id="contact" >
                <FormOnly />
            </Box>
            <Box id="blogs" >
                <News />
            </Box>
            {/* <Management/> */}
            {/* <Ifrs />
            <Budget />
            <StrategicPlanning /> */}



            <Box sx={{ background: `linear-gradient(to right, #005430, #00BA6A)`, }} py={4} px={4}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography sx={{ fontSize: 18, color: "white" }}>
                            Social Links</Typography>
                        <Box mt={1}>
                            <IconButton href='https://www.linkedin.com/company/fna-partners-gcc/' target='_blank'>

                                <LinkedIn sx={{ color: "white" }} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: "column",

                                // borderRadius: '40px',
                                // boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
                                // px: 3,
                                py: 1,
                            }}
                        >
                            <Typography sx={{ fontSize: 18, color: "white" }} >Site Map</Typography>
                            <Typography onClick={() => handleScroll('home')} sx={footerStyle} >Home</Typography>
                            <Typography onClick={() => handleScroll('services')} sx={footerStyle} >Services</Typography>
                            <Typography onClick={() => handleScroll('about')} sx={footerStyle} >About Us</Typography>
                            <Typography onClick={() => handleScroll('blogs')} sx={footerStyle} >Blogs & News</Typography>
                            <Typography onClick={() => handleScroll('contact')} sx={footerStyle} >Contact Us</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography sx={{ fontSize: 18, color: "white" }}>
                            Privacy
                        </Typography>
                        <Box display={"flex"} flexDirection={"column"} >
                            <Typography fontWeight={"bold"} color='white' >
                                Quick Links
                            </Typography>
                            <Link href={"/privacy-policy"} style={{ textDecoration: "none", color: "white" }}>
                                <Typography sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s" }} my={1}>Privacy Policy</Typography>
                            </Link>
                            <Link href={"/terms-and-condition"} style={{ textDecoration: "none", color: "white" }} my={1}>
                                <Typography sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s" }} my={1}> Terms and conditions  </Typography>
                            </Link>
                            <Link href={"/cookie-policy"} style={{ textDecoration: "none", color: "white" }}>
                                <Typography sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s" }} my={1}> Cookie Policy  </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }} sx={{borderLeft:"2px solid white",pl:3}}>
                        <Typography sx={{ fontSize: 18, color: "white" }}>
                            Contacts
                        </Typography>
                        <Box display={"flex"}  flexDirection={"column"}  mt={2}>
                            <PhoneOutlined sx={{ fontSize: 40,borderRadius:10,p:1, color: "black" ,bgcolor:"white" }} />
                            <Typography my={1} sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s", color: "white" }}>+971 50 903 3195</Typography>

                              {/* <Typography my={1} sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s", color: "white" }}>+971 52 854 9935</Typography> */}

                        </Box>
                        <Box display={"flex"} flexDirection={"column"} mt={1}>
                            <EmailOutlined sx={{ fontSize: 40,borderRadius:10,p:1, color: "black" ,bgcolor:"white" }} />
                            <Typography  my={1} sx={{ ":hover": { color: "white", transition: "0.3s" }, transition: "0.3s", color: "white" }}>info@fna-partners.com  </Typography>

                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}

const navStyle = {
    fontSize: 14,
    my: 1,
    fontWeight: 500,
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
        color: '#007aff',
    },
};

const footerStyle = {
    fontSize: 14,
    my: 1,
    fontWeight: 500,
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
        color: '#007aff',
    },
};
