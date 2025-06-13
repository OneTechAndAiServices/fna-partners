
 'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { ScaleLoader } from 'react-spinners';
// import { green} from '@/components/utils/Colors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { green } from '@/components/utils/Utils';

const validationSchema = Yup.object({
  name:    Yup.string().required('Required'),
  email:   Yup.string().email('Invalid email').required('Required'),
  phone:   Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

export default function FormOnly() {
  useEffect(() => {
    AOS.init({
      duration: 600,      
      easing: 'ease-out', 
      once: true,        
    });
  }, []);

  return (
    <>
      <Head>
        <title>Get Started with a Free Financial Consultation | FNA Partners</title>
        <meta
          name="description"
          content="Ready to streamline your finances and ensure compliance? Let's discuss how we can support your business growth."
        />
        <meta
          name="keywords"
          content="financial consultation, accounting consultation, free consultation, FNA Partners, UAE accounting, Saudi Arabia accounting"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Get Free Consultation",
              "description": "Ready to streamline your finances and ensure compliance? Let's discuss how we can support your business growth.",
            })
          }}
        />
      </Head>
<Box  sx={{
            maxWidth:"700px",
            mx:"auto",}}>
      <Box
        sx={{
            maxWidth:"700px",
            mx:"auto",
            my:7,
          p: 2,
          mx:3,
          px:3,
          borderRadius: "25px",
          boxShadow: 3,
          bgcolor: '#fff',
        }}
      >
        <Typography component="h2" textAlign={"center"} mt={2} variant="h6" sx={{ mb: 1, fontWeight: 400 }}>
         Get Your Free Consultation Now
        </Typography>

        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            
            // Send form data to the backend API
            const response = await fetch('/api/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });

            const result = await response.json();

            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: 'Thanks for reaching out. We’ll be in touch soon.',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: result.message || 'Something went wrong, please try again.',
              });
            }

            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form noValidate>
              {['name', 'email', 'phone', 'company', 'message'].map((field) => (
                <Field name={field} key={field}>
                  {({ field: f }) => (
                    <TextField
                      {...f}
                      label={
                        field === 'message'
                          ? 'How can we help you?'
                          : f.name.charAt(0).toUpperCase() + f.name.slice(1)
                      }
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      error={touched[field] && Boolean(errors[field])}
                      helperText={touched[field] && errors[field]}
                      multiline={field === 'message'}
                      rows={field === 'message' ? 4 : 1}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f5f5f5',
                          borderRadius: 1,
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
                          },
                        },
                      }}
                    />
                  )}
                </Field>
              ))}

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: green,
                    color: '#fff',
                    textTransform: 'none',
                    px: 4,
                    py: 1.5,
                    minWidth: 160,
                    position: 'relative',
                    '&:hover': { bgcolor: green},
                  }}
                >
                  {isSubmitting && (
                    <ScaleLoader
                      color="#fff"
                      width={4}
                      height={16}
                      css={{ position: 'absolute', left: 20 }}
                    />
                  )}
                  Submit Now
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      </Box>
    </>
  );
}
