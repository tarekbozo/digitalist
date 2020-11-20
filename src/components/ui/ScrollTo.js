import { useEffect } from 'react';

export default function ScrollTo() {
  useEffect(() => {
    window.scrollTo({
      top: 100000,
      bottom: 0,
      behavior: 'smooth',
    });
  }, []);

  return null;
}
