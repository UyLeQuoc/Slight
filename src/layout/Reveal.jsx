import {useRef, useEffect} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

function Reveal({children}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainContoller = useAnimation();
  useEffect(() => {
    if(isInView) {
      mainContoller.start("visible");
    }
  },[isInView])
  return (
    <div ref={ref} className='relative overflow-hidden, w-full'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainContoller}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal