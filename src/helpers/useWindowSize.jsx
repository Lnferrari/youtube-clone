import { useState, useEffect } from 'react'

const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    const handleResize =() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return windowSize
}

export default useWindowSize