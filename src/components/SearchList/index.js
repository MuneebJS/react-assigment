import React from 'react';
import PropTypes from 'prop-types';
import CustomScrollbars from '../../util/CustomScrollbars';

const SearchList = ({data, onClick}) => {
    let listContent = [];
    // data.map(item => {
    //     listContent.push(
    //         <div className="">
    //             <li><a href="javascript:void(0)" onClick={() => onClick(item)}>{item.login}</a></li>
    //         </div>
    //     );
    // });

    return (
        <div className="d-flex justify-content-center">
                <div className="row">
                    {listContent}
                </div>
        </div>
    );
}

SearchList.prototype = {
    data: PropTypes.array,
    onClick: PropTypes.func
};

export default SearchList;