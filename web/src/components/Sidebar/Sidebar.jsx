import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const sidebarLayout = [
  {
    name: 'Notes',
    nested: [
      {
        name: 'Creatures'
      },
      {
        name: 'Players'
      },
      {
        name: 'NPCs'
      },
      {
        name: 'Misc.'
      },
    ]
  },
  {
    name: 'Encounters',
    nested: [
      {
        name: 'Test1',
      },
      {
        name: 'Test2',
      },
      {
        name: 'Test3',
        nested: [
          {
            name: 'TestA',
          },
        ],
      },
    ],
  },
  {
    name: 'Dice',
  },
  {
    name: 'Rules'
  }
]

const makeItems = rawItems => {
  return rawItems.map(i => {
    if (!Object.keys(i).includes('nested')) {
      return (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span'>
                {i.name}
              </Box>
            </AccordionButton>
          </h2>
        </AccordionItem>
      )
    } else {
      return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span'>
              {i.name}
            </Box>
            <AccordionIcon/>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={0}>
          <Accordion allowMultiple>
            {makeItems(i.nested)}
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      )
    }


  })
}

const Sidebar = () => {
  return (
    <Accordion allowMultiple>
      {makeItems(sidebarLayout)}
    </Accordion>
  )
}

export default Sidebar
