import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ImageModal from "../components/ImageModal";
import styles from "../styles/components/Photos.module.css";
import { Parallax } from "react-scroll-parallax";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  async function handleOpen(index) {
    await setIndex(index);
    setOpen(true);
  }

  return (
    <section id="Photos" className={styles.Photos}>
      <h3
        className={
          entered === true
            ? styles.Photos_h5_title
            : styles.Photos_h5_title_normal
        }
      >
        Nos photos
      </h3>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
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
    img: "/photo.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
    priority: 40,
  },
  {
    img: "/photo4.jpg",
    title: "Burger",
    priority: 40,
  },
  {
    img: "/photo3.jpg",
    title: "Camera",
    priority: 40,
  },
  {
    img: "/photo2.jpg",
    title: "Coffee",
    cols: 2,
    priority: 40,
  },
  {
    img: "/photo5.jpg",
    title: "Hats",
    cols: 2,
    priority: 40,
  },
  {
    img: "/photo6.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    priority: 40,
  },
  {
    img: "/photo7.jpg",
    title: "Basketball",
    priority: 40,
  },
  {
    img: "/photo8.jpg",
    title: "Fern",
    priority: 40,
  },
  {
    img: "/photo10.jpg",
    title: "Mushrooms",
    rows: 2,
    priority: 40,
  },
  {
    img: "/photo9.jpg",
    title: "Tomato basil",
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
