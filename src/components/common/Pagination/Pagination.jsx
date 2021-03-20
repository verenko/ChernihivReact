import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function PaginationRounded(props) {
    const classes = useStyles();

    return (
        <div className={classes.root + " pagination"}>
            {

                props.pages > 1 && <><Pagination count={props.pages} variant="outlined"
                                                 defaultPage={props.currentPage} shape="rounded"
                                                 onChange={props.onPageChanged}/></>
            }
            <p>Страница {props.currentPage} из {props.pages}</p>
        </div>
    );
}