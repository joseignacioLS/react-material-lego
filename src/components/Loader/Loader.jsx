import { Box } from "@mui/material"
import React from "react"

import { motion } from "framer-motion"

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{
          transform: ["translateY(20%)", "translateY(0%)", "translateY(20%)"],
        }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <img width="120px" src="/assets/loader.png" />
      </motion.div>
    </Box>
  )
}

export default Loader
