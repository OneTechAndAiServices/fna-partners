import News from '@/components/website/news/News'
import Blogs from '@/components/website/webSep/Blogs'
import { Box } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Box mt={13}>
        {/* <Blogs/> */}
        <News/>
    </Box>
  )
}

export default page