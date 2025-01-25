// Label.tsx
import React, { forwardRef, ReactNode } from 'react';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { StyledLabel } from './styles';

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The label text or node */
  children?: ReactNode;
  /** One of the theme color keys */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  /** Visual style of the label */
  variant?: 'filled' | 'outlined' | 'ghost' | 'soft';
  /** Icon/element rendered to the left */
  startIcon?: ReactNode;
  /** Icon/element rendered to the right */
  endIcon?: ReactNode;
  /** MUI's system prop for additional styling */
  sx?: SxProps<Theme>;
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  (
    {
      children,
      color = 'default',
      variant = 'soft',
      startIcon,
      endIcon,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' }
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx
        }}
        // If your StyledLabel uses theme from context, no need to pass `theme` as a prop.
        // Some setups do require it, but typically styled() has access via ThemeProvider.
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}>{startIcon}</Box>}
        {children}
        {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}>{endIcon}</Box>}
      </StyledLabel>
    );
  }
);

Label.displayName = 'Label';

export default Label;
