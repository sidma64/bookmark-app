import React from 'react';
import { exampleBookmarks } from '../types/Bookmark';
import Bookmark from './Bookmark';

const App: React.FC = () => {
    const [bookmarks, setBookmarks] = React.useState(exampleBookmarks);
    const removeBookmark = (id: number) =>
        setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    return (
        <div className="App">
            <h1>Bookmarks</h1>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li>
                        <Bookmark {...bookmark} onRemove={() => removeBookmark(bookmark.id)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
