import type { NextPage } from "next";

import { wrapper } from "@/app/store";
import { useAppDispatch, useAppSelector, useInterval } from "@/app/hook";

import Clock from "@/features/clock/Clock";
import Counter from "@/features/counter/Counter";

import { selectClock, serverRenderClock, startClock } from "@/features/clock/clockSlice";

import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	const { lastUpdate, light } = useAppSelector(selectClock);

	useInterval(() => {
		dispatch(startClock());
	}, 1000);

	return (
		<div className={styles.container}>
			<Counter />
			<Clock lastUpdate={lastUpdate} light={light} />
		</div>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(serverRenderClock(true));

	return {
		props: {},
	};
});

export default Home;
