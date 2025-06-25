// "use client";

// import Image from "next/image";
// import { Box, Grid, Typography, Button } from "@mui/material";

// const darkGreen = "#005430";
// const lightGreen = "#00BA6A";

// export default function AboutUs() {
//   return (
//     <Box component="section" sx={{ px: 2, py: 8 }} maxWidth="1100px" mx="auto">
//       <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
//         {/* ---------- IMAGE ---------- */}
//         <Grid  size={{xs:12,md:5}}>
//           {/* ratio‑box keeps the image responsive */}
//           <Box
//             sx={{
//               position: "relative",
//               width: "100%",
//               pt: "113%", // 441 / 501 ≈ 0.88 → inverted to 113 %
//               borderRadius: 2,
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               src="/aboutUs.png"
//               alt="About us illustration"
//               fill
//               sizes="(max-width: 600px) 100vw,
//                      (max-width: 900px) 50vw,
//                      40vw"
//               style={{ objectFit: "cover" }}
//               priority
//             />
//           </Box>
//         </Grid>

//         {/* ---------- TEXT ---------- */}
//         <Grid size={{xs:12,md:7}}>
//           <Typography
//             fontSize={{ xs: 18, md: 20 }}
//             fontWeight={500}
//             color={darkGreen}
//           >
//             About Us
//           </Typography>

//           <Box borderTop={`1px solid ${darkGreen}`} mt={2} pt={2}>
//             <Typography
//               fontSize={{ xs: 24, md: 30 }}
//               fontWeight={400}
//               color={darkGreen}
//               mb={2}
//             >
//               Welcome to FnA Partners
//             </Typography>

//             <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={300} mb={4}>
//               With 30 years of experience in accounting, finance, and strategy,
//               we are committed to delivering exceptional results. Our tailored
//               financial solutions are designed to empower your business to
//               thrive.
//               <br />
//               <br />
//               Drawing on deep industry knowledge and a forward‑thinking
//               approach, we help you overcome challenges and seize new
//               opportunities. Integrity and excellence guide everything we do.
//               <br />
//               <br />
//               Partner with us to unlock your business&apos;s full potential and
//               achieve lasting financial success.
//             </Typography>

//             {/* ---------- GRADIENT BUTTON ---------- */}
//  <Button
//   variant="contained"
//   sx={{
//     position: "relative",
//     overflow: "hidden",
//     px: 4,
//     py: 1.5,
//     fontSize: { xs: 14, md: 16 },
//     fontWeight: 500,
//     textTransform: "none",
//     borderRadius: "999px",
//     color: "#fff",
//     background: `linear-gradient(to right, ${darkGreen}, ${lightGreen})`,
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
//   Read More
// </Button>


//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Grid, Typography, Button } from "@mui/material";

const darkGreen = "#005430";
const lightGreen = "#00BA6A";

export default function AboutUs() {
  /* ---------- init AOS once ---------- */
  useEffect(() => {
    AOS.init({
      duration: 1000,      // animation length (ms)
      easing: "ease-out",  // smooth curve
      once: true,          // animate only first time
    });
  }, []);

  return (
    <Box component="section" sx={{ px: 2, py: 8 }} maxWidth="1100px" mx="auto">
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
     
        <Grid size={{xs:12,md:5}} data-aos="fade-right">
          {/* ratio‑box keeps the image responsive */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              pt: "113%", // 441 / 501 ≈ 0.88 → inverted
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="/aboutUs.png"
              alt="About us illustration"
              fill
              sizes="(max-width: 600px) 100vw,
                     (max-width: 900px) 50vw,
                     40vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Grid>

      
        <Grid size={{xs:12,md:7}} data-aos="fade-left">
          <Typography
            fontSize={{ xs: 18, md: 20 }}
            fontWeight={500}
            color={darkGreen}
          >
            About Us
          </Typography>

          <Box borderTop={`1px solid ${darkGreen}`} mt={2} pt={2}>
            <Typography
              fontSize={{ xs: 24, md: 30 }}
              fontWeight={400}
              color={darkGreen}
              mb={1}
            >
              Welcome to FnA Partners
            </Typography>

            <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={300} mt={1}>
             With 30 years of experience in accounting, finance, and strategy, we are committed to delivering exceptional results. Our tailored financial solutions are designed to empower your business to thrive.
            </Typography>
               <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={300} mt={2}>
             Drawing on deep industry knowledge and a forward-thinking approach, we help you overcome challenges and seize new opportunities. Integrity and excellence guide everything we do.
            </Typography>
               <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={300} mt={2} mb={2}>
              Partner with us to unlock your business&apos;s full potential and
              achieve lasting financial success.
            </Typography>

            {/* ---------- GRADIENT SWAP BUTTON ---------- */}
            <Button
            href="/our-services"
              variant="contained"
              sx={{
                position: "relative",
                overflow: "hidden",
                px: 3,
                py: 1,
                fontSize: { xs: 14, md: 16 },
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "999px",
                color: "#fff",
                background: `linear-gradient(to right, ${darkGreen}, ${lightGreen})`,
                zIndex: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to right, ${lightGreen}, ${darkGreen})`,
                  transition: "opacity 0.5s ease",
                  opacity: 0,
                  zIndex: -1,
                },
                "&:hover::before": { opacity: 1 },
                "&:hover": { boxShadow: 4 },
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
