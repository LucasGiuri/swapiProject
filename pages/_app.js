import React from 'react';
import App, { Container } from 'next/app';
import { Body } from '../static/styles/global';
import Head from 'next/head';
import Header from '../components/Header/Header';
import makeStore from '../store';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

class Project extends App {
	render() {
		const { Component, store, pageProps } = this.props;

    return (
			<Body>
				<Container>
					<Provider store={store}>
						<Head>
							<meta charSet="utf-8" />
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						</Head>
						<Header />
						<Component {...pageProps} />
					</Provider>
				</Container>
			</Body>
		)
	}
}

export default withRedux(makeStore)(Project);