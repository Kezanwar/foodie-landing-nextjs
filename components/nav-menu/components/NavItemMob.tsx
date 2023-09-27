import { ListItemButton, alpha, styled } from '@mui/material';

type Props = { active: boolean };

export const NavItemMob = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active'
})<Props>(({ disabled, theme, active }) => {
  const isLight = theme.palette.mode === 'light';

  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    ...(!isLight && {
      color: theme.palette.primary.light
    })
  };

  return {
    position: 'relative',
    textTransform: 'capitalize',
    padding: theme.spacing(1.5),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    fontSize: 15,

    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': {
        ...activeStyle
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
