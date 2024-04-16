import { useContext } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

import { LayoutContext } from 'src/Context'

import './CreaturesCell.css'

export const QUERY = gql`
  query CreaturesQuery {
    notes {
      id
      type
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ notes }) => {
  const {selectedSidebarValue, setSelectedSidebarValue} = useContext(LayoutContext);

  return (
  <div>
    {selectedSidebarValue?.name}
  </div>
  )
}
