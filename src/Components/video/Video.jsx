import React,{useRef} from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
const Video = ({src}) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: 0.4,
  });
  const { scrollYProgress } = useScroll(
    () => {
      console.log(scrollYProgress);
    },
    {
      target: [targetRef],
      offset: ["start end", "end start"],
    }
  );
  const scale = useTransform(scrollYProgress, [0, 0.3,0.6], [1,1.2,1.5]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1,0.9]);
  return (
    <div className=' overflow-hidden'>
    <motion.div style={{scale:scale,opacity:opacity,overflowX:"hidden"}}  ref={targetRef}>
        <video autoPlay muted  
          style={{width:"100%",
          }}
        >
            <source src={src} />
        </video>
    </motion.div>
    </div>
  )
}

export default Video