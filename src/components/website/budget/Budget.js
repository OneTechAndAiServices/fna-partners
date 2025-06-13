// 'use client';

// import React from 'react';
// import { Box, Grid, Icon, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// function Budget() {
//     return (
//         <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }} maxWidth={"1200px"} mx="auto">
//             <Grid container spacing={4} alignItems="center">


//                 <Grid size={{ xs: 12, md: 5 }}>
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
//                             src="/budget.png"
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
//                 <Grid size={{ xs: 12, md: 7 }}>
//                     <Typography
//                         variant="h5"
//                         sx={{ color: green, fontWeight: 500, fontSize: "30px", mb: 1 }}
//                     >
//                       Budget Development

//                     </Typography>
//                 <Box display={"flex"} my={2}>
//                         <Icon>
//                         <ArrowForwardIosOutlinedIcon sx={{fontSize:18}}/>
//                     </Icon>
//                     <Box display={"flex"} flexDirection={"column"}>
//                            <Typography
//                         variant="h5"
//                         sx={{ color: "black", fontWeight: 500, fontSize: "22px", mb: 1 }}
//                     >
//                       Budget Monitoring

//                     </Typography>
//                     <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//                       Variance Analysis Monitor actual performance against the budget, identifying variances and providing actionable insights to address discrepancies. This approach enables you to understand the reasons behind deviations and implement necessary corrective measures to stay on track with your financial goals.

//                         <br />
//                         <br />

//                     </Typography>
//                     </Box>
//                 </Box>
              
//                 </Grid>

//             </Grid>
//         </Box>
//     );
// }

// export default Budget;
 'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Grid, Icon, Typography } from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Budget() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // speed: 1000ms (change to 500 for faster)
      once: true,     // trigger once only
    });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }} maxWidth={'1200px'} mx="auto">
      <Grid container spacing={4} alignItems="center">
        <Grid  size={{xs:12,md:5}}  data-aos="fade-right">
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
              src="/budget.png"
              alt="Budget Consultancy"
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
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 1 }}
          >
            Budget Development
          </Typography>

          <Box display={'flex'} my={2}>
            <Icon>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
            </Icon>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography
                variant="h5"
                sx={{ color: 'black', fontWeight: 500, fontSize: '22px', mb: 1 }}
              >
                Budget Monitoring
              </Typography>
              <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
                Variance Analysis Monitor actual performance against the budget,
                identifying variances and providing actionable insights to address
                discrepancies. This approach enables you to understand the reasons
                behind deviations and implement necessary corrective measures to stay
                on track with your financial goals.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Budget;
