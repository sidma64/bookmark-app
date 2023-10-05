import React from 'react';
import BookmarkType from '../types/Bookmark';

interface BookmarkFunctionality {
    onRemove: () => void;
}

const Bookmark: React.FC<BookmarkType & BookmarkFunctionality> = ({
    title,
    url,
    onRemove,
}) => {
    return (
        <>
            <a href={url}>
                <h2>{title}</h2>
            </a>
            <button onClick={onRemove}>Remove</button>
        </>
    );
};

export default Bookmark;
