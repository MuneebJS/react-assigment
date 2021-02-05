import React from 'react';
import PropTypes from 'prop-types';
import GistCard from '../GistCard';
import CustomScrollbars from '../../util/CustomScrollbars';
import CircularProgress from '../CircularProgress';
import Pagination from '../Pagination';
import EmptyTablePlaceholder from '../EmptyTablePlaceholder';

const GistsList = ({ data, loading, page, handlePagination }) => {
	let content;

	if (loading) {
		content = <CircularProgress />;
	} else if (data && data.length > 0) {
		const listContent = [];
		data.map((item) => {
			listContent.push(
				<div className="col-12" key={item.id}>
					<GistCard data={item} />
				</div>
			);
		});

		content = (
			<>
				<CustomScrollbars className="card-view scrollbar scrollbar" style={{ height: '100vh' }}>
					<div className="row list-parent">{listContent}</div>
				</CustomScrollbars>
				<Pagination
					page={page}
					prevClick={() => handlePagination(page - 1)}
					nextClick={() => handlePagination(page + 1)}
				/>
			</>
		);
	} else {
		content = <EmptyTablePlaceholder />
	}

	return content;
};

GistsList.prototype = {
	data: PropTypes.array,
};

export default GistsList;
