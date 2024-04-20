import { React, useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import CreaturesCell from 'src/components/CreaturesCell'
import Dice from 'src/components/Dice'
import Sidebar from 'src/components/Sidebar'
import './HomePage.css'
import { LayoutContext } from 'src/Context'

// middle components

const HomePage = () => {
  const [selectedSidebarValue, setSelectedSidebarValue] = useState(null)

  const componentMap = {
    Creatures: CreaturesCell,
    Dice: <Dice />,
  }

  return (
    <>
      <LayoutContext.Provider
        value={{ selectedSidebarValue, setSelectedSidebarValue }}
      >
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
            {componentMap.hasOwnProperty(selectedSidebarValue?.name)
              ? componentMap[selectedSidebarValue.name]
              : null}
          </div>
          <div className="RightPanel">I am a right panel</div>
        </div>
      </LayoutContext.Provider>
    </>
  )
}

export default HomePage
