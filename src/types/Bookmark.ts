export default interface Bookmark {
    id: number;
    title: string;
    url: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export const exampleBookmarks: Bookmark[] = [
    {
        id: 1,
        title: 'Google',
        url: 'https://www.google.com',
        tags: ['search'],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        title: 'Facebook',
        url: 'https://www.facebook.com',
        tags: ['social'],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        title: 'Youtube',
        url: 'https://www.youtube.com',
        tags: ['video', 'social'],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
