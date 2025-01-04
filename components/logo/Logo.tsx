/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { FC, forwardRef } from 'react';
import Link from 'next/link';
import { SxProps, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type SVGProps = {
  width: string;
};

const SVG: FC<SVGProps> = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      // height="325"
      fill="none"
      className="logo"
      viewBox="0 0 1163 325"
    >
      <path
        fill="url(#paint0_linear_407_2)"
        d="M130.8 154.6H94V321H25.6V154.6H.8V97.8h24.8v-6.4c0-27.467 7.867-48.267 23.6-62.4C64.933 14.6 88 7.4 118.4 7.4c5.067 0 8.8.133 11.2.4v58c-13.067-.8-22.267 1.067-27.6 5.6-5.333 4.533-8 12.667-8 24.4v2h36.8v56.8zm111.741 169.6c-21.867 0-41.6-4.667-59.2-14-17.334-9.333-31.067-22.667-41.2-40-9.867-17.333-14.8-37.6-14.8-60.8 0-22.933 5.066-43.067 15.2-60.4 10.133-17.6 24-31.067 41.6-40.4 17.6-9.333 37.333-14 59.2-14 21.866 0 41.6 4.667 59.2 14s31.466 22.8 41.6 40.4c10.133 17.333 15.2 37.467 15.2 60.4s-5.2 43.2-15.6 60.8c-10.134 17.333-24.134 30.667-42 40-17.6 9.333-37.334 14-59.2 14zm0-59.2c13.066 0 24.133-4.8 33.2-14.4 9.333-9.6 14-23.333 14-41.2 0-17.867-4.534-31.6-13.6-41.2-8.8-9.6-19.734-14.4-32.8-14.4-13.334 0-24.4 4.8-33.2 14.4-8.8 9.333-13.2 23.067-13.2 41.2 0 17.867 4.266 31.6 12.8 41.2 8.8 9.6 19.733 14.4 32.8 14.4zm232.687 59.2c-21.867 0-41.6-4.667-59.2-14-17.333-9.333-31.067-22.667-41.2-40-9.867-17.333-14.8-37.6-14.8-60.8 0-22.933 5.067-43.067 15.2-60.4 10.133-17.6 24-31.067 41.6-40.4 17.6-9.333 37.333-14 59.2-14 21.867 0 41.6 4.667 59.2 14s31.467 22.8 41.6 40.4c10.133 17.333 15.2 37.467 15.2 60.4s-5.2 43.2-15.6 60.8c-10.133 17.333-24.133 30.667-42 40-17.6 9.333-37.333 14-59.2 14zm0-59.2c13.067 0 24.133-4.8 33.2-14.4 9.333-9.6 14-23.333 14-41.2 0-17.867-4.533-31.6-13.6-41.2-8.8-9.6-19.733-14.4-32.8-14.4-13.333 0-24.4 4.8-33.2 14.4-8.8 9.333-13.2 23.067-13.2 41.2 0 17.867 4.267 31.6 12.8 41.2 8.8 9.6 19.733 14.4 32.8 14.4zm117.488-56c0-22.933 4.266-43.067 12.8-60.4 8.8-17.333 20.666-30.667 35.6-40 14.933-9.333 31.6-14 50-14 14.666 0 28 3.067 40 9.2 12.266 6.133 21.866 14.4 28.8 24.8V25h68.4v296h-68.4v-32c-6.4 10.667-15.6 19.2-27.6 25.6-11.734 6.4-25.467 9.6-41.2 9.6-18.4 0-35.067-4.667-50-14-14.934-9.6-26.8-23.067-35.6-40.4-8.534-17.6-12.8-37.867-12.8-60.8zm167.2.4c0-17.067-4.8-30.533-14.4-40.4-9.334-9.867-20.8-14.8-34.4-14.8-13.6 0-25.2 4.933-34.8 14.8-9.334 9.6-14 22.933-14 40s4.666 30.667 14 40.8c9.6 9.867 21.2 14.8 34.8 14.8 13.6 0 25.066-4.933 34.4-14.8 9.6-9.867 14.4-23.333 14.4-40.4zM890.2 74.6c-12 0-21.867-3.467-29.6-10.4-7.467-7.2-11.2-16-11.2-26.4 0-10.667 3.733-19.467 11.2-26.4C868.333 4.2 878.2.6 890.2.6c11.733 0 21.333 3.6 28.8 10.8 7.733 6.933 11.6 15.733 11.6 26.4 0 10.4-3.867 19.2-11.6 26.4-7.467 6.933-17.067 10.4-28.8 10.4zm34 23.2V321h-68.4V97.8h68.4zm237.97 108c0 6.4-.4 13.067-1.2 20h-154.8c1.07 13.867 5.47 24.533 13.2 32 8 7.2 17.73 10.8 29.2 10.8 17.07 0 28.93-7.2 35.6-21.6h72.8c-3.73 14.667-10.53 27.867-20.4 39.6-9.6 11.733-21.73 20.933-36.4 27.6-14.67 6.667-31.07 10-49.2 10-21.87 0-41.33-4.667-58.401-14-17.067-9.333-30.4-22.667-40-40-9.6-17.333-14.4-37.6-14.4-60.8 0-23.2 4.666-43.467 14-60.8 9.6-17.333 22.933-30.667 40-40 17.071-9.333 36.671-14 58.801-14 21.6 0 40.8 4.533 57.6 13.6 16.8 9.067 29.87 22 39.2 38.8 9.6 16.8 14.4 36.4 14.4 58.8zm-70-18c0-11.733-4-21.067-12-28s-18-10.4-30-10.4c-11.47 0-21.2 3.333-29.2 10-7.73 6.667-12.53 16.133-14.4 28.4h85.6z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_407_2"
          x1="294.104"
          x2="1123.7"
          y1="273"
          y2="52.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0692A"></stop>
          <stop offset="0.417" stopColor="#F68043"></stop>
          <stop offset="1" stopColor="#FFA66B"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

type Props = {
  sx?: SxProps;
  disabledLink?: boolean;
  size?: 'sm' | 'md';
};

const Logo: FC<Props> = forwardRef(
  ({ disabledLink = false, sx, size = 'md', ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          ...sx
        }}
        {...other}
      >
        <SVG width={size === 'md' ? '160' : '120'} />
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <Link href="/">{logo}</Link>;
  }
);

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool
};

export default Logo;
