import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {items} from '../seed';
import Item from "./Item";

const ItemList = () => {
    return (
        <Fragment>
            {items.map(item => (
                <Item item={item}/>
                )
            )}
        </Fragment>
    );
};

ItemList.propTypes = {

};

export default ItemList;
