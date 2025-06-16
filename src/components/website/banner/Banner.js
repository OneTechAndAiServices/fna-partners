
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
const darkGreen = "#005430";
const lightGreen = "#00BA6A";
function Banner() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const word = 'Accountancy';
  const speed = 150;
  const bannerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer;
    if (index < word.length) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev + word.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <Box
      ref={bannerRef}
      sx={{
        backgroundImage: 'url(/bannerBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 10,
        px: 4,
      }}
    >
      <Grid container spacing={4}  sx={{mt:2}}>
        <Grid size={{xs:12,md:6}}  sx={{mt:6}} >
          <Box
              component="span"
            
              sx={{
                backgroundImage: 'url(/fnaT.jpg)',
                backgroundSize: 'cover',
                // fontFamily:"fantasy",
                mx:"auto",
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 740,
                fontSize: 52,
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
              }}
            >
              FNA PARTNERS
            </Box>
      
          <Typography
            fontSize="40px"
            fontWeight={400}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            //   justifyContent: 'center',
              mb: 2,
              gap: '8px',
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Box component="span" sx={{ color: '#000',fontWeight:600 }}>
              Leading Services in
            </Box>
            <Box
              component="span"
              sx={{
                // color: '#1ABC9C',
                  backgroundImage: 'linear-gradient(to bottom, #005430, #00DE7F)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
                
                minWidth: '12ch',
                fontWeight:900,
                fontSize:"50px",
                display: 'inline-block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                borderRight: '2px solid #1ABC9C',
                animation: 'blinkCursor 0.8s steps(1) infinite',
              }}
            >
              {displayText}
            </Box>
            {/* <Box component="span" sx={{ color: '#000' }}>
              Services in
            </Box> */}
          </Typography>

          <Typography
            fontSize="40px"
            fontWeight={400}
            display="flex"
            // justifyContent="center"
            gap="8px"
            mb={2}
            flexWrap="wrap"
            alignItems="center"
            data-aos="zoom-in-up"
          >
            <Box
              component="span"
              sx={{
                backgroundImage: 'url(/dubai.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: 52,
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
              }}
            >
              UAE
            </Box>
            <Box component="span">&</Box>
            <Box
              component="span"
              sx={{
                backgroundImage: 'url(/saudi.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: 52,
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
              }}
            >
              Saudi Arabia
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{ mb: 3 ,fontSize:"16px", fontWeight:"bold"}}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Empowering Your Business with 30+ Years of Financial Expertise
          </Typography>

          {/* Button */}
<Button
href='/our-services'
  variant="contained"
  sx={{
    position: "relative",
    overflow: "hidden",
    px: 4,
    py: 1.5,
    fontSize: { xs: 14, md: 16 },
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "999px",
    color: "#fff",
    background: `linear-gradient(to right, ${darkGreen}, ${lightGreen})`,
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(to right, ${lightGreen}, ${darkGreen})`,
      zIndex: -1,
      transition: "opacity 0.5s ease",
      opacity: 0,
    },
    "&:hover::before": {
      opacity: 1,
    },
    "&:hover": {
      boxShadow: 4,
    },
  }}
>
  Get Started
</Button>
        </Grid>
        <Grid size={{xs:12,md:6}}>
      <Box mt={5}>
              <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
        //   position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '400px',
          borderRadius:"40px",
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/dubaii.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Box>
        </Grid>
      </Grid>

      {/* Cursor blink keyframes */}
      <style jsx>{`
        @keyframes blinkCursor {
          0% {
            border-right-color: #1abc9c;
          }
          49% {
            border-right-color: #1abc9c;
          }
          50% {
            border-right-color: transparent;
          }
          100% {
            border-right-color: transparent;
          }
        }
      `}</style>
    </Box>
  );
}

export default Banner;














// ---------------------------------center align text


// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import gsap from 'gsap';

// function Banner() {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);
//   const word = 'Accountancy';
//   const speed = 150;
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Typewriter effect
//   useEffect(() => {
//     let timer;
//     if (index < word.length) {
//       timer = setTimeout(() => {
//         setDisplayText(prev => prev + word.charAt(index));
//         setIndex(prev => prev + 1);
//       }, speed);
//     }
//     return () => clearTimeout(timer);
//   }, [index]);

//   useEffect(() => {
//     if (bannerRef.current) {
//       gsap.fromTo(
//         bannerRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
//       );
//     }
//   }, []);

//   return (
//     <Box
//       ref={bannerRef}
//       sx={{
//         backgroundImage: 'url(/bannerBg.png)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         py: 10,
//         px: 4,
//       }}
//     >
//       <Grid container spacing={4} alignItems="center" textAlign="center">
//         <Grid size={{xs:12}}>
//           <Typography
//             fontSize="50px"
//             fontWeight={400}
//             fontFamily="fantasy"
//             mb={1}
//             data-aos="fade-down"
//             mt={8}
//           >
//             FNA Partners
//           </Typography>

//           {/* Typewriter line */}
//           <Typography
//             fontSize="40px"
//             fontWeight={400}
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               alignItems: 'center',
//               justifyContent: 'center',
//               mb: 2,
//               gap: '8px',
//             }}
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <Box component="span" sx={{ color: '#000' }}>
//               Leading
//             </Box>
//             <Box
//               component="span"
//               sx={{
//                 color: '#1ABC9C',
//                 minWidth: '12ch',
//                 display: 'inline-block',
//                 overflow: 'hidden',
//                 whiteSpace: 'nowrap',
//                 borderRight: '2px solid #1ABC9C',
//                 animation: 'blinkCursor 0.8s steps(1) infinite',
//               }}
//             >
//               {displayText}
//             </Box>
//             <Box component="span" sx={{ color: '#000' }}>
//               Services in
//             </Box>
//           </Typography>

//           <Typography
//             fontSize="40px"
//             fontWeight={400}
//             display="flex"
//             justifyContent="center"
//             gap="8px"
//             mb={2}
//             flexWrap="wrap"
//             alignItems="center"
//             data-aos="zoom-in-up"
//           >
//             <Box
//               component="span"
//               sx={{
//                 backgroundImage: 'url(/dubai.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//                 fontSize: 52,
//                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//               }}
//             >
//               UAE
//             </Box>
//             <Box component="span">&</Box>
//             <Box
//               component="span"
//               sx={{
//                 backgroundImage: 'url(/saudi.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//                 fontSize: 52,
//                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//               }}
//             >
//               Saudi Arabia
//             </Box>
//           </Typography>

//           {/* Subtitle */}
//           <Typography
//             variant="body1"
//             sx={{ mb: 3 }}
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Empowering Your Business with 30+ Years of Financial Expertise
//           </Typography>

//           {/* Button */}
//           <Button
//             variant="contained"
//             data-aos="fade-up"
//             data-aos-delay="600"
//             sx={{
//               backgroundColor: '#000',
//               borderRadius: '999px',
//               padding: '8px 24px',
//               textTransform: 'none',
//               fontWeight: 'bold',
//               fontSize: '16px',
//               '&:hover': {
//                 backgroundColor: '#333',
//               },
//             }}
//           >
//             Get Started
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Cursor blink keyframes */}
//       <style jsx>{`
//         @keyframes blinkCursor {
//           0% {
//             border-right-color: #1abc9c;
//           }
//           49% {
//             border-right-color: #1abc9c;
//           }
//           50% {
//             border-right-color: transparent;
//           }
//           100% {
//             border-right-color: transparent;
//           }
//         }
//       `}</style>
//     </Box>
//   );
// }

// export default Banner;





// ------------------------------------------------------- sky blur backgroun

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import gsap from 'gsap';

// function Banner() {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);
//   const word = 'Accountancy';
//   const speed = 150;
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Typewriter effect
//   useEffect(() => {
//     let timer;
//     if (index < word.length) {
//       timer = setTimeout(() => {
//         setDisplayText(prev => prev + word.charAt(index));
//         setIndex(prev => prev + 1);
//       }, speed);
//     }
//     return () => clearTimeout(timer);
//   }, [index]);

//   useEffect(() => {
//     if (bannerRef.current) {
//       gsap.fromTo(
//         bannerRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
//       );
//     }
//   }, []);

//   return (
//     <Box
//       ref={bannerRef}
//       sx={{
//         backgroundImage: 'url(/banner.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         py: 10,
//         px: 4,
//       }}
//     >
//       <Grid container spacing={4} alignItems="center" textAlign="center">
//         <Grid size={{xs:12}}>
//           <Typography
//             fontSize="50px"
//             fontWeight={400}
//             fontFamily="fantasy"
//             mb={1}
//             data-aos="fade-down"
//             mt={8}
//             color='white'
//           >
//             FNA Partners
//           </Typography>

//           {/* Typewriter line */}
//           <Typography
//             fontSize="40px"
//             fontWeight={400}
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               alignItems: 'center',
//               justifyContent: 'center',
//               mb: 2,
//               gap: '8px',
//             }}
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <Box component="span" sx={{ color: '#000' }}>
//               Leading
//             </Box>
//             <Box
//               component="span"
//               sx={{
//                 color: '#1ABC9C',
//                 minWidth: '12ch',
//                 display: 'inline-block',
//                 overflow: 'hidden',
//                 whiteSpace: 'nowrap',
//                 borderRight: '2px solid #1ABC9C',
//                 animation: 'blinkCursor 0.8s steps(1) infinite',
//               }}
//             >
//               {displayText}
//             </Box>
//             <Box component="span" sx={{ color: '#000' }}>
//               Services in
//             </Box>
//           </Typography>

//           <Typography
//             fontSize="40px"
//             fontWeight={400}
//             display="flex"
//             justifyContent="center"
//             gap="8px"
//             mb={2}
//             flexWrap="wrap"
//             alignItems="center"
//             data-aos="zoom-in-up"
//           >
//             <Box
//               component="span"
//               sx={{
//                 backgroundImage: 'url(/dubai.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//                 fontSize: 52,
//                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//               }}
//             >
//               UAE
//             </Box>
//             <Box component="span">&</Box>
//             <Box
//               component="span"
//               sx={{
//                 backgroundImage: 'url(/saudi.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//                 fontSize: 52,
//                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//               }}
//             >
//               Saudi Arabia
//             </Box>
//           </Typography>

//           {/* Subtitle */}
//           <Typography
//             variant="body1"
//             sx={{ mb: 3 }}
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Empowering Your Business with 30+ Years of Financial Expertise
//           </Typography>

//           {/* Button */}
//           <Button
//             variant="contained"
//             data-aos="fade-up"
//             data-aos-delay="600"
//             sx={{
//               backgroundColor: '#000',
//               borderRadius: '999px',
//               padding: '8px 24px',
//               textTransform: 'none',
//               fontWeight: 'bold',
//               fontSize: '16px',
//               '&:hover': {
//                 backgroundColor: '#333',
//               },
//             }}
//           >
//             Get Started
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Cursor blink keyframes */}
//       <style jsx>{`
//         @keyframes blinkCursor {
//           0% {
//             border-right-color: #1abc9c;
//           }
//           49% {
//             border-right-color: #1abc9c;
//           }
//           50% {
//             border-right-color: transparent;
//           }
//           100% {
//             border-right-color: transparent;
//           }
//         }
//       `}</style>
//     </Box>
//   );
// }

// export default Banner;



// ---------------------------------------------------------------dubai gif green colo text


// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import gsap from 'gsap';

// function Banner() {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);
//   const word = 'Accountancy';
//   const speed = 150;
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (index < word.length) {
//       timer = setTimeout(() => {
//         setDisplayText((prev) => prev + word.charAt(index));
//         setIndex((prev) => prev + 1);
//       }, speed);
//     }
//     return () => clearTimeout(timer);
//   }, [index]);

//   useEffect(() => {
//     if (bannerRef.current) {
//       gsap.fromTo(
//         bannerRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
//       );
//     }
//   }, []);

//   return (
//     <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -1,
//         }}
//       >
//         <source src="/dubaii.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content Box */}
//       <Box
//         ref={bannerRef}
//         sx={{
//           position: 'relative',
//           zIndex: 1,
//           py: 10,
//           px: 4,
//           color: '#fff',
//           background: 'rgba(0,0,0,0.4)', 
//           height:"100vh"
//         }}
//       >
//         <Grid container spacing={4} alignItems="center" textAlign="center">
//           <Grid size={{xs:12}}>
//             <Typography
//               fontSize="30px"
//               fontWeight={600}
//             //   fontFamily="fantasy"
//               color='#00ff92'
//               mb={1}
//               data-aos="fade-down"
//               mt={8}
//             >
//               FNA Partners
//             </Typography>

//             {/* Typewriter line */}
//             <Typography
//               fontSize="40px"
//               fontWeight={400}
//               sx={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 mb: 2,
//                 gap: '8px',
//               }}
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <Box component="span" sx={{ color: '#fff',fontSize:"45px" ,fontWeight:500 }}>
//                 Leading Accounting Services in
//               </Box>
//               {/* <Box
//                 component="span"
//                 sx={{
//                   color: '#1ABC9C',
//                   minWidth: '12ch',
//                   display: 'inline-block',
//                   overflow: 'hidden',
//                   whiteSpace: 'nowrap',
//                   borderRight: '2px solid #1ABC9C',
//                   animation: 'blinkCursor 0.8s steps(1) infinite',
//                 }}
//               >
//                 {displayText}
//               </Box>
//               <Box component="span" sx={{ color: '#fff' }}>
//                 Services in
//               </Box> */}
//             </Typography>
//               <Typography
//               fontSize="40px"
//               fontWeight={400}
//               sx={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 mb: 2,
//                 gap: '8px',
//               }}
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <Box component="span" sx={{ color: '#fff',fontSize:"45px" ,fontWeight:500 }}>
//                 UAE and Saudi Arabia
//               </Box>
//               </Typography>
// {/* 
//             <Typography
//               fontSize="40px"
//               fontWeight={400}
//             //   bgcolor={"white"}
//               display="flex"
//               justifyContent="center"
//               gap="8px"
//               mb={2}
//               flexWrap="wrap"
//               alignItems="center"
//               data-aos="zoom-in-up"
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   backgroundImage: 'url(/dubai.jpg)',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 700,
//                   fontSize: 52,
//                   filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//                 }}
//               >
//                 UAE
//               </Box>
//               <Box component="span" sx={{ color: '#fff' }}>
//                 &amp;
//               </Box>
//               <Box
//                 component="span"
//                 sx={{
//                   backgroundImage: 'url(/saudi.jpg)',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 700,
//                   fontSize: 52,
//                   filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
//                 }}
//               >
//                 Saudi Arabia
//               </Box>
//             </Typography> */}

//             {/* Subtitle */}
//             <Typography
//               variant="body1"
//               sx={{ mb: 3 }}
//               data-aos="fade-up"
//               data-aos-delay="400"
//               fontSize={"20px"}
//             >
//               Empowering Your Business with 30+ Years of Financial Expertise
//             </Typography>

//             {/* Button */}
//             <Button
//               variant="contained"
//               data-aos="fade-up"
//               data-aos-delay="600"
//               sx={{
//                 backgroundColor: '#1ABC9C',
//                 borderRadius: '999px',
//                 padding: '8px 24px',
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 fontSize: '16px',
//                 '&:hover': {
//                   backgroundColor: '#17a88b',
//                 },
//               }}
//             >
//               Explore more below
//             </Button>
//           </Grid>
//         </Grid>

//         <style jsx>{`
//           @keyframes blinkCursor {
//             0%, 49% {
//               border-right-color: #1abc9c;
//             }
//             50%, 100% {
//               border-right-color: transparent;
//             }
//           }
//         `}</style>
//       </Box>
//     </Box>
//   );
// }

// export default Banner;
