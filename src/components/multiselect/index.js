import Downshift from 'downshift'
import React from 'react'
import * as Styled from '../styled'

const App = ({ items, selectedItems, label, onChange }) => {
  const stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.blurInput:
        return {
          ...changes,
          inputValue: ''
        }
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: true,
          inputValue: ''
        }
      default:
        return changes
    }
  }

  const handleSelect = selectedItem => {
    if (!selectedItem) return
    if (selectedItems.includes(selectedItem)) {
      onChange(selectedItems.filter(item => item !== selectedItem))
    } else {
      onChange([...selectedItems, selectedItem])
    }
  }

  return (
    <Downshift
      stateReducer={stateReducer}
      itemToString={item => (item ? item.name : '')}
      onSelect={handleSelect}
      onOuterClick={({ clearSelection }) => clearSelection()}
    >
      {({
        getLabelProps,
        getInputProps,
        getMenuProps,
        isOpen,
        inputValue,
        getItemProps,
        highlightedIndex,
        openMenu
      }) => (
        <div>
          <Styled.InputGroup>
            <Styled.Label {...getLabelProps()}>{label}</Styled.Label>
            <Styled.Input {...getInputProps({ onFocus: openMenu })} />
          </Styled.InputGroup>
          <Styled.List {...getMenuProps({ isOpen })}>
            {isOpen
              ? items
                  .filter(
                    item =>
                      !inputValue ||
                      item.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <Styled.Item
                      highlighted={highlightedIndex === index}
                      selected={selectedItems.includes(item)}
                      color={item.color}
                      key={item.name}
                      {...getItemProps({ item })}
                    >
                      {item.name}
                    </Styled.Item>
                  ))
              : null}
          </Styled.List>
        </div>
      )}
    </Downshift>
  )
}

export default App
