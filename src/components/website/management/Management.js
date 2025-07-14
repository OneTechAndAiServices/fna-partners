
//  'use client';

// import React, { useEffect, useRef } from 'react';
// import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { green } from '@/components/utils/Utils';
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Management() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });

//     const ctx = gsap.context(() => {
//       gsap.from('.gsap-mgmt', {
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         stagger: 0.2,
//         ease: 'power3.out',
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <Box ref={containerRef} sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
//       <Box
//         bgcolor="#005430"
//         p={1}
//         borderRadius={10}
//         maxWidth="250px"
//         textAlign="center"
//         px={2}
//         mx="auto"
//         mb={7}
//         fontSize={500}
//         className="gsap-mgmt"
//       >
//         <Typography color="white" fontSize="22px">
//           Management Packs
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         <Grid size={{xs:12,md:7}} data-aos="fade-right">
//           <Grid container spacing={2}>
//             <Grid size={{xs:12,md:6}} className="gsap-mgmt">
//               <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//                 Financial Modelling
//               </Typography>
//               <List dense>
//                 {[
//                   'Create robust financial models to project future performance based on various assumptions and scenarios',
//                   'Provide valuation models to assess the worth of your business or specific assets, aiding in strategic planning.',
//                 ].map((text, index) => (
//                   <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
//                     <ListItemIcon sx={{ color: green, minWidth: 30, pt: 0.5 }}>
//                       <ChevronRightIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary={text}
//                       primaryTypographyProps={{
//                         fontSize: 14,
//                         lineHeight: 1.6,
//                       }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>

//             <Grid size={{xs:12,md:6}} className="gsap-mgmt">
//               <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//                 Regular Reporting
//               </Typography>
//               <List dense>
//                 <ListItem disableGutters>
//                   <ListItemIcon sx={{ color: green, minWidth: 30 }}>
//                     <ChevronRightIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     secondary="Comprehensive Management Packs: Prepare detailed management packs that include key financial reports, performance metrics, and actionable insights tailored for decision-makers."
//                     secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//                   />
//                 </ListItem>
//                 <ListItem disableGutters>
//                   <ListItemIcon sx={{ color: green, minWidth: 30 }}>
//                     <ChevronRightIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     secondary="Custom Reporting: Develop customized reports to meet your specific needs, ensuring you have the relevant information for informed decision-making."
//                     secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//                   />
//                 </ListItem>
//               </List>
//             </Grid>
//           </Grid>

//           <Box mt={2} className="gsap-mgmt">
//             <List dense>
//               <ListItem disableGutters>
//                 <ListItemText
//                   secondary="Our FP&A services are designed to equip you with the tools and insights needed to make strategic financial decisions and drive your business forward. Partner with us for expert support in budgeting, forecasting, and management reporting."
//                   secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//                 />
//               </ListItem>
//               <ListItem disableGutters>
//                 <ListItemText
//                   secondary="In today’s dynamic business landscape, having a clear and actionable strategy is crucial for achieving long-term success. FnA specializes in strategic services that empower businesses to navigate challenges and seize opportunities with confidence. The approach involves crafting tailored strategies and conducting comprehensive feasibility studies. Whether refining strategic direction or exploring new ventures, expert guidance is available at every step to ensure well-positioned growth."
//                   secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </Grid>

//         {/* Right Side - Image */}
//         <Grid size={{xs:12,md:5}} data-aos="fade-left">
//           <Box
//             className="gsap-mgmt"
//             sx={{
//               borderRadius: 4,
//               overflow: 'hidden',
//               width: '100%',
//               maxWidth: 400,
//               mx: 'auto',
//             }}
//           >
//             <Image
//               src="/management.png"
//               alt="Management"
//               width={500}
//               height={500}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 borderRadius: '20px',
//               }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Management;
'use client';

import React, { useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

import { green } from '@/components/utils/Utils';
import Image from 'next/image';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

function Management() {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const ctx = gsap.context(() => {
      gsap.from('.gsap-mgmt', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}
    >
      <Box
        bgcolor="#005430"
        p={1.5}
        borderRadius={10}
        maxWidth="490px"
        textAlign="center"
        mx="auto"
        mb={6}
        className="gsap-mgmt"
      >
        <Typography color="white" fontSize="22px" fontWeight={500}>
          Management Reporting & FP&A Services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid size={{xs:12,md:7}} data-aos="fade-right">
          <Grid container spacing={4}>
            {/* Reporting */}
            <Grid size={{xs:12,md:6}} className="gsap-mgmt">
              <Typography
                variant="h6"
                sx={{ color: green, fontWeight: 600, mb: 2 }}
              >
                <AssessmentIcon fontSize="small" sx={{ mr: 1 }} />
                Management Reporting
              </Typography>
              <List dense>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ color: green, minWidth: 30 }}>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Customised management packs: Income statements, balance sheets, cash flow summaries, and ratio analysis."
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ color: green, minWidth: 30 }}>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Board-ready and departmental reports tailored for clarity and decision-making."
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Modelling */}
            <Grid size={{xs:12,md:6}} className="gsap-mgmt">
              <Typography
                variant="h6"
                sx={{ color: green, fontWeight: 600, mb: 2 }}
              >
                <TimelineIcon fontSize="small" sx={{ mr: 1 }} />
                Financial Modelling
              </Typography>
              <List dense>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ color: green, minWidth: 30 }}>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Forecasting models: Project revenue, EBITDA, and cash flows under dynamic assumptions."
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ color: green, minWidth: 30 }}>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Valuation models: Use DCF, comparables, and other methods for M&A or investment purposes."
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

       
          <Box mt={5} className="gsap-mgmt">
            <Typography
              variant="h6"
              sx={{ color: green, fontWeight: 600, mb: 2 }}
            >
              ✅ Why Choose FnA Partners?
            </Typography>
            <List dense>
              {[
                {
                  icon: <TrendingUpIcon />,
                  text: '30+ years in financial planning, analysis, and advisory',
                },
                {
                  icon: <BusinessCenterIcon />,
                  text: 'Deep understanding of UAE market dynamics & regulatory frameworks',
                },
                {
                  icon: <ChevronRightIcon />,
                  text: 'Proven record supporting growth-focused businesses',
                },
                {
                  icon: <ChevronRightIcon />,
                  text: 'Custom models, reports & insights tailored to your goals',
                },
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters>
                  <ListItemIcon sx={{ color: green }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

        
          <Box mt={4} className="gsap-mgmt">
            <Typography
              fontSize={16}
              color="#555"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              Whether you're a startup refining your budget or an established business planning for growth, our FP&A services are here to help you turn financial data into strategic insight.
            </Typography>

            <Button
              variant="contained"
              onClick={() => router.push('/contact-us')}
              startIcon={<PhoneForwardedIcon />}
              sx={{
                textTransform: 'none',
                background: `linear-gradient(to right, ${green}, #00c781)`,
                fontWeight: 600,
                fontSize: 15,
                px: 4,
                py: 1.5,
                borderRadius: '999px',
                '&:hover': {
                  background: `linear-gradient(to right, #00c781, ${green})`,
                },
              }}
            >
              Let’s Build Financial Clarity
            </Button>
          </Box>
        </Grid>

        {/* Right Side Image */}
        <Grid size={{xs:12,md:5}} data-aos="fade-left">
          <Box
            className="gsap-mgmt"
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 450,
              mx: 'auto',
            }}
          >
            <Image
              src="/management.png"
              alt="Management Reporting"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Management;
