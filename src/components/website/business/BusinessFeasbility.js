// 'use client';

// import React from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';

// function BusinessFeasbility() {
//     return (
//         <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
//               <Box bgcolor={"#005430"} p={1} borderRadius={10} maxWidth={"350px"} textAlign={"center"} px={2} mx={"auto"} mb={7} fontSize={"500"}>
//                             <Typography color='white' fontSize={"22px"}>
//                                 Business Feasibility Studies

//                             </Typography>
//                         </Box>
//             <Grid container spacing={4} alignItems="center">

//                 <Grid size={{ xs: 12, md: 7 }}>
//                     <Typography
//                         variant="h5"
//                         sx={{ color: green, fontWeight: 500, fontSize: "30px", mb: 2 }}
//                     >
//                         Market Analysis
//                     </Typography>
//                     <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//                         Thorough market analyses assess the viability of new ventures or product launches, evaluating market trends, competition, and customer demand to clarify potential opportunities and risks.
//                         <br />
//                         <br />

//                     </Typography>
//                     <Typography
//                         variant="h5"
//                         sx={{ color: green, fontWeight: 500, fontSize: "30px", mb: 2 }}
//                     >
//                         Financial Projections
//                     </Typography>
//                     <Typography sx={{ color: gray, fontSize: "17px", lineHeight: 1.8 }}>
//                         Detailed financial projections forecast revenue, expenses, and profitability, helping to understand the financial implications of strategic decisions and ensuring plans are financially sound.
//                         <br />
//                         Strategic services provide insights, plans, and support necessary to navigate complex business environments and achieve strategic goals. Partnering with FnA enables the development and execution of effective strategies that drive businesses forward.


//                     </Typography>
//                 </Grid>


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
//                             src="/business.png"
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
//             </Grid>
//         </Box>
//     );
// }

// export default BusinessFeasbility;
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';

function BusinessFeasbility() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust to 500 for fast, 1200+ for slower effect
      once: true,     // Animation runs only once per scroll
    });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
      {/* Heading */}
      <Box
        bgcolor={'#005430'}
        p={1}
        borderRadius={10}
        maxWidth={'350px'}
        textAlign={'center'}
        px={2}
        mx={'auto'}
        mb={7}
        fontSize={'500'}
        data-aos="zoom-in"
      >
        <Typography color="white" fontSize={'22px'}>
          Business Feasibility Studies
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center">
        <Grid  size={{xs:12,md:7}} data-aos="fade-right">
          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
          >
            Market Analysis
          </Typography>
          <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
            Thorough market analyses assess the viability of new ventures or product
            launches, evaluating market trends, competition, and customer demand to
            clarify potential opportunities and risks.
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 500, fontSize: '30px', mt: 4, mb: 2 }}
          >
            Financial Projections
          </Typography>
          <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
            Detailed financial projections forecast revenue, expenses, and profitability,
            helping to understand the financial implications of strategic decisions and
            ensuring plans are financially sound.
            <br />
            Strategic services provide insights, plans, and support necessary to navigate
            complex business environments and achieve strategic goals. Partnering with FnA
            enables the development and execution of effective strategies that drive
            businesses forward.
          </Typography>
        </Grid>

      
        <Grid size={{xs:12,md:5}} data-aos="fade-left">
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
              src="/business.png"
              alt="Business Feasibility"
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

export default BusinessFeasbility;
