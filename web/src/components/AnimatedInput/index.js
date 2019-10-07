import React, { useState } from 'react'
import { Placeholder, Group, Label, Input, Textarea } from './styles'
import { useCharming } from './utils'

const AnimatedInput = ({
  label: text,
  name,
  required,
  isTextarea,
  dark,
  type = 'text',
  styles = {}
}) => {
  const [state, setState] = useState({ value: '', placeholderOpacity: 1 })
  const { label, input, placeholder } = useCharming()

  const Comp = isTextarea ? Textarea : Input
  return (
    <Group fullHeight={false}>
      <Label htmlFor={name} ref={label} style={styles.label}>
        {text || name}:
      </Label>
      <Comp
        style={styles.input}
        name={name}
        id={name}
        type={type}
        required={required}
        ref={input}
        dark={dark}
        value={state.value}
        onChange={({ target: { value } }) => {
          if (value.length !== 0) {
            setState({ placeholderOpacity: 0, value })
          } else {
            setState({ placeholderOpacity: 1, value })
          }
        }}
      />
      <Placeholder opacity={state.placeholderOpacity} ref={placeholder} style={styles.placeholder}>
        {text || name}:
      </Placeholder>
    </Group>
  )
}

export default AnimatedInput
