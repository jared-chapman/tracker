import React, { useState, useCallback, useContext } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

import { LayoutContext } from 'src/Context'


const defaultSidebarLayout = [
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

const assignIds = rawItems => {
  // taks an array of objects and assigns an incremental id to each object or nested object, starting at 0
  // also assigns a level to each object, where the top level is 0 and each nested level increments by 1
  let id = 0;
  const assignIdsHelper = (rawItems, level=0) => {
    return rawItems.map(i => {
      i.id = id
      id++;
      i.level = level
      if (Object.keys(i).includes('nested')) {
        i.nested = assignIdsHelper(i.nested, level+1)
      }
      return i
    })
  }
  return assignIdsHelper(rawItems)

}



const Sidebar = ({
  width = '15em',
}) => {
  const [layout, setLayout] = useState(assignIds(defaultSidebarLayout));
  const {selectedSidebarValue, setSelectedSidebarValue} = useContext(LayoutContext);



  const makeItems = useCallback(rawItems => {
    return rawItems.map(i => {
      if (!Object.keys(i).includes('nested')) {
        return (
        <AccordionItem
          style={{
            width,
            borderBottom: '0',
            backgroundColor: selectedSidebarValue?.id === i.id ? 'lightblue' : 'white',
          }}
          onClick={() => setSelectedSidebarValue(i)}
        >
            <h2>
              <AccordionButton style={{width: '100%'}}>
                <Box
                  as='span'
                >
                  {i.name}
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
        )
      } else {
        return (
        <AccordionItem
          style={{
            width,
            borderBottom: '0'
          }}
          >
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
  }, [selectedSidebarValue])


  return (
    <Accordion allowMultiple>
      {makeItems(layout)}
    </Accordion>
  )
}

export default Sidebar
