import {
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
// utils
import localStorageAvailable from '../../utils/localStorageAvailable';
//
import { defaultSettings } from './config-setting';

import {
  ThemeModeValue,
  SettingsContextProps,
} from './types';

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [themeMode, setThemeMode] = useState(defaultSettings.themeMode);


  const storageAvailable = localStorageAvailable();


  useEffect(() => {
    if (storageAvailable) {
      const mode = getCookie('themeMode') || defaultSettings.themeMode;

      setThemeMode(mode as ThemeModeValue);

    }
  }, [storageAvailable]);

  // Mode
  const onToggleMode = useCallback(() => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(value);
    setCookie('themeMode', value);
  }, [themeMode]);

  const onChangeMode = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeModeValue;
    setThemeMode(value);
    setCookie('themeMode', value);
  }, []);


  const memoizedValue = useMemo(
    () => ({
      // Mode
      themeMode,
      onToggleMode,
      onChangeMode,
      
    }),
    [
      // Mode
      themeMode,
      onChangeMode,
      onToggleMode,

    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}

// ----------------------------------------------------------------------

function getCookie(name: string) {
  if (typeof document === 'undefined') {
    throw new Error(
      'getCookie() is not supported on the server. Fallback to a different value when rendering on the server.'
    );
  }

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts[1].split(';').shift();
  }

  return undefined;
}

function setCookie(name: string, value: string, exdays = 3) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function removeCookie(name: string) {
  document.cookie = `${name}=;path=/;max-age=0`;
}
