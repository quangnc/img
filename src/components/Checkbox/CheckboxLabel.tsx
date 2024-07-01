import type { ReactElement } from 'react'
import type { FormControlLabelProps } from '@mui/material'

import { FormControlLabel } from '@mui/material'

export type CheckboxLabelProps = {
  label: FormControlLabelProps['label']
  children: ReactElement
}

export const CheckboxLabel = ({ label, children }: CheckboxLabelProps) => {
  return (
    <FormControlLabel
      label={label}
      classes={{ label: 'text-sm font-semibold font-inter' }}
      control={children}
    />
  )
}
