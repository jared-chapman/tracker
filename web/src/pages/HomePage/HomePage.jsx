import { Metadata } from '@redwoodjs/web'

import CreaturesCell from 'src/components/CreaturesCell'
import Sidebar from 'src/components/Sidebar'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="HomePageLayout">
        <div className="LeftPanel">
          <Sidebar />
          {/* I am a left panel
          <br/> Notes
          <br/> Encounters
          <br/>  */}
        </div>
        <div className="MainPanel">
          {/* replace with main panel component */}
          <CreaturesCell />
        </div>
        <div className="RightPanel">
          I am a right panel
        </div>

      </div>
    </>
  )
}

export default HomePage
