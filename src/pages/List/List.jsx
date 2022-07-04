import { Grid } from "@mui/material"
import React, { useState } from "react"
import Loader from "../../components/Loader/Loader"

import styles from "./List.module.scss"

import ListItem from "./ListItem/ListItem"

const List = ({ sets }) => {
  const [sectionsLoaded, setSectionsLoaded] = useState(sets.map((v) => false))
  return (
    <>
      {!sectionsLoaded.every((v) => v) && <Loader />}
      <Grid container className={styles.container}>
        {sets.map((s, i) => (
          <Grid
            key={s.name}
            className={`${s.name} ${styles.section}`}
            item
            xs={12}
          >
            <ListItem
              name={s.name}
              images={s.images}
              pieces={s.pieces}
              order={i}
              setLoaded={setSectionsLoaded}
              ready={sectionsLoaded.every((v) => v)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default List
