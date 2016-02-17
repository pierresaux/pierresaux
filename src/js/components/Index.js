import React, { Component, PropTypes } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

export { default as About } from './About'
export { default as App } from './App'
export { default as Footer } from './Footer'
export { default as Header } from './Header'
export { default as NavBar } from './NavBar'

export class Index extends Component {
	render() {
		return (
			<Grid id='indexContainer'>
				<Row>
					<Col xs={8} md={6} lg={5} xsOffset={2} mdOffset={2} lgOffset={2}>
						<div className='title'>
							<i className='fa fa-smile-o'></i>: Hello, world!
						</div>
						<p>－I am Kei-sau, CHING</p>
					</Col>
				</Row>
			</Grid>
		)
	}
}
