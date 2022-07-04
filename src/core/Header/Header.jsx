import { AppBar, Box, Button, Menu, MenuItem } from "@mui/material"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./Header.module.scss"

const Header = ({ sets }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <Box>
      <AppBar
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: ".5rem",
        }}
      >
        <Link to="/">
          <img className={styles.logo} src="/assets/icons/lego.svg" />
        </Link>
        <Button id="basic-button" onClick={handleClick} sx={{ color: "white" }}>
          Botanical sets
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          {sets.map((s) => (
            <MenuItem key={s}>
              <Link to={`/${s}`} onClick={() => setAnchorEl(null)}>
                {s}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </Box>
  )
}

export default Header
