// 'use client';

// import React from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';

// function VatConsultant() {
//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
//       <Grid container spacing={4} alignItems="center">
     
//         <Grid  size={{xs:12,md:7}}>
//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 500, fontSize:"30px", mb: 2 }}
//           >
//             VAT And Corporate Tax Consultancy
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//             At our firm, we specialize in assisting individuals and companies with tax filings and returns, focusing on minimizing tax liabilities while ensuring compliance with government regulations. We provide expert guidance tailored to your needs, offering services in two key areas: Individual Tax and Corporate Tax.
//             <br />
//             Our goal is to help you reduce your tax burden through detailed reviews, applying deductions and credits, and offering advice based on your financial situation. We simplify complex tax policies, ensuring smooth and accurate filing to maximize your tax efficiency.
//             <br />
//             Our team stays current on tax regulations, managing your tax matters efficiently and helping you navigate various income sources. We aim to make tax management stress-free, ensuring timely filings, preventing costly errors, and safeguarding your assets, so you can focus on growing your business.
//           </Typography>
//         </Grid>

    
//         <Grid size={{xs:12,md:5}}>
//           <Box
//             sx={{
//               borderRadius: 4,
//               overflow: 'hidden',
//               width: '100%',
//               maxWidth: 400,
//               mx: 'auto',
//             }}
//           >
//             <Image
//               src="/vat.png"
//               alt="VAT Consultancy"
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

// export default VatConsultant;


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { gsap } from 'gsap';

// function VatConsultant() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });

//     const ctx = gsap.context(() => {
//       gsap.from('.gsap-vat', {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//         stagger: 0.2,
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <Box ref={containerRef} sx={{ px: { xs: 2, md: 10 }, py: 1 }}>
//       <Grid container spacing={4} alignItems="center" sx={{px:4,borderRadius:"10px",py:2}}>
      
//         <Grid size={{xs:12,md:7}} data-aos="fade-right">
//           <Typography
//             variant="h5"
//             className="gsap-vat"
//             sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
//           >
//            VAT & Corporate Tax Services in the UAE
//           </Typography>
//           <Typography className="gsap-vat" sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
//             At our firm, we specialize in assisting individuals and companies with tax filings and returns, focusing on minimizing tax liabilities while ensuring compliance with government regulations. We provide expert guidance tailored to your needs, offering services in two key areas: Individual Tax and Corporate Tax.
//             <br />
//             Our goal is to help you reduce your tax burden through detailed reviews, applying deductions and credits, and offering advice based on your financial situation. We simplify complex tax policies, ensuring smooth and accurate filing to maximize your tax efficiency.
//             <br />
//             Our team stays current on tax regulations, managing your tax matters efficiently and helping you navigate various income sources. We aim to make tax management stress-free, ensuring timely filings, preventing costly errors, and safeguarding your assets, so you can focus on growing your business.
//           </Typography>
//         </Grid>

//         <Grid size={{xs:12,md:5}} data-aos="fade-left">
//           <Box
//             className="gsap-vat"
//             sx={{
//               borderRadius: 4,
//               overflow: 'hidden',
//               width: '100%',
//               maxWidth: 400,
//               mx: 'auto',
//             }}
//           >
//             <Image
//               src="/vat.png"
//               alt="VAT Consultancy"
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

// export default VatConsultant;
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
} from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

// MUI Icons
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function VatConsultant() {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const ctx = gsap.context(() => {
      gsap.from('.gsap-vat', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={containerRef} sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Grid container spacing={4} alignItems="center" sx={{ px: 4, borderRadius: '10px', py: 2 }}>
        <Grid size={{xs:12,md:7}} data-aos="fade-right">
          <Typography
            variant="h5"
            className="gsap-vat"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
          >
            💼 VAT & Corporate Tax Services in the UAE
          </Typography>

          <Typography className="gsap-vat" sx={{ color: gray, fontSize: '17px', lineHeight: 1.8, mb: 2 }}>
            Staying compliant with evolving tax laws is critical for every business. FnA Partners provides expert VAT consultancy and corporate tax advisory to help UAE-based businesses file returns, manage obligations, and optimise their tax position.
          </Typography>

          <Typography fontSize={"20px"} fontWeight={500} color={green} className="gsap-vat" mb={1}>
            📌 Our tax services cover:
          </Typography>

          <List>
            <ListItem className="gsap-vat">
              <ListItemIcon><AssignmentIcon color="success" /></ListItemIcon>
              <ListItemText primary="VAT registration and return filing with the UAE Federal Tax Authority" />
            </ListItem>

            <ListItem className="gsap-vat">
              <ListItemIcon><BusinessIcon color="success" /></ListItemIcon>
              <ListItemText primary="Corporate tax return preparation and filing for UAE mainland and free zone entities" />
            </ListItem>

            <ListItem className="gsap-vat">
              <ListItemIcon><LightbulbIcon color="success" /></ListItemIcon>
              <ListItemText primary="Identifying eligible tax deductions and credits to reduce liabilities" />
            </ListItem>

            <ListItem className="gsap-vat">
              <ListItemIcon><PublicIcon color="success" /></ListItemIcon>
              <ListItemText primary="Cross-border tax structuring and advisory for businesses with international operations" />
            </ListItem>

            <ListItem className="gsap-vat">
              <ListItemIcon><SearchIcon color="success" /></ListItemIcon>
              <ListItemText primary="Tax record reviews to prevent penalties and audit risks" />
            </ListItem>

            <ListItem className="gsap-vat">
              <ListItemIcon><TrendingUpIcon color="success" /></ListItemIcon>
              <ListItemText primary="Ongoing monitoring of tax law changes to ensure continued compliance" />
            </ListItem>
          </List>

          <Typography className="gsap-vat" sx={{ color: gray, fontSize: '16px', mt: 2 }}>
            We simplify complex tax policies, enabling smooth, accurate, and timely filings — so you can focus on what matters most: running your business.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid size={{xs:12,md:5}} data-aos="fade-left">
          <Box
            className="gsap-vat"
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <Image
              src="/vat.png"
              alt="VAT Consultancy"
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

export default VatConsultant;
