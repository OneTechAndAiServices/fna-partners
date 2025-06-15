
'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { gray, green } from '@/components/utils/Utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

const services = [
  "Develop a chart of accounts tailored to the company’s structure and management needs.",
  "Prepare and verify the balance sheet as of the management-approved cut-off date.",
  "Establish procedures to ensure accurate recording of financial transactions.",
  "Provide clients with guidance on inventory management.",
  "Record monthly transactions, including sales, expenses, and bank entries.",
  "Post monthly entries such as depreciation, accruals, and prepaid expenses before closing the accounts.",
  "Evaluate financial statements for accuracy and completeness.",
  "Generate management information system (MIS) reports as requested, including aging reports, cost center analyses, and revenue and cost trend analyses.",
];

function SpecializedServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const ctx = gsap.context(() => {
      gsap.from(".gsap-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff'  }}>
        <Typography variant="h5" sx={{ color: green, fontWeight: 550, fontSize: "30px" ,textAlign:"center",mb:4}}>
            Our Range of Specialized Services Includes:
          </Typography>
      <Grid container spacing={4}>
      

        <Grid size={{xs:12,md:12}}>
          <Grid container spacing={2}>
            <Grid size={{xs:12,md:6}} data-aos="fade-up" data-aos-delay="100">
            <Box boxShadow={2} px={2} borderRadius={"12px"} minHeight={"250px"}> 
                <List dense>
                {services.slice(0, 4).map((service, index) => (
                  <ListItem key={index} disableGutters className="gsap-item">
                    <ListItemIcon sx={{ minWidth: 40, color: green }}>
                      <ChevronRightIcon sx={{ fontSize: "29px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "15px", color: gray }}
                    >
                      {service}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
            </Grid>

            <Grid size={{xs:12,md:6}} data-aos="fade-up" data-aos-delay="200">
                      <Box boxShadow={2} px={2} borderRadius={"12px"} minHeight={"250px"}>
              <List dense>
                {services.slice(4).map((service, index) => (
                  <ListItem key={index + 5} disableGutters className="gsap-item">
                    <ListItemIcon sx={{ minWidth: 40, color: green }}>
                      <ChevronRightIcon sx={{ fontSize: "29px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "15px", color: gray }}
                    >
                      {service}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SpecializedServices;
