import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Text() {
    const darkGreen = "#005430";
const lightGreen = "#00BA6A";
  return (
   <>
   <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} textAlign={"center"} my={4} maxWidth={"1000px"} mx={"auto"}>
    <Button
  variant="contained"
  sx={{
    position: "relative",
    overflow: "hidden",
    px: 4,
    py: 1.5,
    my:3,
    fontSize: { xs: 14, md: 16 },
    fontWeight: 500,
    maxWidth:"330px",
    mx:"auto",
    textTransform: "none",
    borderRadius: "999px",
    color: "#fff",
    background: `linear-gradient(to right, #005430, #00BA6A)`,
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(to right, ${lightGreen}, ${darkGreen})`,
      zIndex: -1,
      transition: "opacity 0.5s ease",
      opacity: 0,
    },
    "&:hover::before": {
      opacity: 1,
    },
    "&:hover": {
      boxShadow: 4,
    },
  }}
>
Accounting Services
</Button>
    <Typography fontSize={"30px"} fontWeight={400}>Accounting & Bookkeeping
</Typography>
    <Typography fontSize={"22px"} fontWeight={300} my={2}>
        Our extensive suite of financial solutions is designed to enhance cash flow and boost profitability. Our team of certified accountants are dedicated to creating efficient systems for managing and monitoring your business’s financial health.

</Typography>


   </Box>
   </>
  )
}

export default Text