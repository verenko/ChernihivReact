import React, {useEffect} from 'react';
import style from './Comment.module.scss'

const Comment = (props) => {

    return (
        <div className={style.comment_item}>
            <p className={style.comment__name_user}>Валодя Валадимир</p>
            <p className={style.comment__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis dictum
                enim rutrum amet. In augue nunc
                odio cursus malesuada. Tincidunt lectus et platea aliquam dictum sem fringilla. Urna, vitae tristique
                tellus quis in. Sit scelerisque sed risus mi mauris nibh ac. </p>
        </div>
    )
}

export default Comment;