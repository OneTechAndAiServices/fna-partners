// 'use client';

// import React from 'react';
// import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { gray, green } from '@/components/utils/Utils';

// const services = [
//   "Develop a chart of accounts tailored to the company’s structure and management needs.",
//   "Prepare and verify the balance sheet as of the management-approved cut-off date.",
//   "Establish procedures to ensure accurate recording of financial transactions.",
//   "Provide clients with guidance on inventory management.",
//   "Record monthly transactions, including sales, expenses, and bank entries.",
//   "Post monthly entries such as depreciation, accruals, and prepaid expenses before closing the accounts.",
//   "Evaluate financial statements for accuracy and completeness.",
//   "Generate management information system (MIS) reports as requested, including aging reports, cost center analyses, and revenue and cost trend analyses.",
// ];

// function SpecializedServices() {
//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
//       <Grid container spacing={4}>
//         <Grid size={{xs:12,md:4}}>
//           <Typography variant="h5" sx={{ color: green, fontWeight: 500 ,fontSize:"30px",mt:4}}>
//             Our Range of Specialized<br />Services Includes:
//           </Typography>
//         </Grid>
//         <Grid size={{xs:12,md:8}}>
//           <Grid container spacing={2}>
//             <Grid size={{xs:12,md:6}}>
//               <List dense>
//                 {services.slice(0, 5).map((service, index) => (
//                   <ListItem key={index} disableGutters>
//                     <ListItemIcon sx={{ minWidth: 40, color: green }}>
//                       <ChevronRightIcon  sx={{fontSize:"29px"}}/>
//                     </ListItemIcon>
//                     <ListItemText primaryTypographyProps={{ fontSize: "15px" ,color:gray}} >
//                       {service}
//                     </ListItemText>
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//             <Grid size={{xs:12,md:6}}>
//               <List dense>
//                 {services.slice(5).map((service, index) => (
//                   <ListItem key={index + 5} disableGutters>
//                     <ListItemIcon sx={{ minWidth: 40, color: green }}>
//                       <ChevronRightIcon sx={{fontSize:"29px"}} />
//                     </ListItemIcon>
//                     <ListItemText primaryTypographyProps={{ fontSize: "15px" ,color:gray }}>
//                       {service}
//                     </ListItemText>
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default SpecializedServices;
'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { gray, green } from '@/components/utils/Utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

const services = [
  "Develop a chart of accounts tailored to the company’s structure and management needs.",
  "Prepare and verify the balance sheet as of the management-approved cut-off date.",
  "Establish procedures to ensure accurate recording of financial transactions.",
  "Provide clients with guidance on inventory management.",
  "Record monthly transactions, including sales, expenses, and bank entries.",
  "Post monthly entries such as depreciation, accruals, and prepaid expenses before closing the accounts.",
  "Evaluate financial statements for accuracy and completeness.",
  "Generate management information system (MIS) reports as requested, including aging reports, cost center analyses, and revenue and cost trend analyses.",
];

function SpecializedServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const ctx = gsap.context(() => {
      gsap.from(".gsap-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff' }}>
      <Grid container spacing={4}>
        <Grid size={{xs:12,md:4}}  data-aos="fade-up">
          <Typography variant="h5" sx={{ color: green, fontWeight: 500, fontSize: "30px", mt: 4 }}>
            Our Range of Specialized<br />Services Includes:
          </Typography>
        </Grid>

        <Grid size={{xs:12,md:8}}>
          <Grid container spacing={2}>
            <Grid size={{xs:12,md:6}} data-aos="fade-up" data-aos-delay="100">
              <List dense>
                {services.slice(0, 5).map((service, index) => (
                  <ListItem key={index} disableGutters className="gsap-item">
                    <ListItemIcon sx={{ minWidth: 40, color: green }}>
                      <ChevronRightIcon sx={{ fontSize: "29px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "15px", color: gray }}
                    >
                      {service}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid size={{xs:12,md:6}} data-aos="fade-up" data-aos-delay="200">
              <List dense>
                {services.slice(5).map((service, index) => (
                  <ListItem key={index + 5} disableGutters className="gsap-item">
                    <ListItemIcon sx={{ minWidth: 40, color: green }}>
                      <ChevronRightIcon sx={{ fontSize: "29px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "15px", color: gray }}
                    >
                      {service}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SpecializedServices;
