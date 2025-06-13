// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';

// function StrategicPlanning() {
//      useEffect(() => {
//     AOS.init({
//       duration: 1000, // adjust to 500 for faster, 1200+ for smoother
//       once: true,     // animation runs only once
//     });
//   }, []);
//     return (
//         <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
//             <Box bgcolor={"#005430"} p={1} borderRadius={10} maxWidth={"250px"} textAlign={"center"} px={2} mx={"auto"} mb={7} fontSize={"500"}>
//                 <Typography color='white' fontSize={"22px"}   data-aos="zoom-in">
//                     Strategic Planning
//                 </Typography>
//             </Box>
//             <Grid container spacing={4} alignItems="center">
//      <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
//                     <Box
//                         sx={{
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             width: '100%',
//                             maxWidth: 400,
//                             mx: 'auto',
//                         }}
//                     >
//                         <Image
//                             src="/strategic.png"
//                             alt="VAT Consultancy"
//                             width={500}
//                             height={500}
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 borderRadius: '20px',
//                             }}
//                         />
//                     </Box>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
//                     <Typography
//                         variant="h5"
//                         sx={{ color: green, fontWeight: 500, fontSize: "30px", mb: 2 }}
//                     >
//                     Goal Setting and Alignment
//                     </Typography>
//                     <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//                         Clear business objectives are defined, aligning strategies with these goals. Services include establishing measurable targets and developing roadmaps to track progress, ensuring alignment with the overall business strategy.
//                         <br />
//                         <br />

//                     </Typography>
//                     <Typography
//                         variant="h5"
//                         sx={{ color: green, fontWeight: 500, fontSize: "30px", mb: 2 }}
//                     >
//                        Customized Strategy Development
//                     </Typography>
//                     <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//                       Tailored strategic plans are developed to align with business goals and vision, ensuring practicality and actionable outcomes. A comprehensive 3-5 year strategic roadmap guides the organization towards its objectives, identifying key milestones, resource allocation, and risk management strategies for sustained growth.

                    


//                     </Typography>
//                 </Grid>


           
//             </Grid>
//         </Box>
//     );
// }

// export default StrategicPlanning;
 'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';

function StrategicPlanning() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // adjust to 500 for faster, 1200+ for smoother
      once: true,     // animation runs only once
    });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
      <Box
        bgcolor={'#005430'}
        p={1}
        borderRadius={10}
        maxWidth={'250px'}
        textAlign={'center'}
        px={2}
        mx={'auto'}
        mb={7}
        fontSize={'500'}
        data-aos="zoom-in"
      >
        <Typography color="white" fontSize={'22px'}>
          Strategic Planning
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center">
        <Grid  size={{xs:12,md:5}} data-aos="fade-right">
          <Box
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <Image
              src="/strategic.png"
              alt="Strategic Planning"
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

        <Grid size={{xs:12,md:7}} data-aos="fade-left">
          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
          >
            Goal Setting and Alignment
          </Typography>
          <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
            Clear business objectives are defined, aligning strategies with these goals.
            Services include establishing measurable targets and developing roadmaps to
            track progress, ensuring alignment with the overall business strategy.
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', my: 3 }}
          >
            Customized Strategy Development
          </Typography>
          <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
            Tailored strategic plans are developed to align with business goals and vision,
            ensuring practicality and actionable outcomes. A comprehensive 3–5 year
            strategic roadmap guides the organization towards its objectives, identifying
            key milestones, resource allocation, and risk management strategies for
            sustained growth.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StrategicPlanning;
