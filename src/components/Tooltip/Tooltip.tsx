import type { TooltipProps as MuiTooltipProps } from '@mui/material'

import { useState } from 'react'
import { Tooltip as MuiTooltip, ClickAwayListener } from '@mui/material'

export type TooltipProps = MuiTooltipProps & {
  trigger?: 'hover' | 'click' | 'touch'
  disabled?: boolean
}

export const Tooltip = ({
  open,
  onClose,
  trigger = 'hover',
  placement = 'bottom',
  enterDelay = 100,
  leaveDelay = 100,
  disabled = false,
  children,
  ...props
}: TooltipProps) => {
  const [isOpen, setOpen] = useState(open)

  const handleTooltipClose = (e?: MouseEvent | TouchEvent) => {
    setOpen(false)
    if (e && onClose) {
      onClose(e)
    }
  }

  const triggerProps = {
    disableFocusListener: disabled || trigger === 'click',
    disableTouchListener:
      disabled || trigger === 'click' || trigger === 'hover',
    disableHoverListener:
      disabled || trigger === 'click' || trigger === 'touch',
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <MuiTooltip
        open={isOpen}
        placement={placement}
        enterDelay={enterDelay}
        leaveDelay={leaveDelay}
        classes={{
          tooltip:
            'text-xs font-inter font-semibold px-3 py-1 bg-blue-200 border border-blue-300 text-black',
        }}
        {...triggerProps}
        {...props}
      >
        {children}
      </MuiTooltip>
    </ClickAwayListener>
  )
}
