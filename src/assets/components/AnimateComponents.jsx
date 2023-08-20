import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimateComponents = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current && !hasAnimated) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          mainControls.start("animate");
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainControls, hasAnimated]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
              duration: 0.5,
            },
          },
        }}
        initial="initial"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateComponents;
