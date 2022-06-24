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
    <section id="OurRoom" className={styles.OurRoom}>
      <h3>Salles & espaces</h3>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer_desktop}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Espace
              </TableCell>
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
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er
              </TableCell>
              <TableCell align="right">500 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">500&nbsp;&nbsp;</TableCell>
              <TableCell align="right">300&nbsp;&nbsp;</TableCell>
              <TableCell align="right">450&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle Léonard de Vinci
              </TableCell>
              <TableCell align="right">300 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">300&nbsp;&nbsp;</TableCell>
              <TableCell align="right">150&nbsp;&nbsp;</TableCell>
              <TableCell align="right">200&nbsp;&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer_mobile}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Espace
              </TableCell>
              <TableCell align="right">Superficie</TableCell>
              <TableCell align="right">Assis</TableCell>
              <TableCell align="right">Debout</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er
              </TableCell>
              <TableCell align="right">500 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">500&nbsp;&nbsp;</TableCell>
              <TableCell align="right">450&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle Léonard de Vinci
              </TableCell>
              <TableCell align="right">300 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">300&nbsp;&nbsp;</TableCell>
              <TableCell align="right">200&nbsp;&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h6>Espaces groupés</h6>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer_desktop}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Espace
              </TableCell>
              <TableCell align="right">Superficie</TableCell>
              <TableCell align="right">Cocktail</TableCell>
              <TableCell align="right">Conférence</TableCell>
              <TableCell align="right">Banquet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er + Caveau + Bar
              </TableCell>
              <TableCell align="right">650 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">650&nbsp;&nbsp;</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">600&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er + Caveau + Bar + Choiseul
              </TableCell>
              <TableCell align="right">1000 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">750&nbsp;&nbsp;</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">700&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                L&apos;Ensemble des Salles
              </TableCell>
              <TableCell align="right">1000 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">1000&nbsp;&nbsp;</TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell align="right">1000&nbsp;&nbsp;</TableCell>
              {/* <TableCell align="right">200</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer
        component={Paper}
        className={styles.OurRoom_TableContainer_mobile}
        sx={{
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Espace
              </TableCell>
              <TableCell align="right">Superficie</TableCell>
              <TableCell align="right">Assis</TableCell>
              <TableCell align="right">Debout</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er + Caveau + Bar
              </TableCell>
              <TableCell align="right">650 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">650&nbsp;&nbsp;</TableCell>
              <TableCell align="right">600&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                Salle François 1er + Caveau + Bar + Choiseul
              </TableCell>
              <TableCell align="right">1000 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">750&nbsp;&nbsp;</TableCell>
              <TableCell align="right">700&nbsp;&nbsp;</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  width: "20%",
                  maxWidth: "20%",
                }}
              >
                L&apos;Ensemble des Salles
              </TableCell>
              <TableCell align="right">1000 m²&nbsp;&nbsp;</TableCell>
              <TableCell align="right">1000&nbsp;&nbsp;</TableCell>
              <TableCell align="right">1000&nbsp;&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
