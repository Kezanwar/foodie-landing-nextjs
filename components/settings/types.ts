// ----------------------------------------------------------------------

type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type ThemeModeValue = 'light' | 'dark';


export type SettingsValueProps = {
  themeMode: ThemeModeValue;

};

export type SettingsContextProps = SettingsValueProps & {
  // Mode
  onToggleMode: VoidFunction;
  onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;

};
