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



//  'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';

// function StrategicPlanning() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // adjust to 500 for faster, 1200+ for smoother
//       once: true,     // animation runs only once
//     });
//   }, []);

//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
//       <Box
//         bgcolor={'#005430'}
//         p={1}
//         borderRadius={10}
//         maxWidth={'250px'}
//         textAlign={'center'}
//         px={2}
//         mx={'auto'}
//         mb={7}
//         fontSize={'500'}
//         data-aos="zoom-in"
//       >
//         <Typography color="white" fontSize={'22px'}>
//           Strategic Planning
//         </Typography>
//       </Box>

//       <Grid container spacing={4} alignItems="center">
//         <Grid  size={{xs:12,md:5}} data-aos="fade-right">
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
//               src="/strategic.png"
//               alt="Strategic Planning"
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

//         <Grid size={{xs:12,md:7}} data-aos="fade-left">
//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 500, fontSize: '30px', mb: 2 }}
//           >
//             Goal Setting and Alignment
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
//             Clear business objectives are defined, aligning strategies with these goals.
//             Services include establishing measurable targets and developing roadmaps to
//             track progress, ensuring alignment with the overall business strategy.
//           </Typography>

//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 500, fontSize: '30px', my: 3 }}
//           >
//             Customized Strategy Development
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: '17px', lineHeight: 1.8 }}>
//             Tailored strategic plans are developed to align with business goals and vision,
//             ensuring practicality and actionable outcomes. A comprehensive 3–5 year
//             strategic roadmap guides the organization towards its objectives, identifying
//             key milestones, resource allocation, and risk management strategies for
//             sustained growth.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default StrategicPlanning;
// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Image from 'next/image';
// import { gray, green } from '@/components/utils/Utils';
// import { useRouter } from 'next/navigation';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// function StrategicPlanning() {
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>
//       <Box
//         bgcolor={'#005430'}
//         p={1.5}
//         borderRadius={10}
//         maxWidth={'480px'}
//         textAlign={'center'}
//         px={3}
//         mx={'auto'}
//         mb={6}
//         data-aos="zoom-in"
//       >
//         <Typography color="white" fontSize={'22px'} fontWeight={500}>
//           📌 Strategic Services & Fractional CFO Support in Dubai and the UAE
//         </Typography>
//       </Box>

//       <Grid container spacing={6} alignItems="center">
//         <Grid item xs={12} md={5} data-aos="fade-right">
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
//               src="/strategic.png"
//               alt="Strategic Planning"
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

//         <Grid item xs={12} md={7} data-aos="fade-left">
//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 600, fontSize: '28px', mb: 2 }}
//           >
//             👨💼 Fractional CFO Services in the UAE
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 3 }}>
//             Access expert financial leadership — without the cost of a full-time hire. Our fractional CFO services offer:
//             💰 Cash flow forecasting, 🧭 Strategic planning, 📉 Cost control, 💼 Fundraising support, 🔄 Financial system setup, 📊 Dashboards and reporting.
//           </Typography>

//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 600, fontSize: '28px', mb: 2 }}
//           >
//             🧠 Strategic Planning Services
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 3 }}>
//             We build custom 3–5 year strategic plans including:
//             🧩 Strategy development, 🎯 Goal setting, 🗺️ Roadmaps with resources and timelines, 🧾 KPI tracking frameworks.
//           </Typography>

//           <Typography
//             variant="h5"
//             sx={{ color: green, fontWeight: 600, fontSize: '28px', mb: 2 }}
//           >
//             📊 Business Feasibility Studies
//           </Typography>
//           <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8 }}>
//             We assess new ventures with:
//             🔍 Market research, 🏗️ Business model evaluation, 💵 Forecasting & ROI, 🧾 Sensitivity analysis.
//           </Typography>

//           <Box mt={4}>
//             <Typography
//               variant="h6"
//               sx={{ color: green, fontWeight: 600, mb: 1 }}
//             >
//               ✅ Why FnA Partners?
//             </Typography>
//             <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8 }}>
//               • 30+ years of expertise across strategy, finance & operations<br />
//               • Trusted by UAE startups, SMEs & investors<br />
//               • Agile support model with hands-on execution<br />
//               • Proven success across Dubai, Abu Dhabi, and GCC
//             </Typography>
//           </Box>

//           <Box mt={5} textAlign="center">
//             <Typography fontSize={16} sx={{ mb: 2, color: gray }}>
//               🚀 Let’s Build a Smarter Future for Your Business
//               <br />
//               Contact FnA Partners today to schedule a discovery call or learn more.
//             </Typography>
//             <Button
//               variant="contained"
//               onClick={() => router.push('/contact-us')}
//               startIcon={<RocketLaunchIcon />}
//               sx={{
//                 textTransform: 'none',
//                 background: `linear-gradient(to right, ${green}, #00c781)`,
//                 fontWeight: 600,
//                 fontSize: 15,
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: '999px',
//                 '&:hover': {
//                   background: `linear-gradient(to right, #00c781, ${green})`,
//                 },
//               }}
//             >
//               Talk to a Strategic Advisor
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default StrategicPlanning;
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { gray, green } from '@/components/utils/Utils';
import { useRouter } from 'next/navigation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function StrategicPlanning() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }} maxWidth={"1200px"} mx={"auto"}>
      <Box
        bgcolor={'#005430'}
        p={1.5}
        borderRadius={10}
        maxWidth={'780px'}
        textAlign={'center'}
        px={3}
        mx={'auto'}
        mb={6}
        data-aos="zoom-in"
      >
        <Typography color="white" fontSize={'22px'} fontWeight={500}>
         Strategic Services & Fractional CFO Support in Dubai and the UAE
        </Typography>
      </Box>

      <Grid container spacing={6} alignItems="center">
        {/* <Grid item xs={12} md={5} size={{xs:12,md:5}} data-aos="fade-right">
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
        </Grid> */}

        <Grid size={{xs:12}} data-aos="fade-left">
          <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 4 }}>
            In todays fast-paced and competitive business environment, having a clear, data-driven strategy is essential for long-term success. At <strong>FnA Partners</strong>, we offer strategic advisory services designed to help you define direction, manage risk, and unlock new opportunities — with the added flexibility of fractional CFO leadership.
            <br /><br />
            Whether you are looking to refine your strategic roadmap, boost financial performance, or assess new ventures, our team provides expert guidance at every stage.
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 600, fontSize: '26px', mb: 1 }}
          >
            Fractional CFO Services in the UAE
          </Typography>
          <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 4 }}>
            Access expert financial leadership — without the cost of a full-time hire. Our fractional CFO services provide experienced financial oversight tailored to your business’s size, sector, and stage of growth.
            <br /><br />
            <strong>Our fractional CFO solutions include:</strong><br />
            •  Cash flow forecasting and working capital optimisation<br />
            •  Strategic financial planning aligned with business goals<br />
            •  Cost control and efficiency improvements<br />
            •  Fundraising support and investor readiness<br />
            •  Financial systems setup and performance tracking<br />
            •  Financial dashboards and board reporting
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 600, fontSize: '26px', mb: 1 }}
          >
            Strategic Planning Services
          </Typography>
          <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 4 }}>
            Effective strategy is more than just vision — it’s about execution. We work with founders and leadership teams to build custom 3–5 year strategic plans that turn ambition into results.
            <br /><br />
            <strong>Our strategic planning services include:</strong><br />
            •  Tailored strategy development aligned to your mission and goals<br />
            •  Business goal setting, including measurable KPIs and milestones<br />
            •  Roadmap creation with resource allocation, risk management, and timelines<br />
            •  Performance tracking frameworks to ensure ongoing alignment and accountability
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: green, fontWeight: 600, fontSize: '26px', mb: 1 }}
          >
            Business Feasibility Studies
          </Typography>
          <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8, mb: 4 }}>
            Before committing resources to a new project or venture, ensure you have the right insights to proceed with confidence. Our feasibility study services provide a full picture of commercial, operational, and financial viability.
            <br /><br />
            <strong>Our feasibility studies cover:</strong><br />
            •  Market research and competitive analysis<br />
            •  Business model evaluation and risk assessment<br />
            •  Financial forecasting for revenue, costs, breakeven, and ROI<br />
            •  Sensitivity analysis and scenario testing
          </Typography>

          <Box>
            <Typography
              variant="h6"
              sx={{ color: green, fontWeight: 600, mb: 1 }}
            >
              Why FnA Partners?
            </Typography>
            <Typography sx={{ color: gray, fontSize: '16px', lineHeight: 1.8 }}>
              • Over 30 years of strategic, financial, and commercial expertise<br />
              • Deep experience supporting UAE-based startups, SMEs, and investors<br />
              • Agile support model combining advisory and hands-on execution<br />
              • Proven success across Dubai, Abu Dhabi, and the wider GCC
            </Typography>
          </Box>

          <Box mt={5} textAlign="center">
            <Typography fontSize={16} sx={{ mb: 2, color: gray }}>
              🚀 Let’s Build a Smarter Future for Your Business
              <br />
              Whether you are exploring new markets, raising capital, or transforming operations,
              our strategic services and fractional CFO support give you the confidence and clarity to lead decisively.
            </Typography>
            <Button
              variant="contained"
              onClick={() => router.push('/contact-us')}
              startIcon={<RocketLaunchIcon />}
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
              Talk to a Strategic Advisor
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StrategicPlanning;
