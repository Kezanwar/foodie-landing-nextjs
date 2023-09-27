import { ListItemButton, alpha, styled } from '@mui/material';

type Props = { active: boolean };

export const NavItemDesktop = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active'
})<Props>(({ disabled, theme, active }) => {
  const isLight = theme.palette.mode === 'light';

  const activeStyle = {
    color: theme.palette.primary.main,

    ...(!isLight && {
      color: theme.palette.primary.light
    })
  };

  const activeHoverStyle = {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  };

  return {
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,

    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': {
        ...activeHoverStyle
      }
    }),

    // Disabled
    ...(disabled && {
      '&.Mui-disabled': {
        opacity: 0.64
      }
    })
  };
});
