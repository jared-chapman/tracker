import { Metadata } from '@redwoodjs/web'

import CreaturesCell from 'src/components/CreaturesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <CreaturesCell />
    </>
  )
}

export default HomePage
