import type { TooltipProps } from '@mui/material'

import { useEffect, useState } from 'react'
import { Button, ClickAwayListener, Tooltip } from '@mui/material'

type CopyToClipboardProps = Pick<TooltipProps, 'placement'> & {
  copyContent: string
}

export const CopyToClipboard = ({
  copyContent,
  placement = 'bottom-end',
}: CopyToClipboardProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const closeTooltip = () => {
    setIsTooltipOpen(false)
  }

  const openTooltip = () => {
    setIsTooltipOpen(true)
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTooltipOpen) {
      timeout = setTimeout(() => {
        closeTooltip()
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isTooltipOpen])

  return (
    <ClickAwayListener onClickAway={closeTooltip}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        classes={{
          popper: '-mt-4',
          tooltip:
            'text-xs font-inter font-semibold px-3 py-1 bg-blue-200 border border-blue-300 text-black',
        }}
        onClose={closeTooltip}
        open={isTooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Copied to clipboard"
        placement={placement}
      >
        <Button
          color="inherit"
          aria-label="copy to clipboard"
          disableRipple
          classes={{
            root: 'hover:bg-transparent focus:ring focus:ring-blue-400 justify-start p-0',
          }}
          onClick={() => {
            navigator.clipboard.writeText(copyContent).then(() => {
              openTooltip()
            })
          }}
        >
          <span className="text-sm normal-case text-black line-clamp-1 text-left">
            {copyContent}
          </span>
        </Button>
      </Tooltip>
    </ClickAwayListener>
  )
}
