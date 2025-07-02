// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

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

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

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
//               border: "1px solid #c3d5cd",
//               px: 2,
//               py: 1,
//              fontSize:"22px",
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
//             <Grid
//             size={{xs:12,md:6}}
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
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
//                   sx={{
//                     color: "#19685B",
//                     fontWeight: 550,
//                     fontSize: "30px",
//                   }}
//                 >
//                   {service.title}
//                 </Typography>
//                 <Typography
//                   color="textSecondary"
//                   sx={{ mb: 2, fontSize: "23px", fontWeight: 300 }}
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
//                             sx={{ color: "#19685B", height: "16px" }}
//                           />
//                         </ListItemIcon>
//                         <ListItemText
//                           primaryTypographyProps={{
//                             fontSize: "15px",
//                             fontWeight: 300,
//                           }}
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





// --------------------- simple 4 box 



// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

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

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <Box
// sx={{
//   py: 8,
//   px: 2,
//   minHeight: "100vh",
//   background: "linear-gradient(-45deg, #be185d, #ec4899, #d946ef, #0ea5e9)",
//      background: "linear-gradient(-45deg, #19685B, #95D0BB,#005430)",
//   backgroundSize: "300% 300%",
//   animation: "bgAnimation 15s ease infinite",
//   "@keyframes bgAnimation": {
//     "0%": {
//       backgroundPosition: "left",
//     },
//     "50%": {
//       backgroundPosition: "right",
//     },
//     "100%": {
//       backgroundPosition: "left",
//     },
//   },
// }}
//     >
//       <Container maxWidth="lg">
//         <Box textAlign="center" mb={5}>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#005430",
//               borderRadius: "999px",
//               border: "1px solid #c3d5cd",
//               px: 2,
//               py: 1,
//               fontSize: "22px",
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
//             <Grid
//             size={{xs:12,md:6}}
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <Paper
//                 elevation={3}
//                 sx={{
//                   borderRadius: 3,
//                   p: 3,
//                   minHeight: "360px",
//                   backgroundColor: "rgba(255,255,255,0.95)",
//                   transition: "0.3s",
//                   "&:hover": {
//                     boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{
//                     color: "#19685B",
//                     fontWeight: 550,
//                     fontSize: "30px",
//                   }}
//                 >
//                   {service.title}
//                 </Typography>
//                 <Typography
//                   color="textSecondary"
//                   sx={{ mb: 2, fontSize: "23px", fontWeight: 300 }}
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
//                             sx={{ color: "#19685B", height: "16px" }}
//                           />
//                         </ListItemIcon>
//                         <ListItemText
//                           primaryTypographyProps={{
//                             fontSize: "15px",
//                             fontWeight: 300,
//                           }}
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
import { ArrowForward, Circle } from "@mui/icons-material";
import { green } from "@/components/utils/Utils";
import Image from "next/image";
import Link from "next/link";

// const services = [
//   {
//     title: "ACCOUNTING SERVICES",
//     description:
//       "We are a well-established and registered accounting service provider serving businesses in UAE and Other GCC Countries.",
//     points: [
//       "Accounting & Bookkeeping",
//       "VAT and Corporate Tax Consultancy",
//       "IFRS Technical Accounting Advisory",
//     ],
//     icon: "/ac1.png"
//   },
//   {
//     title: "FINANCIAL & BUSINESS STRATEGY",
//     description:
//       "At FnA, we specialize in providing strategic services that help you navigate challenges and seize opportunities.",
//     points: ["Strategic Planning"],
//     icon: "/ac2.png"

//   },
//   {
//     title: "FINANCIAL, PLANING & ANALYSIS",
//     description:
//       "We provide comprehensive Financial Planning and Analysis & services to help drive your business’s strategic goals.",
//     points: ["Budgeting And Forecasting", "Management Packs"],
//     icon: "/ac3.png"

//   },
//     {
//     title: "Business Feasibility Studies",
//     description:
//       "Know before you grow. We assess if your business idea or investment is commercially viable.",
//     points: ["Market research and competitor analysis", "Start-up cost and break-even analysis","ROI projections and funding strategy"],
//     icon: "/ac3.png"

//   },
// ];
const services = [
  {
    title: "Accounting Services in the UAE",
    description:
      "Expert accounting and tax solutions for businesses across Dubai, Abu Dhabi, and the GCC.We help you stay compliant and confident in your numbers.",
    points: [
      "Bookkeeping and day-to-day accounting",
      "VAT registration and filing, corporate tax advisory",
      "IFRS financial reporting and technical accounting support",
    ],
    icon: "/ac1.png",
    route:"/accounting-services"
  },
  {
    title: "Financial Planning & Analysis (FP&A) Services",
    description:
      "Drive smarter decisions with clear forecasts, reports, and analysis.Ideal for startups, SMEs, and high-growth businesses in the UAE.",
    points: ["Budgeting and financial forecasting","Monthly management packs with business insights","Custom dashboards and KPIs"],
    icon: "/ac2.png",
     route:"/financial-planning"

  },
  {
    title: "Strategic Financial & Business Advisory",
    description:
      "Plan for long-term success with expert business and financial strategy.",
    points: ["Business model design and scenario planning", "Strategic financial roadmaps" ,"Support for funding, scaling, or restructuring"],
    icon: "/ac3.png",
     route:"/strategic-financial"

  },
  {
    title: " Fractional CEO and CFO Services",
    description:
      "Get senior executive support without hiring full-time.Perfect for fast-growing companies and founders in need of leadership.",
    points: ["Interim CFO or CEO advisory in UAE/GCC", "Investor and board reporting","Cash flow and growth management"],
    icon: "/ac3.png",
     route:"/ceo-cfo-services"

  },
  {
    title: "Business Feasibility Studies",
    description:
      "Know before you grow. We assess if your business idea or investment is commercially viable.",
    points: ["Market research and competitor analysis", "Start-up cost and break-even analysis","ROI projections and funding strategy"],
    icon: "/ac3.png",
     route:"/business-feasibility"

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
        py: 8,
        px: 2,
        minHeight: "100vh",
        backgroundImage: "url('/servicesBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* <Box textAlign="center" mb={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#005430",
              borderRadius: "999px",
              border: "1px solid #c3d5cd",
              px: 2,
              py: 1,
              fontSize: "22px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#155c51",
              },
            }}
          >
            Our Services
          </Button>
        </Box> */}
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={5} flexDirection={["column", "column", "row"]}>
          <Typography fontSize={"40px"} fontWeight={600} color="white" maxWidth={"550px"} my={1}>
            Services That Simplify Your Accounting
          </Typography>
          <Typography fontWeight={400} fontSize={"20px"} color="white" maxWidth={"450px"} my={1}>
            From bookkeeping and tax filing to payroll and financial planning, our expert services are designed to save your time, reduce errors.
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems={"center"} justifyContent={"center"}>
          {services.map((service, index) => (
             <Grid
              size={{ xs: 12, md: 4 }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              key={index}
            >
         <Link href={service.route}>
           
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "32px",
                  p: 3,
                  border: `2px solid white`,
                  minHeight: "480px",
                  backgroundColor: "white",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    border: `2px solid ${green}`,
                    cursor: "pointer"
                  },
                }}
              >
                <Box bgcolor={green} height={"50px"} width={"50px"} borderRadius={"100px"} p={2} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Image
                    src={service.icon}
                    alt="no icon"
                    height={30}
                    width={30}

                  />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: 1,
                    // color: "#19685B",
                    color: green,
                    fontWeight: 550,
                    fontSize: "25px",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mb: 2, fontSize: "15px", fontWeight: 300 }}
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
                            sx={{ color: green, height: "16px" }}
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
                {/* <Button variant="outlined"  color="inherit" size="small" href={service.route}>
                 details
                </Button> */}
              </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} sx={{ mt: 4 }}>
          <Button sx={{ textTransform: "none", bgcolor: "white", color: "black", borderRadius: "47px", px: 2, fontSize: "15px", fontWeight: 400 }}
            endIcon={<ArrowForward sx={{ fontSize: "10px" }} />} href="/our-services">
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
