import Downshift from 'downshift'
import React from 'react'
import * as Styled from '../styled'

export default ({ selectedItem, items, onChange, label }) => {
  const handleStateChange = changes => {
    if (changes.hasOwnProperty('selectedItem')) {
      onChange(changes.selectedItem)
    } else if (changes.hasOwnProperty('inputValue')) {
      onChange(changes.inputValue)
    }
  }

  const handleKeyDown = (e, clearSelection) => {
    if (e.key === 'Enter' || e.key === ' ') return clearSelection()
  }

  return (
    <Downshift onStateChange={handleStateChange} selectedItem={selectedItem}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        clearSelection,
        selectedItem,
        openMenu
      }) => (
        <div>
          <Styled.InputGroup>
            <Styled.Label {...getLabelProps()}>{label}</Styled.Label>
            <Styled.InputWrapper>
              <Styled.Input {...getInputProps({ onFocus: openMenu })} />
              <Styled.ClearIcon
                tabIndex="0"
                onClick={clearSelection}
                onKeyDown={e => handleKeyDown(e, clearSelection)}
              >
                x
              </Styled.ClearIcon>
            </Styled.InputWrapper>
          </Styled.InputGroup>
          <Styled.List {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    item =>
                      !inputValue ||
                      item.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <Styled.Item
                      {...getItemProps({ item, key: item })}
                      highlighted={highlightedIndex === index}
                      selected={selectedItem === item}
                      color="#EF0D33"
                    >
                      {item}
                    </Styled.Item>
                  ))
              : null}
          </Styled.List>
        </div>
      )}
    </Downshift>
  )
}
