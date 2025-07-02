// // components/News.js
// import React from 'react'
// import { Box, Grid, Card, CardMedia, Typography, Link } from '@mui/material'
// import { styled } from '@mui/system'
// import { green } from '@/components/utils/Utils'

// const Overlay = styled('div')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: '#fff',
//   padding: theme.spacing(2),
//   // start 60% down (so only title peeks out)
//   transform: 'translateY(40%)',
//   transition: 'transform 0.3s ease',
//   pointerEvents: 'none',           // so the hover stays on the card
// }))

// const StyledCard = styled(Card)(() => ({
//   position: 'relative',
//   borderRadius: 16,
//   overflow: 'hidden',
//   cursor: 'pointer',
//   '&:hover .MuiBox-root, &:hover a, &:hover h6, &:hover p': {
//     pointerEvents: 'auto',         // allow clicks inside overlay on hover
//   },
//   '&:hover div': {
//     transform: 'translateY(0%)',   // slide the overlay all the way up
//   },
// }))

// const newsBlogs = [
//   {
//     title: 'Fna Accounting Client Success Story',
//     desc: 'When a fast-growing e-commerce brand struggled to manage its finances, Fna Accounting stepped in with a tailored strategy. From cleaning up messy books to implementing cash flow forecasting, we helped the client gain full financial control.',
//     src: '/b1.png',
//   },
//   {
//     title: 'Why Your Startup Needs Professional Accounting Early',
//     desc: 'Fna Accounting stepped in with a tailored strategy.',
//     src: '/b2.png',
//   },
//   {
//     title: 'Understanding Cash Flow: A Beginner’s Guide',
//     desc: 'Learn the managing money with expert tips from Fna Accounting.',
//     src: '/b3.png',
//   },
//   {
//     title: 'Top 5 Tax Mistakes Small Businesses Make',
//     desc: 'Avoid costly errors this tax season with expert guidance. Many small businesses overlook deductions, miss deadlines, or file inaccurate reports—leading to fines and stress. In this blog, we break down the top 5 tax mistakes and share practical tips to help you stay compliant and maximize your returns.',
//     src: '/b4.png',
//   },
//   {
//     title: 'GST & VAT Explained – What You Need to Know in 2025',
//     desc: 'Stay ahead with our simplified breakdown of GST and VAT.',
//     src: '/b5.png',
//   },
// ]

// export default function News() {
//   return (
//    <>
//    <Box>
//     <Typography fontSize={"40px"} fontWeight={500} color={green} textAlign={"center"} my={3}>News and Blogs</Typography>
//      <Box sx={{
//        background: 'linear-gradient(135deg, #52B788 0%, #24513C 100%)',
//          p: 4 ,py:10 }}>
//   <Box maxWidth={"1200px"} mx={"auto"}>
//         <Grid container spacing={3}>
//         {newsBlogs.map((item, i) => {
//         //   const mdSize = i === 0 ? 8 : i === 1 ? 4 : 4
        

//           return (
//             <Grid key={i}  size={{xs:12,md:4}} >
//               <StyledCard elevation={4}>
//                 <CardMedia
//                   component="img"
//                   height="310"
//                   image={item.src}
//                   alt={item.title}
//                 />
//                 <Overlay>
//                   <Typography variant="h6" gutterBottom>
//                     {item.title}
//                   </Typography>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 2,
//                       backgroundColor: 'primary.main',
//                       mb: 1,
//                     }}
//                   />
//                   <Typography variant="body2" paragraph>
//                     {item.desc}
//                   </Typography>
//                   <Link href="#" underline="none" sx={{ fontWeight: 500 }}>
//                     Read More
//                   </Link>
//                 </Overlay>
//               </StyledCard>
//             </Grid>
//           )
//         })}
//       </Grid>

//   </Box>
//     </Box>
//    </Box>
//    </>
//   )
// }
"use client";

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { Close } from '@mui/icons-material';
import { green } from '@/components/utils/Utils';

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  transform: 'translateY(40%)',
  transition: 'transform 0.3s ease',
  pointerEvents: 'none',
}));

const StyledCard = styled(Card)(() => ({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover .MuiBox-root, &:hover a, &:hover h6, &:hover p': {
    pointerEvents: 'auto',
  },
  '&:hover div': {
    transform: 'translateY(0%)',
  },
}));

const newsBlogs = [
  {
    title: 'Fna Accounting Client Success Story',
    desc: 'When a fast-growing e-commerce brand struggled to manage its finances, Fna Accounting stepped in with a tailored strategy. From cleaning up messy books to implementing cash flow forecasting.',
    src: '/b1.png',
    fullContent: 'Here is the complete blog content with more details, client testimonials, and outcomes. FNA Partners also played a role in integrating financial tech tools.',
  },
  {
    title: 'Why Your Startup Needs Professional Accounting Early',
    desc: 'Fna Accounting stepped in with a tailored strategy. Early accounting helps startups avoid compliance issues and ensures smoother financial growth.',
    src: '/b2.png',
    fullContent: 'Startups often ignore accounting at early stages. We explain how early accounting saves startups from compliance issues and poor cash flow.',
  },
  {
    title: 'Understanding Cash Flow: A Beginner’s Guide',
    desc: 'Learn the managing money with expert tips from Fna Accounting.',
    src: '/b3.png',
    fullContent: 'This guide walks beginners through cash inflows and outflows, budgeting, and forecasting using real examples.',
  },
  {
    title: 'Top 5 Tax Mistakes Small Businesses Make',
    desc: 'Avoid costly errors this tax season with expert guidance.',
    src: '/b4.png',
    fullContent: 'Small businesses often miss deductions, file late, or misreport. This blog gives actionable tips for avoiding penalties.',
  },
  {
    title: 'GST & VAT Explained – What You Need to Know in 2025',
    desc: 'Stay ahead with our simplified breakdown of GST and VAT.',
    src: '/b5.png',
    fullContent: 'GST and VAT laws are evolving. This post breaks it down for entrepreneurs so they stay compliant in 2025.',
  },
];

export default function News() {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  return (
    <>
      <Box>
        <Typography fontSize="40px" fontWeight={500} color={green} textAlign="center" my={3}>
          News and Blogs
        </Typography>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #52B788 0%, #24513C 100%)',
            p: 4,
            py: 10,
          }}
        >
          <Box maxWidth="1200px" mx="auto">
            <Grid container spacing={3}>
              {newsBlogs.map((item, i) => (
                <Grid size={{xs:12,md:4}} key={i}>
                  <StyledCard elevation={4} onClick={() => handleOpen(item)}>
                    <CardMedia component="img" height="310"  image={item.src} alt={item.title} />
                    <Overlay>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Box sx={{ width: 40, height: 2, backgroundColor: 'primary.main', mb: 1 }} />
                      <Typography variant="body2" paragraph>
                        {item.desc}
                      </Typography>
                      <Button  underline="none" sx={{ fontWeight: 500 }}>
                        Read More
                      </Button>
                    </Overlay>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Dialog for full blog view */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth sx={{zIndex:1000000}}>
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {selectedBlog?.title}
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="img" src={selectedBlog?.src} alt={selectedBlog?.title} sx={{ width: '100%', borderRadius: 2, mb: 2 }} />
          <Typography variant="body1" paragraph>
            {selectedBlog?.desc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedBlog?.fullContent}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
