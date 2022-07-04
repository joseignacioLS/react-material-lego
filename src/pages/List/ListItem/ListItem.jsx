import { Grid, ImageListItemBar } from "@mui/material"
import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styles from "./ListItem.module.scss"
import { Link } from "react-router-dom"

const ListItem = ({ name, images, pieces, order, setLoaded, ready }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    const img = new Image()
    img.addEventListener("load", () => {
      console.log(`${name} loaded image ${order}`)
      setLoaded((oldValue) => {
        let newValue = [...oldValue]
        newValue[order] = true
        return newValue
      })
    })
    img.src = `/assets/imgs/lego_${images[0]}`
  }, [])

  useEffect(() => {
    if (!ready) return
    if (inView) {
      console.log(`${name} is loaded and in view`)
      controls.start({
        transform: "translateX(0px)",
        opacity: 1,
        transition: { ease: "easeOut", duration: 1, delay: 0.5 },
      })
    } else {
      // console.log(`${name} not in view`)
      // controls.start({
      //   opacity: 0,
      //   transform: order % 2 === 0 ? "translateX(-300%)" : "translateX(300%)",
      //   transition: { duration: 0 },
      // })
    }
  }, [controls, inView, ready])
  return (
    <>
      {ready && (
        <Grid container ref={ref} id={`${name}`} className={styles.section}>
          <Grid className={styles.sectionItem} item>
            <Link to={`/${name}`}>
              <motion.div
                className={styles.imageContainer}
                animate={controls}
                initial={{
                  opacity: 0,
                  transform:
                    order % 2 === 0
                      ? "translateX(-500px)"
                      : "translateX(500px)",
                }}
              >
                <img
                  className={styles.image}
                  src={`/assets/imgs/lego_${images[0]}`}
                />
                <ImageListItemBar
                  title={
                    <>
                      <strong>{name}</strong>
                      {` - ${pieces} pieces`}
                    </>
                  }
                  position="below"
                  className={styles.imageText}
                ></ImageListItemBar>
              </motion.div>
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ListItem
