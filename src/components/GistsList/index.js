import React from 'react';
import PropTypes from 'prop-types';
import GistCard from '../GistCard';
import CustomScrollbars from '../../util/CustomScrollbars';

const GistsList = ({data}) => {
    const listContent = [];

    data.map(item => {
        listContent.push(
            <div className="col-12" key={item.id}>
                <GistCard data={item} />
            </div>
        );
    });

    return (
            <CustomScrollbars className="card-view scrollbar scrollbar" style={{ height: '100vh' }}>
                <div className="row">
                    {listContent}
                </div>
            </CustomScrollbars>
    );
}

GistsList.prototype = {
    data: PropTypes.array
};

export default GistsList;