import React from 'react';

class EmptyTablePlaceholder extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<img
					className="no-record-found-img"
					src={require('assets/images/noData.png')}
					alt="No record found"
					title="No record found"
				/>
				<div className="no-record-found-text">No resuls found</div>
			</div>
		);
	}
}

export default EmptyTablePlaceholder;
