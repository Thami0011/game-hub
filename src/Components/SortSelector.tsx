import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorted By : Relevanve
      </MenuButton>
      <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Rating</MenuItem>
          <MenuItem>Alphabetical</MenuItem>
          <MenuItem>Date</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector