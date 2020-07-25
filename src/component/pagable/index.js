import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
export const Pagable = (props) => {
    return (
        <div>
            {props.content}
            <Pagination count={10} variant="outlined" color="primary" shape="rounded" />
        </div>
    )
}