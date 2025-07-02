
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { green } from '@/components/utils/Utils';
const darkGreen = "#005430";
const lightGreen = "#00BA6A";
function About() {
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
         sx={{
        py: 8,
        px: 2,
        minHeight: ["40vh","60vh","70vh"],
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        // background: "linear-gradient(-45deg, #be185d, #ec4899, #d946ef, #0ea5e9)",
           background: "linear-gradient(-45deg, #19685B, #95D0BB,#005430)",
        backgroundSize: "300% 300%",
        animation: "bgAnimation 15s ease infinite",
        "@keyframes bgAnimation": {
          "0%": {
            backgroundPosition: "left",
          },
          "50%": {
            backgroundPosition: "right",
          },
          "100%": {
            backgroundPosition: "left",
          },
        },
      }}
    >
        <Typography fontSize={"50px"} fontWeight={500} mt={12} color='white'>
            About Us
        </Typography>
  
    </Box>
  );
}

export default About;



 