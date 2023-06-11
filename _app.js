/** @format */

import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.scss";

import HomeLayouts from "@/components/Layouts/HomeLayouts";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          duration: .3,
        }}
        variants={{
          initialState: {
            opacity: 0,
            filter : "blur(10px)",
            transform : "translateX(20px) rotate()",
            // clipPath: "polygon(0% 0%, 100% 0%,100%  100%  ,0% 100%)",
          },
          animateState: {
            opacity: 1,
            filter : "blur(0px)",
            transform : "translateX(0px) rotate()",
            // clipPath: "polygon(0% 0%, 100% 0%,100% 100% , 0% 100%)",
          },
          exitState: {
            opacity : 0,
            filter : "blur(10px)",
            transform : "translateX(-20px) rotate()",
            // clipPath: "polygon(50% 0%, 50% 0%, 50% 100%,50% 100%)",
          },
        }}>
        <HomeLayouts>
          <Component {...pageProps} />
        </HomeLayouts>
      </motion.div>
    </AnimatePresence>
  );
}
