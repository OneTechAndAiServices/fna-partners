import Ifrs from '@/components/website/ifrs/Ifrs'
import Text from '@/components/website/ourServices/Text'
import Banner from '@/components/website/seperate/accountingServices/Banner'
import VatConsultant from '@/components/website/services/VatConsultant'
import React from 'react'

function page() {
  return (
    <div>
        <Banner/>
        <Text/>
        <VatConsultant/>
        <Ifrs/>

    </div>
  )
}

export default page