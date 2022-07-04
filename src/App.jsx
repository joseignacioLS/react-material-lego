import Header from "./core/Header/Header"

import { Routes, Route } from "react-router-dom"
import List from "./pages/List/List"
import Detail from "./pages/Detail/Detail"
import { Box } from "@mui/material"

const SECTIONS = [
  {
    name: "Bonsai Tree",
    images: ["bonsai_caja.jpg", "bonsai.jpg", "bonsai_alt.png"],
    pieces: 878,
  },
  {
    name: "Flower Bouquet",
    images: ["ramo_caja.jpg", "ramo.jpg", "ramo_alt.png"],
    pieces: 756,
  },
  {
    name: "Bird Of Paradise",
    images: ["fenix_caja.jpg", "fenix.jpg", "fenix_alt.png"],
    pieces: 1173,
  },
  {
    name: "Succulents",
    images: ["suculentas_caja.png", "suculentas.png", "suculentas_alt.png"],
    pieces: 771,
  },
  {
    name: "Orchid",
    images: ["orquideas_caja.png", "orquideas.png", "orquideas_alt.png"],
    pieces: 608,
  },
]

function App() {
  return (
    <>
      <Header sets={SECTIONS.map((v) => v.name)} />
      <Box sx={{ marginTop: "3rem" }}>
        <Routes>
          <Route path="/" element={<List sets={SECTIONS} />}></Route>
          <Route path="/:name" element={<Detail sets={SECTIONS} />}></Route>
        </Routes>
      </Box>
    </>
  )
}

export default App
