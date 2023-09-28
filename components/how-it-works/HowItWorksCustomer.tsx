/* eslint-disable react/no-unescaped-entities */
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { IconButton, Typography, styled } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from 'components/container';
import { LightLoadingButton } from 'components/light-loading-button';

const iconBtnStyles = {
  color: 'white'
};

const iconBtnIconStyles = { fontSize: 80 };

const getStartedBtnSx = {
  width: 'max-content',
  margin: ''
};

export const ActionBtn = styled(LightLoadingButton)(({ theme }) => ({
  width: 'max-content',
  margin: 'auto',
  [theme.breakpoints.up('lg')]: {
    margin: '0'
  }
}));

const HowItWorks: React.FC = () => {
  const vidRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  const onPlayVid: MouseEventHandler<HTMLButtonElement> = (e) => {
    setPlaying(true);
    if (vidRef?.current) {
      vidRef.current.play();
      vidRef.current.controls = true;
    }
  };

  useEffect(() => {
    if (playing) {
      if (vidRef?.current) {
        vidRef.current.play();
        vidRef.current.controls = true;
      }
    }
    if (!playing) {
      if (vidRef?.current) {
        vidRef.current.controls = false;
      }
    }
  }, [playing]);

  return (
    <Container>
      <Typography textAlign={'center'} variant="h2">
        How it works
      </Typography>
      <div className="  mt-12 lg:mt-20 flex flex-col-reverse lg:grid lg:grid-cols-[0.4fr_1fr] gap-16 lg:gap-32">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <Typography mb={3} lineHeight={'1.2'} variant="h3">
            It couldn't be easier...
          </Typography>
          <Typography variant="body1" mb={4} color={'text.secondary'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
            consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>

          <ActionBtn>Get started</ActionBtn>
        </div>
        <div className="relative scale-[0.8] lg:scale-[0.95] 2xl:scale-[0.8]">
          <img
            src="https://foodie-s3.s3.eu-west-2.amazonaws.com/ipad-bg-new.png"
            alt=""
            className="absolute pointer-events-none top-0 left-0 object-contain translate-x-[-15.9%] translate-y-[12%] scale-[1.398] z-[-1]"
          />
          <div className="bg-black relative ">
            <video
              onEnded={() => setPlaying(false)}
              ref={vidRef}
              controls={playing}
              className={`w-full h-full  rounded-[22px] ${
                !playing ? 'brightness-[0.6]' : ''
              }`}
              src="https://foodie-s3.s3.eu-west-2.amazonaws.com/sample-vid-how-we-work.mp4"
            ></video>
            {!playing && (
              <div className="absolute top-0 left-0 rounded-[26px] flex items-center justify-center w-full h-full">
                <IconButton onClick={onPlayVid} sx={iconBtnStyles}>
                  <PlayCircleIcon sx={iconBtnIconStyles} />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
