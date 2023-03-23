/**
 * Тип, имеющий имя и id
 */
export type HasIdName = {
    /** id */
    id: string;
    /** Имя */
    name: string;
}

/**
 * Интерфейс книги
 */
export interface Book {
    /** id */
    id: string;
    /** id */
    etag: string;
    /** Авторы */
    authors?: string[];
    /** Название */
    title?: string;
    /** Ссылки на изображение книги */
    imageLinks?: {
        /** маленькое изображение */
        smallThumbnail?: string;
        /** полноразмерное изображение */
        thumbnail?: string;
    };
    /** Описание */
    description?: string;
    /** Категории */
    categories?: string[];
}

/**
 * Тип параметров поиска
 */
export type SearchParams = {
    /** Текст поискового запроса */
    value: string;
    /** Сортировка по соответствию запросу/новизне книги */
    orderBy: "relevance" | "newest";
    /** Категория поиска */
    subject: string;
}