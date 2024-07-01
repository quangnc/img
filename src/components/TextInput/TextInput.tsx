import type { TextFieldProps } from '@mui/material'

import cx from 'classnames'
import { useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { TextField } from '@mui/material'

import { voidFn } from '@frontend/framework/utils'

export const TextInputDefaultProps = {
  InputProps: {
    classes: {
      root: 'h-10 text-sm bg-blue-100',
    },
  },
}

export type TextInputProps = TextFieldProps & {
  id: string
  label?: string
  debounceable?: boolean
  isNumeric?: boolean
}

export const TextInput = ({
  id,
  label,
  value: valueProps,
  fullWidth = false,
  debounceable,
  InputProps = TextInputDefaultProps.InputProps,
  onChange,
  isNumeric,
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState(valueProps || '')

  useEffect(() => setValue(valueProps), [valueProps])

  const handleChange = useMemo(
    () =>
      debounceable
        ? debounce(onChange || voidFn, 500, { trailing: true })
        : onChange,
    [debounceable, onChange]
  )

  return (
    <label
      htmlFor={id}
      className={cx('flex flex-col', { 'w-full': fullWidth })}
    >
      {label && (
        <span className="text-sm font-inter font-semibold text-blue-600 pl-[1px]">
          {label}
        </span>
      )}
      <TextField
        hiddenLabel
        id={id}
        value={value}
        InputProps={InputProps}
        onChange={(e) => {
          if (isNumeric) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '')
          }
          setValue(e.target.value)
          if (handleChange) {
            handleChange(e)
          }
        }}
        {...props}
      />
    </label>
  )
}
