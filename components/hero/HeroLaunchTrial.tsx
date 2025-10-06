import React, { FC, useState } from 'react';
import {
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Snackbar
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { Container } from 'components/container';

import GradientText from 'components/gradient-text';
import FloatInView from 'components/float-in-view';
import RegisterButton from 'components/register-button';

type Props = {};

const discountCode = 'LAUNCH3';

const HeroLaunchTrial: FC<Props> = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <Container>
      <FloatInView>
        <div className="flex flex-col  justify-center items-center gap-3">
          <Typography textAlign={'center'} mb={2} variant="h2">
            Get 3 Months Free 🚀
          </Typography>
          <Typography
            textAlign={'center'}
            className="xl:w-[50%]"
            variant="body1"
            color={'text.secondary'}
          >
            Join Manchesters newest food discovery platform without paying
            commission, booking fees or any other hidden payments.{' '}
          </Typography>
          <Typography
            className="xl:w-[50%]"
            textAlign={'center'}
            variant="body1"
            color={'text.secondary'}
          >
            <GradientText fontWeight={'bold'}>Limited time offer </GradientText>{' '}
            of 3 months free membershrip for founding partners (first 100
            restaurants) right at your fingertips!{' '}
          </Typography>
          <Typography
            textAlign={'center'}
            variant="body1"
            color={'text.secondary'}
          >
            Cancel anytime, choose a tier and use the code below at checkout.
          </Typography>
          <div className="flex flex-col lg:flex-row  justify-center items-center mt-6 gap-5">
            <TextField
              value={discountCode}
              variant="outlined"
              size="small"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={handleCopy} edge="end">
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ maxWidth: 200 }}
            />
            <RegisterButton />
          </div>
          {copied && (
            <Snackbar
              open={copied}
              autoHideDuration={6000}
              onClose={() => setCopied(false)}
              message="🚀 Copied"
            />
          )}
        </div>
      </FloatInView>
      {/* <div className="flex h-max -my-[20px]  justify-center items-center gap-3">
        <button className="reset-btn">
          <Image
            height={100}
            width={175}
            src="static/icons/app-store/apple-app-store.svg"
            alt="download on the apple app store"
          />
        </button>
        <button className="reset-btn">
          <Image
            height={100}
            width={160}
            src="static/icons/app-store/google-play-store.svg"
            alt="download on the apple app store"
          />
        </button>
      </div>
      <div className="flex  justify-center items-end gap-3  pt-4">
        <Image
          height={300}
          width={275}
          alt="phone"
          className="hidden md:block"
          src={'/static/images/phone-following.png'}
        />
        <Image
          height={300}
          width={300}
          alt="phone"
          className="hidden md:block"
          src={'/static/images/phone-feed.png'}
        />
        <Image
          height={300}
          width={275}
          alt="phone"
          src={'/static/images/phone-discover.png'}
        />
      </div> */}
    </Container>
  );
};

export default HeroLaunchTrial;
