import type { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { firebaseAdmin } from "../utils/FirebaseAdmin";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

const Home: NextPage<{ profile: string }> = ({ profile }) => {
  const auth = getAuth();

  const router = useRouter();
  const handleLogout = async () => {
    // logout
    auth.signOut();

    await fetch("http://localhost:3000/api/logout");

    router.push("/");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome {profile} </h1>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const defaultObject = {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
  try {
    const { idToken } = req.cookies;

    if (!idToken) {
      return defaultObject;
    }

    const auth = firebaseAdmin.auth();

    const verifyIdToken = await auth.verifyIdToken(idToken);

    if (!verifyIdToken) {
      return defaultObject;
    }

    const getUser = await fetch("http://localhost:3000/api/profile", {
      headers: { Authorization: idToken },
    });

    const user = await getUser.json();

    return {
      props: {
        profile: user.data || "",
      },
    };
  } catch (error) {
    return defaultObject;
  }
};