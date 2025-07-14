// import { Box, Button, Typography } from '@mui/material'
// import React from 'react'

// function Text() {
//     const darkGreen = "#005430";
// const lightGreen = "#00BA6A";
//   return (
//    <>
//    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} textAlign={"center"} my={4} maxWidth={"1000px"} mx={"auto"}>
//     <Button
//   variant="contained"
//   sx={{
//     position: "relative",
//     overflow: "hidden",
//     px: 4,
//     py: 1.5,
//     my:3,
//     fontSize: { xs: 14, md: 16 },
//     fontWeight: 500,
//     maxWidth:"330px",
//     mx:"auto",
//     textTransform: "none",
//     borderRadius: "999px",
//     color: "#fff",
//     background: `linear-gradient(to right, #005430, #00BA6A)`,
//     zIndex: 1,
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: `linear-gradient(to right, ${lightGreen}, ${darkGreen})`,
//       zIndex: -1,
//       transition: "opacity 0.5s ease",
//       opacity: 0,
//     },
//     "&:hover::before": {
//       opacity: 1,
//     },
//     "&:hover": {
//       boxShadow: 4,
//     },
//   }}
// >
// Accounting Services
// </Button>
//     <Typography fontSize={"30px"} fontWeight={400}>
//     Accounting & Bookkeeping Services in Dubai, the rest of the UAE & the GCC
// </Typography>
//     <Typography fontSize={"22px"} fontWeight={300} my={2}>
//         Our extensive suite of financial solutions is designed to enhance cash flow and boost profitability. Our team of certified accountants are dedicated to creating efficient systems for managing and monitoring your business’s financial health.

// </Typography>


//    </Box>
//    </>
//   )
// }

// export default Text
'use client'
import React from 'react'
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import GridViewIcon from '@mui/icons-material/GridView'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import FunctionsIcon from '@mui/icons-material/Functions'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import InventoryIcon from '@mui/icons-material/Inventory'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import AssessmentIcon from '@mui/icons-material/Assessment'

function Text() {
  const darkGreen = "#005430"
  const lightGreen = "#00BA6A"

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        textAlign={"center"}
        my={4}
        maxWidth={"1000px"}
        mx={"auto"}
      >
        <Button
          variant="contained"
          sx={{
            position: "relative",
            overflow: "hidden",
            px: 4,
            py: 1.5,
            my: 3,
            fontSize: { xs: 14, md: 16 },
            fontWeight: 500,
            maxWidth: "330px",
            mx: "auto",
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

        <Typography fontSize={"30px"} fontWeight={400}>
          Accounting & Bookkeeping Services in Dubai, the rest of the UAE & the GCC
        </Typography>

        <Typography fontSize={"22px"} fontWeight={300} my={2}>
          Our extensive suite of financial solutions is designed to enhance cash flow and boost profitability. Our team of certified accountants are dedicated to creating efficient systems for managing and monitoring your business’s financial health.
        </Typography>

        <Box mt={4} textAlign={"left"}>
          <Typography fontSize={"24px"} fontWeight={500} mb={2}>
            Our Core Accounting Services Include:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon><GridViewIcon color="success" /></ListItemIcon>
              <ListItemText primary="Developing a custom chart of accounts aligned to your business structure and reporting needs" />
            </ListItem>

            <ListItem>
              <ListItemIcon><ReceiptLongIcon color="success" /></ListItemIcon>
              <ListItemText primary="Recording all monthly transactions: sales, purchases, expenses, and bank reconciliations" />
            </ListItem>

            <ListItem>
              <ListItemIcon><FunctionsIcon color="success" /></ListItemIcon>
              <ListItemText primary="Posting monthly journal entries, including depreciation, accruals, and prepayments" />
            </ListItem>

            <ListItem>
              <ListItemIcon><FactCheckIcon color="success" /></ListItemIcon>
              <ListItemText primary="Preparing and verifying the balance sheet at month-end close" />
            </ListItem>

            <ListItem>
              <ListItemIcon><SyncAltIcon color="success" /></ListItemIcon>
              <ListItemText primary="Implementing controls for accurate and timely recording of financial data" />
            </ListItem>

            <ListItem>
              <ListItemIcon><InventoryIcon color="success" /></ListItemIcon>
              <ListItemText primary="Advising on inventory management and cost optimization" />
            </ListItem>

            <ListItem>
              <ListItemIcon><AssignmentTurnedInIcon color="success" /></ListItemIcon>
              <ListItemText primary="Reviewing and finalising financial statements for accuracy and completeness" />
            </ListItem>

            <ListItem>
              <ListItemIcon><AssessmentIcon color="success" /></ListItemIcon>
              <ListItemText primary="Creating tailored MIS reports, including aging schedules, revenue and cost trends, and cost center analysis" />
            </ListItem>
          </List>

          <Typography fontSize={"18px"} fontWeight={300} mt={3}>
            We leverage leading cloud-based systems and automation tools to ensure efficiency, accuracy, and visibility across your finance function.
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Text
