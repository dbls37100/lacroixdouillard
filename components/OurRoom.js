import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "../styles/components/OurRoom.module.css";
import { Parallax } from "react-scroll-parallax";

export default function BasicTable() {
  const [entered, setEntered] = useState(false);

  return (
    <section id="OurRoom" className={styles.OurRoom}>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
      <h2
        className={
          entered === true
            ? styles.OurRoom_h5_title
            : styles.OurRoom_h5_title_normal
        }
      >
        Salles & espaces
      </h2>
      <p className={styles.OurRoom_p}>
        Offrant un espace de réception de 50 à 1000 personnes sur 1800 m2
        Modulable et réparti en plusieurs salles, Les Caves de la Croix
        Douillard sont largement pourvues en espace cuisine pour les traiteurs,
        en vestiaires et sanitaires, ainsi qu&apos;un parking en conséquence. Un
        lieu idéal pour toutes vos manifestations. C&apos;est la lieu parfait
        pour tout evénements divers, réceptions officielles, privées ou
        familiales, Congrès, Mariages, Anniversaires, Baptêmes.
      </p>
      <TableContainer
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
        className={
          entered
            ? styles.OurRoom_TableContainer_mobile
            : styles.hidden_class_mobile
        }
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
      <h4>Espaces groupés</h4>
      <TableContainer
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
        className={
          entered
            ? styles.OurRoom_TableContainer_mobile
            : styles.hidden_class_mobile
        }
        sx={{
          maxWidth: "80%",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "15%",
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
