import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
	<div className="page-error-container">
		<div className="page-error-content">
			<div className="error-code">404</div>
			<h2>No Results Found</h2>
			<p>
				<Link className="btn btn-primary" to="/">
					Go Home
				</Link>
			</p>
		</div>
	</div>
);

export default Error404;
