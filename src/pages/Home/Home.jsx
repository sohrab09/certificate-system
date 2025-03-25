import React from 'react'
import Services from '../../components/Services/Services'
import Notices from '../../components/Notices/Notices'
import Slider from '../../components/Slider/Slider'

function Home() {
  return (
    <div>

      {/* Slider Start */}
      <Slider />
      {/* Slider End */}

      {/* Service Start */}
      <Services />
      {/* Service End */}

      {/* Notice Start */}
      <Notices />
      {/* Notice End */}

    </div>
  )
}

export default Home