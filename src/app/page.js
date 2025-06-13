import Navbar from "@/components/website/navbar/Navbar";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <>
    <Box>
      <Navbar/>
    </Box>


    </>
  );
}
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import Image from "next/image";
// import { useTheme } from "@mui/material/styles";

// export default function Home() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const navItems = ["Home", "Services", "About Us", "Blogs", "Contact Us"];

//   return (
//     <Box
//       sx={{
//         px: 2,
//         py: 1,
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         bgcolor: "#f4f6f8",
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//       }}
//     >
//       {/* Logo */}
//       <Box>
//         <Image
//           src="/logo.png"
//           alt="logo"
//           width={148}
//           height={46}
//           style={{ objectFit: "contain" }}
//         />
//       </Box>

//       {/* Navigation Bar */}
//       <Box
//         sx={{
//           display: "flex",
//           bgcolor: "#fff",
//           borderRadius: "40px",
//           boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
//           px: 3,
//           py: 1,
//           overflowX: "auto",
//           scrollbarWidth: "none",
//           "::-webkit-scrollbar": {
//             display: "none",
//           },
//         }}
//       >
//         {navItems.map((item, index) => (
//           <Box
//             key={item}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               mx: 1,
//               whiteSpace: "nowrap",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: 14,
//                 fontWeight: 500,
//                 color: "#444",
//                 cursor: "pointer",
//                 "&:hover": {
//                   color: "#007aff",
//                 },
//               }}
//             >
//               {item}
//             </Typography>
//             {index < navItems.length - 1 && (
//               <Typography mx={1} color="#ccc">
//                 •
//               </Typography>
//             )}
//           </Box>
//         ))}
//       </Box>

//       {/* Empty space for right alignment */}
//       <Box width={148} height={46}></Box>
//     </Box>
//   );
// }
