import Head from "next/head";
import Tilt from "../components/Tilt";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Face recognition</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Container maxWidth="sm">
          <Grid
            mt={4}
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            style={{ minHeight: "100vh" }}
          >
            <Tilt />
            <Card />
          </Grid>
        </Container>
      </main>
    </div>
  );
}
