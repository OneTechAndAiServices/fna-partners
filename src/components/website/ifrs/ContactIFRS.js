'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

import { useRouter } from 'next/navigation';
import { green } from '@/components/utils/Utils';

function ContactIFRS() {
  const router = useRouter();

  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 },
        py: 10,
        background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
        borderRadius: '12px',
        textAlign: 'center',
      }}
    >
      {/* Why FnA Partners */}
      <Typography
        variant="h4"
        sx={{
          color: green,
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mb: 4,
        }}
      >
        <WorkspacePremiumIcon fontSize="large" color="success" />
        Why FnA Partners?
      </Typography>

      <Grid container spacing={3} justifyContent="center" mb={6}>
        <Grid size={{xs:12,md:6}}>
          <Typography fontSize={16} color="#444" mb={2} display="flex" alignItems="center" justifyContent="center" gap={1}>
            <CalendarMonthIcon color="success" />
            30+ years of regional and international experience
          </Typography>
          <Typography fontSize={16} color="#444" mb={2} display="flex" alignItems="center" justifyContent="center" gap={1}>
            <GavelIcon color="success" />
            Deep expertise in UAE tax laws, IFRS, and regulatory frameworks
          </Typography>
          <Typography fontSize={16} color="#444" mb={2} display="flex" alignItems="center" justifyContent="center" gap={1}>
            <HandshakeIcon color="success" />
            Trusted by businesses across Dubai, Abu Dhabi & GCC
          </Typography>
          <Typography fontSize={16} color="#444" mb={2} display="flex" alignItems="center" justifyContent="center" gap={1}>
            <TrendingUpIcon color="success" />
            Scalable support for startups, SMEs & enterprises
          </Typography>
        </Grid>
      </Grid>

      {/* CTA */}
      <Typography
        variant="h4"
        sx={{
          color: green,
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        <PhoneForwardedIcon fontSize="large" color="success" />
        Let’s Work Together
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          color: '#555',
          maxWidth: 700,
          mx: 'auto',
          lineHeight: 1.8,
          mb: 4,
        }}
      >
        Whether you need reliable bookkeeping, expert tax support, or IFRS technical advice, FnA Partners is here to support your financial success.
        <br />
        Contact us today to schedule a free consultation or explore how we can partner with your business.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          textTransform: 'none',
          fontSize: 16,
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: '999px',
          background: `linear-gradient(to right, ${green}, #00c781)`,
          '&:hover': {
            background: `linear-gradient(to right, #00c781, ${green})`,
          },
        }}
        startIcon={<PhoneForwardedIcon />}
        onClick={() => router.push('/contact-us')}
      >
        Book Free Consultation
      </Button>
    </Box>
  );
}

export default ContactIFRS;
