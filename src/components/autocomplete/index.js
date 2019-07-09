import Downshift from 'downshift'
import React from 'react'
import * as Styled from '../styled'

export default ({ items, onChange, label }) => {
  return (
    <Downshift
      onChange={selection => (selection ? onChange(selection) : onChange(''))}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        openMenu
      }) => (
        <div>
          <Styled.InputGroup>
            <Styled.Label {...getLabelProps()}>{label}</Styled.Label>
            <Styled.Input {...getInputProps({ onFocus: openMenu })} />
          </Styled.InputGroup>
          <Styled.List {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    item =>
                      !inputValue ||
                      item.value
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <Styled.Item
                      key={item.id}
                      color={item.hash}
                      highlighted={highlightedIndex === index}
                      selected={selectedItem === item}
                      {...getItemProps({ item })}
                    >
                      {item.value}
                    </Styled.Item>
                  ))
              : null}
          </Styled.List>
        </div>
      )}
    </Downshift>
  )
}
