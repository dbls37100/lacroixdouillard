import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import ImageModal from "../components/ImageModal";
import styles from "../styles/components/Photos.module.css";
import photo from "/public/photo.webp";
import photo2 from "/public/photo2.webp";
import photo3 from "/public/photo3.webp";
import photo4 from "/public/photo4.webp";
import photo5 from "/public/photo5.jpg";
import photo6 from "/public/photo6.webp";
import photo7 from "/public/photo7.webp";
import photo8 from "/public/photo8.webp";
import photo9 from "/public/photo9.webp";
import photo10 from "/public/photo10.webp";
import { Parallax } from "react-scroll-parallax";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: image,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList({ setColorAfter }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  async function handleOpen(index) {
    await setIndex(index);
    setOpen(true);
  }

  return (
    <section id="Photos" className={styles.Photos}>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
      <h2
        className={
          entered === true
            ? styles.Photos_h5_title
            : styles.Photos_h5_title_normal
        }
      >
        Nos photos
      </h2>
      <ImageList
        sx={{ width: "90%", height: "auto", margin: "5% auto 0 auto" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item, indexPhotos) => (
          <ImageListItem
            key={indexPhotos}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              position: "relative",
            }}
          >
            <Image
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              // loading={"lazy"}
              layout="fill"
              onClick={() => handleOpen(indexPhotos)}
              className={styles.Photos_image}
              priority={indexPhotos === 0 ? "high" : "low"}
              sx={{
                position: "relative",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageModal
        open={open}
        setOpen={setOpen}
        title={itemData[0].title}
        index={index}
        setIndex={setIndex}
        itemData={itemData}
      />
    </section>
  );
}

const itemData = [
  {
    img: photo,
    title: "Evenements de mariage à la croix Douillard à Amboise",
    rows: 2,
    cols: 2,
    priority: 40,
  },
  {
    img: photo4,
    title:
      "Entrée des caves de la croix douillard à Amboise, ouvert pour tout evenements",
    priority: 40,
  },
  {
    img: photo3,
    title:
      "Bar des Caves de la croix douillard à Amboise, venez reserver pour votre evenement",
    priority: 40,
  },
  {
    img: photo2,
    title:
      "Soirée mariage, au caves de la croix douillard, venez feter un anniversaire, un mariage ou tout autres evenement aux Caves de la croix Douillard",
    cols: 2,
    priority: 40,
  },
  {
    img: photo5,
    title: "Dispositions des salles aux Caves de la Croix Douillard à Amboise",
    cols: 2,
    priority: 40,
  },
  {
    img: photo6,
    title: "Honey",
    author: "Banquet apéritif aux Caves de la Croix Douillard à Amboise",
    rows: 2,
    cols: 2,
    priority: 40,
  },
  {
    img: photo7,
    title:
      "Salle complete pendant un evenement aux Caves de la croix Douillard à Amboise",
    priority: 40,
  },
  {
    img: photo8,
    title: "Dispositions des salles aux Caves de la Croix Douillard à Amboise",
    priority: 40,
  },
  {
    img: photo10,
    title: "Dispositions des salles aux Caves de la Croix Douillard à Amboise",
    rows: 2,
    priority: 40,
  },
  {
    img: photo9,
    title: "Dispositions des salles aux Caves de la Croix Douillard à Amboise",
    priority: 40,
  },
  // {
  //   img: "/photo.jpg",
  //   title: "Bike",
  //   cols: 2,
  // },
  // {
  //   img: "/photo.jpg",
  //   title: "Sea star",
  // },
];
