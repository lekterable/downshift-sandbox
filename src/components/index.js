import React, { useState } from 'react'
import AutoComplete from './autocomplete'
import MultiSelect from './multiselect'
import * as Styled from './styled'
import TypeAhead from './typeahead'

const colors = [
  { id: '1', value: 'yellow', hash: '#FFBA08' },
  { id: '2', value: 'green', hash: '#43B929' },
  { id: '3', value: 'blue', hash: '#2892D7' },
  { id: '4', value: 'red', hash: '#990D35' },
  { id: '5', value: 'pink', hash: '#FF4F79' }
]
const names = ['Bandit', 'Charlie', 'Winston', 'Rufus', 'Rex']
const pokemons = [
  { name: 'Pikachu', color: '#FAD61D' },
  { name: 'Bulbasaur', color: '#89C893' },
  { name: 'Charmander', color: '#FE9441' },
  { name: 'Magikarp', color: '#E53800' }
]

export default () => {
  const [color, setColor] = useState('')
  const [name, setName] = useState('')
  const [team, setTeam] = useState([])

  return (
    <Styled.Container>
      <Styled.GlobalStyle />
      <Styled.Group>
        <Styled.Title>downshift 🏎</Styled.Title>
      </Styled.Group>
      <Styled.Group>
        <Styled.Title>
          {color ? (
            <>
              <span>Your favorite color is </span>
              <Styled.SelectedItem color={color.hash}>
                {color.value}
              </Styled.SelectedItem>
            </>
          ) : (
            <span>1. Autocomplete</span>
          )}
        </Styled.Title>
        <AutoComplete
          items={colors}
          onChange={setColor}
          label="Select your favorite color"
        />
      </Styled.Group>
      <Styled.Group>
        <Styled.Title>
          {name ? (
            <>
              <span>Your dog's name is </span>
              <Styled.SelectedItem color="#EF0D33">{name}</Styled.SelectedItem>
            </>
          ) : (
            <span>2. Typeahead</span>
          )}
        </Styled.Title>
        <TypeAhead
          selectedItem={name}
          items={names}
          onChange={setName}
          label="Pick your dog's name"
        />
      </Styled.Group>
      <Styled.Group>
        <Styled.Title>
          {team.length > 0 ? (
            <>
              <span>Your team - </span>
              {team.map(({ name, color }, index) => (
                <span key={name}>
                  {Boolean(index) && index < team.length && ', '}
                  <Styled.SelectedItem color={color}>
                    {name}
                  </Styled.SelectedItem>
                </span>
              ))}
            </>
          ) : (
            <span>3. Multiselect</span>
          )}
        </Styled.Title>
        <MultiSelect
          selectedItems={team}
          items={pokemons}
          onChange={setTeam}
          label="Choose your team"
        />
      </Styled.Group>
    </Styled.Container>
  )
}
