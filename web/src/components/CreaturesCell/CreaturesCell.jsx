import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

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
  return (
    <div className="CreaturesList">
      <Accordion allowMultiple allowToggle>
        {notes.map((item) => {
          if (item.type === 'Creature') {
            return (
            <AccordionItem key={item.id}>
              <h2>
                <AccordionButton>
                  <Box as='span'>
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.body}
              </AccordionPanel>
            </AccordionItem>
            )
          }
        })}
      </Accordion>
    </div>
  )
}
