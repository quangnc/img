import type { Value, SelectProps } from './Select'

import { useState } from 'react'
import { InputBase } from '@mui/material'

import { Button } from '@frontend/framework/Button'

import { Select } from './Select'

export type SelectButtonProps<T extends Value> = SelectProps<T>

export const SelectButton = <T extends Value>({
  fullWidth,
  ...props
}: SelectButtonProps<T>) => {
  const [isSelectOpen, setOpenSelect] = useState(false)

  const handleClose = () => setOpenSelect(false)

  const handleOpen = () => setOpenSelect(true)

  return (
    <Button
      disableFocusRipple
      color="inherit"
      variant="text"
      fullWidth={fullWidth}
      onClick={(e) => {
        e.stopPropagation()
        setOpenSelect(!isSelectOpen)
      }}
      classes={{ root: 'flex items-center justify-center p-0' }}
    >
      <Select<T>
        fullWidth={fullWidth}
        open={isSelectOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        input={<InputBase />}
        classes={{ icon: 'hidden', select: 'py-0 px-2' }}
        {...props}
      />
    </Button>
  )
}
