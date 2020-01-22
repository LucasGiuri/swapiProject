import React from 'react';
import App from 'next/app';
import { Body } from '../public/styles/global';
import Header from '../components/UI/Header/Header';
import makeStore from '../store';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

class Project extends App {
	render() {
		const { Component, store, pageProps } = this.props;

		return (
			<Body>
				<Provider store={store}>
					<Header />
					<Component {...pageProps} />
				</Provider>
			</Body>
		)
	}
}

export default withRedux(makeStore)(Project);