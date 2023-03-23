import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "../utils/request";
import {Book, SearchParams} from "../types/data";

export class BooksStoreClass {
    /** Список книг, удовлетворяющий поисковому запросу, отображающихся на странице  */
    books: Book[] | null = [];
    /** Выбранная книга  */
    selectedBook: Book | null = null;
    /** Длина массива всех удовлетворяющих поиску книг */
    booksLength: number = 0;
    /** Поисковый запрос */
    search: SearchParams = {
        value: "",
        orderBy: "relevance",
        subject: "",
    };
    /** Идет ли процесс загрузки книг */
    isLoading: boolean = false;

    constructor() {
        makeObservable(this, {
            books: observable,
            selectedBook: observable,
            booksLength: observable,
            search: observable,
            isLoading: observable,

            getBooks: action,
            setSearch: action,
            setSelectedBook: action,
            resetStore: action,
        })
    }

    /**
     * Загрузка с сервера списка книг, удовлетворяющих поисковому запросу
     */
    async getBooks() {
        try {
            runInAction(() => {
                this.isLoading = true;

            });

            const res = await axios.get("", {
                params: {
                    q: `${this.search.value}+subject:${this.search.subject}&`,
                    maxResults: 30,
                    startIndex: this.books?.length === 0 ? 0 : this.books?.length,
                    orderBy: this.search.orderBy,
                }
            });

            runInAction(() => {
                if (!res.data.items) {
                    this.books = null;
                } else {
                    const result: Book[] = res.data.items.map((item: any) => {
                        return {
                            id: item.id,
                            etag: item.etag,
                            ...item.volumeInfo
                        }
                    });

                    if (this.books?.length !== 0) {
                        this.books?.push(...result);
                    } else {
                        this.books = result;
                    }
                }

                this.booksLength = res.data.totalItems;
            });


        } catch (err) {
            console.log(err);
        }

        runInAction(() => {
            this.isLoading = false;

        });
    };

    /**
     * Запись параметров поискового запроса
     * @param value - значение параметра
     * @param dataType - имя параметра
     */
    setSearch(value: string, dataType: "value" | "orderBy" | "subject") {
        const newSearch: SearchParams = {
            ...this.search,
            [dataType]: value,
        }

        this.search = newSearch;
        this.resetStore();
    };

    /**
     * Запись выбранной книги
     * @param book
     */
    setSelectedBook(book: Book) {
        this.selectedBook = book;
    };

    /**
     * Сброс стора в первоначальное состояние
     */
    resetStore() {
        this.books = [];
        this.selectedBook = null;
        this.booksLength = 0;
    };
}

export const booksStore = new BooksStoreClass();