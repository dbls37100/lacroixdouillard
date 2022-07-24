import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
import validator from "validator";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [colorAfter, setColorAfter] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const [error, setError] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    if (validator.isEmail(email) && message && name && peopleNumber && date) {
      emailjs
        .sendForm(
          "service_apqhkf7",
          "template_x6g0qyc",
          event.target,
          "Xf4l8cPMQSCLo0X3t"
        )
        .then(
          (result) => {
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setPeopleNumber("");
            setDate("");
            setCompany("");
            setOpenAlert(true);
            setSeverity("success");
            setError("Votre message a bien été envoyé");
          },
          (error) => {
            console.log(error.text);
            setOpenAlert(true);
            setSeverity("error");
            setError(error.text);
          }
        );
    } else if (
      validator.isEmail(email) &&
      !message &&
      name &&
      peopleNumber &&
      date
    ) {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez entrer un message");
    } else if (
      !validator.isEmail(email) &&
      message &&
      name &&
      peopleNumber &&
      date
    ) {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez entrer une adresse email valide");
    } else if (
      validator.isEmail(email) &&
      message &&
      !name &&
      peopleNumber &&
      date
    ) {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez entrer votre nom");
    } else if (
      validator.isEmail(email) &&
      message &&
      name &&
      !peopleNumber &&
      date
    ) {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez entrer le nombre de personnes");
    } else if (
      validator.isEmail(email) &&
      message &&
      name &&
      peopleNumber &&
      !date
    ) {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez entrer la date");
    } else {
      setOpenAlert(true);
      setSeverity("error");
      setError("Veuillez remplir tous les champs");
    }
  };

  useEffect(() => {
    setColorAfter(false);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Les Caves de la Croix Douillard - Contact</title>

        <meta
          name="description"
          content="Contactez les Caves de la Croix Douillard ou demandais un devis directement sur le site, salle de reception située à Amboise. Vous pouvez aussi contacter la cave par email ou  par téléphone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar colorAfter={true} setColorAfter={setColorAfter} />
        <div className={styles.Contact}>
          <div className={styles.Contact_div_description}>
            <h1 className={styles.Contact_h2_title}>Contact</h1>
            <p className={styles.Contact_p_text}>
              N&apos;hésitez pas as nous contacter via ce formulaire, nous vous
              répondrons au plus vite à toutes vos questions sur votre adresse
              mail, ou par téléphone au 02 47 23 65 00.
            </p>
          </div>
          <form onSubmit={sendEmail} className={styles.Contact_div_form}>
            <div className={styles.Contact_div_grid_2}>
              <input
                className={styles.Contact_input}
                type="text"
                placeholder="Nom"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="Name"
              />
              <input
                className={styles.Contact_input}
                type="text"
                placeholder="Société"
                id="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                name="Company"
              />
            </div>
            <input
              className={styles.Contact_input}
              type="text"
              placeholder="Email"
              error={error}
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="Email"
            />
            <div className={styles.Contact_div_grid_2}>
              <input
                className={styles.Contact_input}
                type="number"
                placeholder="Nombre de personnes"
                id="PeopleNumber"
                value={peopleNumber}
                onChange={(e) => setPeopleNumber(e.target.value)}
                name="PeopleNumber"
              />
              <input
                className={styles.Contact_input}
                type="date"
                placeholder="Date"
                id="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="Date"
              />
            </div>
            <textarea
              className={styles.Contact_input}
              placeholder="Message"
              id="Message"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="Message"
            />
            <p className={styles.Contact_p_error}>{error}</p>
            <button className={styles.Contact_button_submit}>Envoyer</button>
          </form>
        </div>
        <Snackbar
          open={openAlert}
          autoHideDuration={2000}
          onClose={() => setOpenAlert(false)}
          sx={{
            width: "100%",
          }}
        >
          <Alert
            onClose={() => setOpenAlert(false)}
            severity={severity}
            sx={{ width: "50%", margin: "auto" }}
          >
            <AlertTitle>
              {severity === "success" ? "succées" : "erreur"}
            </AlertTitle>
            {error}
          </Alert>
        </Snackbar>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_div_description}>
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              className={styles.footer_logo_description}
              alt="Vercel Logo"
              width={50}
              height={50}
            />
          </span>
          <p>Les Caves de la Croix Douillard</p>
        </div>
        <div className={styles.footer_div_footer}>
          <p>
            Copyright © 2022 Les Caves de la Croix Douillard. Tout droit
            réservé.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
