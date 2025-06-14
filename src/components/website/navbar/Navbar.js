// // "use client"
// // import { Box, Typography, useMediaQuery } from "@mui/material";
// // import Image from "next/image";
// // import { useTheme } from "@mui/material/styles";

// // export default function Navbar() {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

// //   const navItems = ["Home", "Services", "About Us", "Blogs", "Contact Us"];

// //   return (
// // <>
// //     <Box
// //       sx={{
// //         px: 2,
// //         py: 1,
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         bgcolor: "#f4f6f8",
// //         position: "sticky",
// //         top: 0,
// //         zIndex: 1000,
// //       }}
// //     >

// //       <Box>
// //         <Image
// //           src="/logo.png"
// //           alt="logo"
// //           width={148}
// //           height={46}
// //           style={{ objectFit: "contain" }}
// //         />
// //       </Box>


// //       <Box
// //         sx={{
// //           display: "flex",
// //           bgcolor: "#fff",
// //           borderRadius: "40px",
// //           boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
// //           px: 3,
// //           py: 1,
// //           overflowX: "auto",
// //           scrollbarWidth: "none",
// //           "::-webkit-scrollbar": {
// //             display: "none",
// //           },
// //         }}
// //       >
// //         {navItems.map((item, index) => (
// //           <Box
// //             key={item}
// //             sx={{
// //               display: "flex",
// //               alignItems: "center",
// //               mx: 1,
// //               whiteSpace: "nowrap",
// //             }}
// //           >
// //             <Typography
// //               sx={{
// //                 fontSize: 14,
// //                 fontWeight: 500,
// //                 color: "#444",
// //                 cursor: "pointer",
// //                 "&:hover": {
// //                   color: "#007aff",
// //                 },
// //               }}
// //             >
// //               {item}
// //             </Typography>
// //             {index < navItems.length - 1 && (
// //               <Typography mx={1} color="#ccc">
// //                 •
// //               </Typography>
// //             )}
// //           </Box>
// //         ))}
// //       </Box>

// //       <Box width={148} height={46}></Box>

// //     </Box>


// //     <Box height={"70vh"}>
// //         Home
// //     </Box>
// //     <Box height={"70vh"}>
// //         Services
// //     </Box>
// //         <Box height={"70vh"}>
// //         About Us
// //     </Box>
// //         <Box height={"70vh"}>
// //         Blogs
// //     </Box>
// //             <Box height={"70vh"}>
// //         Contact Us
// //     </Box>
// // </>
// //   );
// // }
//  'use client';
// import {
//   Box,
//   Typography,
//   useMediaQuery,
//   Drawer,
//   IconButton,
//   CircularProgress,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import Image from 'next/image';
// import { useTheme } from '@mui/material/styles';
// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import Services from '../services/Services';

// const navItems = [
//   { label: 'Home', id: 'home' },
//   { label: 'Services', id: 'services' },
//   { label: 'About Us', id: 'about' },
//   { label: 'Blogs', id: 'blogs' },
//   { label: 'Contact Us', id: 'contact' },
// ];

// export default function Navbar() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const logoRef = useRef();

//   const handleScroll = (id) => {
//     setLoading(true);
//     setTimeout(() => {
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//       setLoading(false);
//     }, 800); // Simulate delay
//   };

//   // Animate logo on scroll
//   useEffect(() => {
//     const handleLogoFade = () => {
//       const y = window.scrollY;
//       if (!isMobile) {
//         gsap.to(logoRef.current, {
//           opacity: y > 50 ? 0 : 1,
//           duration: 0.5,
//         });
//       }
//     };

//     window.addEventListener('scroll', handleLogoFade);
//     return () => window.removeEventListener('scroll', handleLogoFade);
//   }, [isMobile]);

//   const drawerMenu = (
//     <Box p={3} width="250px" textAlign="center">
//       <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
//         <CloseIcon />
//       </IconButton>
//       {navItems.map((item) => (
//         <Typography
//           key={item.id}
//           sx={{ my: 2, cursor: 'pointer', fontWeight: 'bold' }}
//           onClick={() => {
//             setOpen(false);
//             handleScroll(item.id);
//           }}
//         >
//           {item.label}
//         </Typography>
//       ))}
//     </Box>
//   );

//   return (
//     <>
//       {/* Sticky Navbar */}
//       <Box
//         sx={{
//           px: 2,
//           py: 1,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           bgcolor: '#f4f6f8',
//           position: 'sticky',
//           top: 0,
//           zIndex: 1300,
//           boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
//         }}
//       >
//         {/* Left Logo */}
//         <Box ref={logoRef}>
//           <Image
//             src="/logo.png"
//             alt="logo"
//             width={148}
//             height={46}
//             style={{ objectFit: 'contain' }}
//           />
//         </Box>

//         {/* Center Navigation */}
//         {!isMobile && (
//           <Box
//             sx={{
//               display: 'flex',
//               bgcolor: '#fff',
//               borderRadius: '40px',
//               boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
//               px: 3,
//               py: 1,
//             }}
//           >
//             {navItems.map((item, index) => (
//               <Box
//                 key={item.id}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   mx: 1,
//                   whiteSpace: 'nowrap',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => handleScroll(item.id)}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: 14,
//                     fontWeight: 500,
//                     color: '#444',
//                     '&:hover': {
//                       color: '#007aff',
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Typography>
//                 {index < navItems.length - 1 && (
//                   <Typography mx={1} color="#ccc">
//                     •
//                   </Typography>
//                 )}
//               </Box>
//             ))}
//           </Box>
//         )}

//         {/* Mobile Menu */}
//         {isMobile && (
//           <IconButton onClick={() => setOpen(true)}>
//             <MenuIcon />
//           </IconButton>
//         )}
//       </Box>

//       {/* Loader */}
//       {loading && (
//         <Box
//           position="fixed"
//           top={0}
//           left={0}
//           width="100%"
//           height="100%"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           zIndex={1400}
//           bgcolor="rgba(255,255,255,0.7)"
//         >
//           <CircularProgress />
//         </Box>
//       )}

//       {/* Drawer */}
//       <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//         {drawerMenu}
//       </Drawer>

//       {/* Sections */}
//       {/* {navItems.map((item) => (
//         <Box
//           key={item.id}
//           id={item.id}
//           height="100vh"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           data-aos="fade-up"
//           sx={{
//             borderBottom: '1px solid #eee',
//             fontSize: '2rem',
//             fontWeight: 'bold',
//           }}
//         >
//           {item.label}
//         </Box>
//       ))} */}
//       <Box height={"100vh"}>
//         Home
//       </Box>
//       <Box>
//         <Services/>
//       </Box>
//     </>
//   );
// }






























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

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
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

    const drawerMenu = (
        <Box p={3} width="250px" textAlign="center" mt={4}>
            <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
                <CloseIcon />
            </IconButton>
            <Typography onClick={() => { setOpen(false); handleScroll('home'); }} sx={{ my: 2, cursor: 'pointer' }}>Home</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('services'); }} sx={{ my: 2, cursor: 'pointer' }}>Services</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('about'); }} sx={{ my: 2, cursor: 'pointer' }}>About Us</Typography>
            <Typography onClick={() => { setOpen(false); handleScroll('blogs'); }} sx={{ my: 2, cursor: 'pointer' }}>Blogs</Typography>
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
                  sx={{
    px: 2,
    py: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fff', // Ensure it's not transparent
    position: 'fixed', // Changed from 'sticky' to 'fixed'
    top: 0,
    left: 0,
    width: '100%', // Ensure full width
    zIndex: 1500, // Above all content
    // boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  }}
            >

                <Box ref={logoRef}>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={148}
                        height={46}
                        style={{ objectFit: 'contain' }}
                    />
                </Box>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <Box
                        sx={{
                            display: 'flex',
                            bgcolor: '#fff',
                            borderRadius: '40px',
                            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
                            px: 3,
                            py: 1,
                            ml:-16
                        }}
                    >
                        <Typography onClick={() => handleScroll('home')} sx={navStyle}>Home</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('services')} sx={navStyle}>Services</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('about')} sx={navStyle}>About Us</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('blogs')} sx={navStyle}>Blogs</Typography>
                        <Typography mx={1} color="#ccc">•</Typography>
                        <Typography onClick={() => handleScroll('contact')} sx={navStyle}>Contact Us</Typography>
                    </Box>
                )}
                <Box>
<Box>
    
</Box>
                </Box>

                {/* Mobile Menu */}
                {isMobile && (
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuIcon sx={{color:"black"}} />
                    </IconButton>
                )}
            </Box>

            {/* Loader */}
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
            <Box id="services"><Services /></Box>
            <Box id="about">

            <SpecializedServices />
            </Box>
            <VatConsultant />
            <Box id="blogs" >
            <Management/>
            </Box>
            <Ifrs />
            <Budget />
            <StrategicPlanning />
            <BusinessFeasbility />
            <Box id="contact" >
                <FormOnly/>
            </Box>



            <Box bgcolor={green} py={4} px={4}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography sx={{fontSize:18,color:"white"}}>
                        Social Links</Typography>
                           <Box mt={1}>
<IconButton href='https://www.linkedin.com/company/fna-partners-gcc/' target='_blank'>

        <LinkedIn  sx={{color:"white"}} />
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
                                px: 3,
                                py: 1,
                            }}
                        >
                          <Typography sx={{fontSize:18,color:"white"}} >Site Map</Typography>
                            <Typography onClick={() => handleScroll('home')} sx={footerStyle} >Home</Typography>
                            <Typography onClick={() => handleScroll('services')} sx={footerStyle} >Services</Typography>
                            <Typography onClick={() => handleScroll('about')} sx={footerStyle} >About Us</Typography>
                            <Typography onClick={() => handleScroll('blogs')} sx={footerStyle} >Blogs</Typography>
                            <Typography onClick={() => handleScroll('contact')} sx={footerStyle} >Contact Us</Typography>
                        </Box>
                    </Grid>
                     <Grid size={{ xs: 12, md: 3 }}>
                       <Typography sx={{fontSize:18,color:"white"}}>
                        Privacy
                        </Typography>
                            <Box display={"flex"} flexDirection={"column"} >
                <Typography fontWeight={"bold"} color='white' >
                    Quick Links
                </Typography>
                <Link href={"/privacy-policy"} style={{ textDecoration: "none", color: "white" }}>
                    <Typography sx={{ ":hover": { color: "white",transition:"0.3s" },transition:"0.3s" }} my={1}>Privacy Policy</Typography>
                </Link>
                <Link href={"/terms-and-condition"} style={{ textDecoration: "none", color: "white" }} my={1}>
                    <Typography sx={{ ":hover": { color: "white",transition:"0.3s" },transition:"0.3s" }} my={1}> Terms and conditions  </Typography>
                </Link>
                <Link href={"/cookie-policy"} style={{ textDecoration: "none", color: "white" }}>
                    <Typography sx={{ ":hover": { color: "white",transition:"0.3s" },transition:"0.3s" }} my={1}> Cookie Policy  </Typography>
                </Link>
            </Box>
                    </Grid>
                     <Grid size={{ xs: 12, md: 3 }}>
                        <Typography sx={{fontSize:18,color:"white"}}>
                        Contacts
                        </Typography>
                        <Box display={"flex"} alignItems={"center"} mt={2}>
    <PhoneOutlined sx={{fontSize:18, color: "white"}}/>
    <Typography ml={2} sx={{ ":hover": { color: "white",transition:"0.3s" },transition:"0.3s" , color: "white"}}>050-2405436</Typography>

    </Box>                 
    <Box display={"flex"} alignItems={"center"} mt={1}>
    <EmailOutlined sx={{fontSize:18, color: "white"}}/>
    <Typography ml={2} sx={{ ":hover": { color: "white",transition:"0.3s" },transition:"0.3s", color: "white" }}>info@fna-partners.com  </Typography>

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
