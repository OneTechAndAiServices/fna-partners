// 'use client';

// import React from 'react';
// import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { green } from '@/components/utils/Utils';

// function Ifrs() {
//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
//       <Typography
//         variant="h5"
//         align="center"
//         sx={{ color: green, fontWeight: 500, mb: 2,fontSize:"30px" }}
//       >
//         IFRS Technical Accounting Advisory
//       </Typography>

//       <Typography
//         align="center"
//         sx={{
//           maxWidth: 800,
//           mx: 'auto',
//           color: '#555',
//           fontSize: "15px",
//           lineHeight: 1.8,
//           mb: 6,
//         }}
//       >
//         Navigating the complexities of International Financial Reporting Standards (IFRS) can be challenging. Our firm provides expert advice and support to help you adhere to these global accounting standards with confidence.
//         <br />
//         We offer comprehensive technical accounting guidance, ensuring that your financial statements are accurate and compliant with IFRS requirements.
//       </Typography>

   
//       <Grid container spacing={4}>
     
//         <Grid size={{xs:12,md:4}}>
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Our services include
//           </Typography>
//           <List dense>
//             {[
//               "IFRS Implementation and Compliance: We help you implement IFRS standards effectively and ensure that your financial reporting meets all regulatory requirements.",
//               "Technical Accounting Support: Our team provides expert advice on complex accounting issues, helping you interpret and apply IFRS principles accurately.",
//               "Financial Statement Review: We review your financial statements to ensure they align with IFRS, providing recommendations for improvements where necessary.",
//             ].map((text, index) => (
//               <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
//                 <ListItemIcon sx={{ color: green, minWidth: 30, pt: 0.5 }}>
//                   <ChevronRightIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   primaryTypographyProps={{
//                     fontSize: 14,
//                     lineHeight: 1.6,
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>

    
//         <Grid size={{xs:12,md:4}}>
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Budget Development
//           </Typography>
//           <List dense>
//             <ListItem disableGutters>
//               <ListItemIcon sx={{ color: green, minWidth: 30 }}>
//                 <ChevronRightIcon />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Comprehensive Budget Development"
//                 secondary="A detailed budget is created that aligns with your business objectives, ensuring all financial aspects are accounted for."
//                 primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
//                 secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//               />
//             </ListItem>

//             <ListItem disableGutters>
//               <ListItemIcon sx={{ color: green, minWidth: 30 }}>
//                 <ChevronRightIcon />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Precise Cost Allocation"
//                 secondary="Accurate cost allocation across departments enhances financial control and efficiency, supporting better decision-making."
//                 primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
//                 secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//               />
//             </ListItem>

//             <ListItem disableGutters>
//               <ListItemIcon sx={{ color: green ,minWidth: 30 }}>
//                 <ChevronRightIcon />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Effective Budget Presentations"
//                 secondary="Clear and insightful presentations communicate financial plans effectively, helping stakeholders understand and engage with the strategy."
//                 primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
//                 secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//               />
//             </ListItem>
//           </List>
//         </Grid>

  
//         <Grid size={{xs:12,md:4}}>
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Forecasting
//           </Typography>
//           <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
//             Revenue & Expense
//           </Typography>
//           <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7, mb: 2 }}>
//             Forecasting accurate forecasts for revenue and expenses empower anticipation of future financial performance. This insight facilitates proactive decision-making and strategic adjustments, ensuring preparedness for upcoming challenges.
//           </Typography>

//           <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
//             Scenario Analysis
//           </Typography>
//           <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
//             Through scenario analyses assess various potential outcomes, aiding in effective strategic planning. By evaluating different financial scenarios, the implications of various decisions are clarified, enabling navigation of uncertainty and seizing growth opportunities.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Ifrs;



// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import {
//   Box,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { green } from '@/components/utils/Utils';

// function Ifrs() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
//       <Typography
//         variant="h5"
//         align="center"
//         data-aos="fade-up"
//         sx={{ color: green, fontWeight: 500, mb: 2, fontSize: '30px' }}
//       >
//         IFRS Technical Accounting Advisory
//       </Typography>

//       <Typography
//         align="center"
//         data-aos="fade-up"
//         data-aos-delay="100"
//         sx={{
//           maxWidth: 800,
//           mx: 'auto',
//           color: '#555',
//           fontSize: '15px',
//           lineHeight: 1.8,
//           mb: 6,
//         }}
//       >
//         Navigating the complexities of International Financial Reporting Standards (IFRS) can be challenging. Our firm provides expert advice and support to help you adhere to these global accounting standards with confidence.
//         <br />
//         We offer comprehensive technical accounting guidance, ensuring that your financial statements are accurate and compliant with IFRS requirements.
//       </Typography>

//       <Grid container spacing={4}>
//         <Grid  size={{xs:12,md:4}} data-aos="fade-right">
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Our services include
//           </Typography>
//           <List dense>
//             {[
//               'IFRS Implementation and Compliance: We help you implement IFRS standards effectively and ensure that your financial reporting meets all regulatory requirements.',
//               'Technical Accounting Support: Our team provides expert advice on complex accounting issues, helping you interpret and apply IFRS principles accurately.',
//               'Financial Statement Review: We review your financial statements to ensure they align with IFRS, providing recommendations for improvements where necessary.',
//             ].map((text, index) => (
//               <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
//                 <ListItemIcon sx={{ color: green, minWidth: 30, pt: 0.5 }}>
//                   <ChevronRightIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   primaryTypographyProps={{
//                     fontSize: 14,
//                     lineHeight: 1.6,
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>

//         <Grid size={{xs:12,md:4}} data-aos="fade-up">
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Budget Development
//           </Typography>
//           <List dense>
//             {[
//               {
//                 primary: 'Comprehensive Budget Development',
//                 secondary:
//                   'A detailed budget is created that aligns with your business objectives, ensuring all financial aspects are accounted for.',
//               },
//               {
//                 primary: 'Precise Cost Allocation',
//                 secondary:
//                   'Accurate cost allocation across departments enhances financial control and efficiency, supporting better decision-making.',
//               },
//               {
//                 primary: 'Effective Budget Presentations',
//                 secondary:
//                   'Clear and insightful presentations communicate financial plans effectively, helping stakeholders understand and engage with the strategy.',
//               },
//             ].map((item, idx) => (
//               <ListItem key={idx} disableGutters>
//                 <ListItemIcon sx={{ color: green, minWidth: 30 }}>
//                   <ChevronRightIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={item.primary}
//                   secondary={item.secondary}
//                   primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
//                   secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>

//         <Grid size={{xs:12,md:4}} data-aos="fade-left">
//           <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
//             Forecasting
//           </Typography>

//           <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
//             Revenue & Expense
//           </Typography>
//           <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7, mb: 2 }}>
//             Forecasting accurate forecasts for revenue and expenses empower anticipation of future financial performance. This insight facilitates proactive decision-making and strategic adjustments, ensuring preparedness for upcoming challenges.
//           </Typography>

//           <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
//             Scenario Analysis
//           </Typography>
//           <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
//             Through scenario analyses assess various potential outcomes, aiding in effective strategic planning. By evaluating different financial scenarios, the implications of various decisions are clarified, enabling navigation of uncertainty and seizing growth opportunities.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Ifrs;
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { green } from '@/components/utils/Utils';
import ContactIFRS from './ContactIFRS';

function Ifrs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
      <Typography
        variant="h5"
        align="center"
        data-aos="fade-up"
        sx={{ color: green, fontWeight: 500, mb: 2, fontSize: '30px' }}
      >
        🌐 IFRS Technical Accounting Advisory
      </Typography>

      <Typography
        align="center"
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          color: '#555',
          fontSize: '15px',
          lineHeight: 1.8,
          mb: 6,
        }}
      >
        For businesses reporting under International Financial Reporting Standards (IFRS), navigating the technical landscape can be complex. FnA Partners offers in-depth IFRS advisory services to ensure compliance and accuracy in financial reporting.
        <br /><br />
        We help finance teams apply IFRS correctly, reduce audit risks, and strengthen stakeholder confidence in financial reporting.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12,md:4}} data-aos="fade-right">
          <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
             Our IFRS support includes:
          </Typography>
          <List dense>
            {[
              ' IFRS implementation and transition support from local GAAP',
              ' Technical accounting advice for complex transactions (leases, revenue recognition, instruments)',
              ' Preparation of memos and documentation for auditors and regulators',
              ' Financial statement reviews to ensure full IFRS compliance',
              ' Expert guidance on IFRS 9, 15, 16, and other evolving standards',
            ].map((text, index) => (
              <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ color: green, minWidth: 30, pt: 0.5 }}>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid size={{xs:12,md:4}} data-aos="fade-up">
          <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
            Budget Development
          </Typography>
          <List dense>
            {[
              {
                primary: 'Comprehensive Budget Development',
                secondary:
                  'A detailed budget is created that aligns with your business objectives, ensuring all financial aspects are accounted for.',
              },
              {
                primary: 'Precise Cost Allocation',
                secondary:
                  'Accurate cost allocation across departments enhances financial control and efficiency, supporting better decision-making.',
              },
              {
                primary: 'Effective Budget Presentations',
                secondary:
                  'Clear and insightful presentations communicate financial plans effectively, helping stakeholders understand and engage with the strategy.',
              },
            ].map((item, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemIcon sx={{ color: green, minWidth: 30 }}>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.6 }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid size={{xs:12,md:4}} data-aos="fade-left">
          <Typography variant="h6" sx={{ color: green, fontWeight: 600, mb: 2 }}>
            Forecasting
          </Typography>

          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
            Revenue & Expense
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7, mb: 2 }}>
            Forecasting accurate forecasts for revenue and expenses empower anticipation of future financial performance. This insight facilitates proactive decision-making and strategic adjustments, ensuring preparedness for upcoming challenges.
          </Typography>

          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
            Scenario Analysis
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
            Through scenario analyses assess various potential outcomes, aiding in effective strategic planning. By evaluating different financial scenarios, the implications of various decisions are clarified, enabling navigation of uncertainty and seizing growth opportunities.
          </Typography>
        </Grid>
      </Grid>

          <Typography
        variant="h5"
        align="center"
        data-aos="fade-up"
        maxWidth={"1100px"}
        mx={"auto"}
        mt={3}
        sx={{ color: green, fontWeight: 500, mb: 2, fontSize: '30px' }}
      >
      We help finance teams apply IFRS correctly, reduce audit risks, and strengthen stakeholder confidence in financial reporting.
      </Typography>

<ContactIFRS/>
    </Box>
  );
}

export default Ifrs;
