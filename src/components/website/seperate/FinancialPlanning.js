
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import gsap from 'gsap';
// import { green } from '@/components/utils/Utils';
// import Budget from '../budget/Budget';
// import Management from '../management/Management';
// const darkGreen = "#005430";
// const lightGreen = "#00BA6A";
// function FinancialPlanning() {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);
//   const word = 'Accountancy';
//   const speed = 150;
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Typewriter effect
//   useEffect(() => {
//     let timer;
//     if (index < word.length) {
//       timer = setTimeout(() => {
//         setDisplayText(prev => prev + word.charAt(index));
//         setIndex(prev => prev + 1);
//       }, speed);
//     }
//     return () => clearTimeout(timer);
//   }, [index]);

//   useEffect(() => {
//     if (bannerRef.current) {
//       gsap.fromTo(
//         bannerRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
//       );
//     }
//   }, []);

//   return (
//   <>
//     <Box
//          sx={{
//         py: 8,
//         px: 2,
//         minHeight: ["40vh","60vh","70vh"],
//         textAlign:"center",
//         alignItems:"center",
//         justifyContent:"center",
//         // background: "linear-gradient(-45deg, #be185d, #ec4899, #d946ef, #0ea5e9)",
//            background: "linear-gradient(-45deg, #19685B, #95D0BB,#005430)",
//         backgroundSize: "300% 300%",
//         animation: "bgAnimation 15s ease infinite",
//         "@keyframes bgAnimation": {
//           "0%": {
//             backgroundPosition: "left",
//           },
//           "50%": {
//             backgroundPosition: "right",
//           },
//           "100%": {
//             backgroundPosition: "left",
//           },
//         },
//       }}
//     >
//         <Typography fontSize={"50px"} fontWeight={500} mt={12} color='white'>
//          Financial Planning & Analysis (FP&A) Services in Dubai and the UAE
//         </Typography>

  
//     </Box>
// <Box maxWidth={"1200px"} mx={"auto"} textAlign={"center"}>
//     <Typography fontSize={"20px"} fontWeight={500} my={4} mt={6}>
//     At FnA Partners, we offer expert Financial Planning and Analysis (FP&A) services designed to help businesses across the UAE make smarter, data-driven decisions. From budgeting and forecasting to management reporting and financial modelling, we provide the tools and insights you need to drive strategic growth.
//   </Typography>
// </Box>
//       <Budget/>
//   <Management/></>
//   );
// }

// export default FinancialPlanning;



 'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { green } from '@/components/utils/Utils';
import Budget from '../budget/Budget';
import Management from '../management/Management';
const darkGreen = "#005430";

function FinancialPlanning() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const word = 'Accountancy';
  const speed = 150;
  const bannerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    let timer;
    if (index < word.length) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev + word.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          py: 8,
          px: 2,
          minHeight: ['40vh', '60vh', '70vh'],
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(-45deg, #19685B, #95D0BB,#005430)',
          backgroundSize: '300% 300%',
          animation: 'bgAnimation 15s ease infinite',
          '@keyframes bgAnimation': {
            '0%': { backgroundPosition: 'left' },
            '50%': { backgroundPosition: 'right' },
            '100%': { backgroundPosition: 'left' },
          },
        }}
      >
        <Typography fontSize={"50px"} fontWeight={500} mt={12} color='white'>
          Financial Planning & Analysis (FP&A) Services in Dubai and the UAE
        </Typography>
      </Box>

      <Box maxWidth={'1200px'} mx={'auto'} textAlign={'center'}>
        <Typography fontSize={'20px'} fontWeight={500} my={4} mt={6}>
          At FnA Partners, we offer expert Financial Planning and Analysis (FP&A) services designed to help businesses across the UAE make smarter, data-driven decisions. From budgeting and forecasting to management reporting and financial modelling, we provide the tools and insights you need to drive strategic growth.
        </Typography>

        <Typography variant="h5" color={green} fontWeight={600} mt={6} mb={2}>
          📊 Budget Development and Strategic Planning
        </Typography>
        <Typography sx={{ mb: 2 }}>
          A well-structured budget is essential for financial control and long-term success. Our FP&A experts help you develop detailed budgets that align with your strategic goals and operational plans.
        </Typography>
        <Typography>
          • Comprehensive Budget Planning: We create detailed annual budgets tailored to your business strategy, cost structure, and performance targets.<br />
          • Accurate Cost Allocation: Allocate expenses efficiently across departments or projects for improved cost control and performance tracking.<br />
          • Professional Budget Presentations: We prepare clear and engaging budget presentations to ensure stakeholder alignment and executive buy-in.
        </Typography>

        <Typography variant="h5" color={green} fontWeight={600} mt={6} mb={2}>
          🔮 Forecasting and Scenario Analysis
        </Typography>
        <Typography>
          Our forecasting solutions give you visibility into your future financial position, helping you prepare for uncertainties and identify growth opportunities.
        </Typography>
        <Typography>
          • Revenue and Expense Forecasting: Generate accurate forecasts to anticipate trends in sales, costs, and profitability.<br />
          • Rolling Forecasts: Update forecasts periodically to reflect changes in the business environment, supporting agile decision-making.<br />
          • Scenario Planning: Model different financial outcomes based on market conditions, pricing strategies, or operational changes to make informed strategic decisions.
        </Typography>

        <Typography variant="h5" color={green} fontWeight={600} mt={6} mb={2}>
          📈 Budget Monitoring and Variance Analysis
        </Typography>
        <Typography>
          Tracking financial performance against budget is essential for accountability and operational efficiency.
        </Typography>
        <Typography>
          • Variance Analysis: Compare actual performance to budgeted figures, identify discrepancies, and provide actionable insights to course-correct in real time.<br />
          • KPI Dashboards: Visualise key performance indicators that track progress toward financial goals.
        </Typography>

        <Typography variant="h5" color={green} fontWeight={600} mt={6} mb={2}>
          📋 Management Reporting & Executive Packs
        </Typography>
        <Typography>
          Regular reporting enables informed decision-making at all levels of the organisation.
        </Typography>
        <Typography>
          • Customised Management Packs: We prepare monthly and quarterly management packs, including income statements, balance sheets, cash flow summaries, and ratio analyses tailored to your business.<br />
          • Tailored Reporting Solutions: From board-level summaries to department-specific dashboards, we deliver reports that give you the clarity you need to act decisively.
        </Typography>

        <Typography variant="h5" color={green} fontWeight={600} mt={6} mb={2}>
          🧮 Financial Modelling & Business Valuation
        </Typography>
        <Typography>
          Make forward-looking decisions with confidence using our custom-built financial models.
        </Typography>
        <Typography mb={6}>
          • Forecasting Models: Build dynamic financial models to project future revenue, cash flow, EBITDA, and other performance indicators under different assumptions.<br />
          • Valuation Models: Evaluate your business or a specific asset using DCF, comparable companies, and other methodologies for investment or M&A decisions.
        </Typography>
      </Box>

      <Budget />
      <Management />
    </>
  );
}

export default FinancialPlanning;
