import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/components/OurRoom.module.css";

export default function BasicTable() {
  return (
    <div className={styles.OurRoom}>
      <h5 className={styles.OurRoom_h5_title}>Salles & espaces</h5>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Espace</TableCell>
              <TableCell align="right">Superficie</TableCell>
              <TableCell align="right">Cocktail</TableCell>
              <TableCell align="right">Conférence</TableCell>
              <TableCell align="right">Banquet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Salle François 1er
              </TableCell>
              <TableCell align="right">500 m²</TableCell>
              <TableCell align="right">500</TableCell>
              <TableCell align="right">300</TableCell>
              <TableCell align="right">450</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Salle Léonard de Vinci
              </TableCell>
              <TableCell align="right">300 m²</TableCell>
              <TableCell align="right">300</TableCell>
              <TableCell align="right">150</TableCell>
              <TableCell align="right">200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h6>Espaces groupés</h6>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Espace</TableCell>
              <TableCell align="right">Superficie</TableCell>
              <TableCell align="right">Cocktail</TableCell>
              <TableCell align="right">Conférence</TableCell>
              <TableCell align="right">Banquet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                Salle François 1er + Caveau + Bar
              </TableCell>
              <TableCell align="right">650 m²</TableCell>
              <TableCell align="right">650</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">600</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                Salle François 1er + Caveau + Bar + Choiseul
              </TableCell>
              <TableCell align="right">1000 m²</TableCell>
              <TableCell align="right">750</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">700</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                L&apos;Ensemble des Salles
              </TableCell>
              <TableCell align="right">1000 m²</TableCell>
              <TableCell align="right">1000</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">1000</TableCell>
              {/* <TableCell align="right">200</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
