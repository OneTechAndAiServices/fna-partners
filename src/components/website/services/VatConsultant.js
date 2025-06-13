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
'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

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
    <Box ref={containerRef} sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
      <Grid container spacing={4} alignItems="center">
      
        <Grid size={{xs:12,md:7}} data-aos="fade-right">
          <Typography
            variant="h5"
            className="gsap-vat"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
          >
            VAT And Corporate Tax Consultancy
          </Typography>
          <Typography className="gsap-vat" sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
            At our firm, we specialize in assisting individuals and companies with tax filings and returns, focusing on minimizing tax liabilities while ensuring compliance with government regulations. We provide expert guidance tailored to your needs, offering services in two key areas: Individual Tax and Corporate Tax.
            <br />
            Our goal is to help you reduce your tax burden through detailed reviews, applying deductions and credits, and offering advice based on your financial situation. We simplify complex tax policies, ensuring smooth and accurate filing to maximize your tax efficiency.
            <br />
            Our team stays current on tax regulations, managing your tax matters efficiently and helping you navigate various income sources. We aim to make tax management stress-free, ensuring timely filings, preventing costly errors, and safeguarding your assets, so you can focus on growing your business.
          </Typography>
        </Grid>

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
