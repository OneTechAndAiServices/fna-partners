// "use client";
// import React from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Typography,
//   useMediaQuery,
//   useTheme,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Paper,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { Circle } from "@mui/icons-material";

// const services = [
//   {
//     title: "ACCOUNTING SERVICES",
//     description:
//       "We are a well-established and registered accounting service provider serving businesses in Dubai and throughout the UAE.",
//     points: [
//       "Accounting & Bookkeeping",
//       "VAT and Corporate Tax Consultancy",
//       "IFRS Technical Accounting Advisory",
//     ],
//   },
//   {
//     title: "FINANCIAL & BUSINESS STRATEGY",
//     description:
//       "At FnA, we specialize in providing strategic services that help you navigate challenges and seize opportunities.",
//     points: ["Strategic Planning"],
//   },
//   {
//     title: "Accounting & Bookkeeping",
//     description:
//       "Our extensive suite of financial solutions is designed to enhance cash flow and boost profitability. Our teams of certified accountants are dedicated to creating efficient systems for managing and monitoring your business’s financial health.",
//     points: [],
//   },
//   {
//     title: "FINANCIAL, PLANING & ANALYSIS",
//     description:
//       "We provide comprehensive Financial Planning and Analysis & services to help drive your business’s strategic goals.",
//     points: ["Budgeting And Forecasting", "Management Packs"],
//   },
// ];

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #19685B, #95D0BB)",
//         py: 8,
//         px: 2,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box textAlign="center" mb={5}>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#005430",
//               borderRadius: "999px",
//               border:"1px solid #c3d5cd",
//               px: 4,
//               py: 1,
//               fontSize: 14,
//               textTransform: "none",
//               "&:hover": {
//                 backgroundColor: "#155c51",
//               },
//             }}
//           >
//             Our Services
//           </Button>
//         </Box>

//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid  size={{xs:12,sm:6}} key={index}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   borderRadius: 3,
//                   p: 3,
//                   minHeight: "360px",
//                   transition: "0.3s",
//                   "&:hover": {
//                     boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{ color: "#19685B", fontWeight: 500 ,fontSize:"30px"}}
//                 >
//                   {service.title}
//                 </Typography>
//                 <Typography
//                 //   variant="body2"
//                   color="textSecondary"
//                   sx={{ mb: 2,fontSize:"23px",fontWeight:300 }}
//                 >
//                   {service.description}
//                 </Typography>

//                 {service.points.length > 0 && (
//                   <List dense>
//                     {service.points.map((point, i) => (
//                       <ListItem key={i} disableGutters>
//                         <ListItemIcon sx={{ minWidth: 28 }}>
//                           <Circle
//                             fontSize="small"
//                             sx={{ color: "#19685B",height:"16px" }}
//                           />
//                         </ListItemIcon>
//                         <ListItemText
//                           primaryTypographyProps={{ fontSize: "15px",fontWeight:300 }}
//                           primary={point}
//                         />
//                       </ListItem>
//                     ))}
//                   </List>
//                 )}
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Services;
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

const services = [
  {
    title: "ACCOUNTING SERVICES",
    description:
      "We are a well-established and registered accounting service provider serving businesses in Dubai and throughout the UAE.",
    points: [
      "Accounting & Bookkeeping",
      "VAT and Corporate Tax Consultancy",
      "IFRS Technical Accounting Advisory",
    ],
  },
  {
    title: "FINANCIAL & BUSINESS STRATEGY",
    description:
      "At FnA, we specialize in providing strategic services that help you navigate challenges and seize opportunities.",
    points: ["Strategic Planning"],
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Our extensive suite of financial solutions is designed to enhance cash flow and boost profitability. Our teams of certified accountants are dedicated to creating efficient systems for managing and monitoring your business’s financial health.",
    points: [],
  },
  {
    title: "FINANCIAL, PLANING & ANALYSIS",
    description:
      "We provide comprehensive Financial Planning and Analysis & services to help drive your business’s strategic goals.",
    points: ["Budgeting And Forecasting", "Management Packs"],
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #19685B, #95D0BB)",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#005430",
              borderRadius: "999px",
              border: "1px solid #c3d5cd",
              px: 4,
              py: 1,
              fontSize: 14,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#155c51",
              },
            }}
          >
            Our Services
          </Button>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
            size={{xs:12,md:6}}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  minHeight: "360px",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#19685B",
                    fontWeight: 500,
                    fontSize: "30px",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mb: 2, fontSize: "23px", fontWeight: 300 }}
                >
                  {service.description}
                </Typography>

                {service.points.length > 0 && (
                  <List dense>
                    {service.points.map((point, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <Circle
                            fontSize="small"
                            sx={{ color: "#19685B", height: "16px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            fontSize: "15px",
                            fontWeight: 300,
                          }}
                          primary={point}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
