export type HasIdName = {
    id: string;
    name: string;
}

export interface Book {
    id: string;
    authors?: string[];
    title: string;
    subtitle?: string;
    publisher?: string;
    publishedDate?: string;
    imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
    };
    link?: string;
    description?: string;
    categories?: string[];
}


export type SearchParams = {
    value: string;
    orderBy: "relevance" | "newest";
    subject: string;
}