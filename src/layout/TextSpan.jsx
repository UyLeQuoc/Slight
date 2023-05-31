import {useState} from 'react'
import { motion,  useAnimationControls } from 'framer-motion'

function TextSpan({children}) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const textVariants = () => {
    setIsPlaying(true);
    controls.start({
      transform: [
        "scale(1, 1)",
        "scale(1.5, .5)",
        "scale(1.75, 1.25)",
        "scale(1.25, 1.75)",
        "scale(.9, 1.05)",
        "scale(1, 2)",

      ],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    })
  }
  return (
    <motion.span 
      animate={controls}
      onMouseOver={() => {
        if(!isPlaying) textVariants();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  )
}

export default TextSpan