import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMob, setIsMob] = useState<boolean>(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|iPhone|iPad|iPod/i));
    setIsMob(mobile);
  }, []);

  return isMob;
};

export default useIsMobile;
