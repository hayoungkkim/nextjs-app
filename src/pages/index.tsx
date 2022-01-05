import type { NextPage } from "next";
import { Counter } from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Counter />
		</div>
	);
};

export default Home;
