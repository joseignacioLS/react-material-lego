import { Box, Grid, ImageList, ImageListItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import Loader from "../../components/Loader/Loader"

import styles from "./Detail.module.scss"

const ORIGINS = [
  "translate(-200px, 0%)",
  "translate(0%, 200px)",
  "translate(200px, 0%)",
  "translate(0%, -200px)",
]

const Detail = ({ sets }) => {
  const { name } = useParams()
  const [data, setData] = useState({})

  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    if (!name || !sets) return
    const newData = sets.filter((d) => d.name === name)[0]
    setData(newData)

    setLoadedImages(0)

    newData.images.forEach((img) => {
      const imgDOM = new Image()
      imgDOM.addEventListener("load", () => {
        setLoadedImages((oldValue) => oldValue + 1)
      })
      imgDOM.src = `/assets/imgs/lego_${img}`
    })
  }, [name, sets])

  return (
    <>
      {data?.name && (
        <Box className={styles.main}>
          <Grid container>
            <Grid
              item
              sx={{
                textAlign: { xs: "left", md: "center" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <h1>{data.name}</h1>
            </Grid>
            <Grid
              container
              sx={{
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Grid
                item
                sx={{
                  padding: { xs: "0", md: "0 2rem" },
                  textAlign: { xs: "left", md: "center" },
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <p>{`
                This is the description of the awesome ${name},
                which is a extraordinary lego set of ${data.pieces} pieces!`}</p>
              </Grid>
              <Grid
                item
                sx={{ width: { xs: "100%", md: "50%" }, maxHeight: "100vh" }}
              >
                {loadedImages === data.images.length ? (
                  <ImageList cols={2} gap={32} sx={{ overflow: "hidden" }}>
                    {data.images.map((img, i) => {
                      return (
                        <motion.div
                          key={img}
                          animate={{
                            transform: "translate(0%, 0%)",
                            opacity: 1,
                          }}
                          transition={{ duration: 1, delay: i / 10 }}
                          initial={{ transform: ORIGINS[i % 4], opacity: 0 }}
                        >
                          <ImageListItem>
                            <img
                              src={`/assets/imgs/lego_${img}`}
                              loading={"lazy"}
                            />
                          </ImageListItem>
                        </motion.div>
                      )
                    })}
                  </ImageList>
                ) : (
                  <Loader />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default Detail
