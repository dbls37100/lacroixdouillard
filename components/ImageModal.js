import * as React from "react";
import Image from "next/image";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import styles from "../styles/components/Photos.module.css";
// import Previous from "../assets2/previous.svg";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const TransitionsModal = ({
  open,
  setOpen,
  title,
  itemData,
  index,
  setIndex,
}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNextImage = () => {
    if (index < itemData.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(itemData.length - 1);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        className={styles.ImageModal_modal}
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card>
            <p
              id="transition-modal-title"
              className={styles.Photos_p_infos_number}
            >
              {index + 1} / {itemData.length}
            </p>
            <Image
              src={itemData[index].img}
              alt={title}
              layout="fill"
              className={styles.ImageModal_image}
            />
            <div className={styles.Photos_card_infos}>
              <div
                onClick={handlePreviousImage}
                className={styles.Photos_div_previous}
              >
                <div>
                  <div className={styles.Photos_button}>
                    <Image
                      src="/assets2/previous.svg"
                      alt="Previous"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
              <div onClick={handleNextImage} className={styles.Photos_div_next}>
                <div>
                  <div className={styles.Photos_button}>
                    <Image
                      src="/right-arrow.png"
                      alt="Next"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         alt="green iguana"
//       >
//           <Image
//               src={image}
//               alt={title}
//               layout="fill"
//               sx={{
//                 width: "100%",
//                 height: "100%",
//               }}
//             />
//         </CardMedia>
//     </Card>
//   );
// }
