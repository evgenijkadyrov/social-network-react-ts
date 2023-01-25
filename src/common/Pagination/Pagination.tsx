import React, {FC, useState} from "react";
import styles from './Pagination.module.css'

type PaginationPropsType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    pagesToDisplay: number
}


export const Pagination:FC<PaginationPropsType> = (props) => {
    const {onPageChanged, currentPage, totalUsersCount, pageSize, pagesToDisplay} = props
    let pages = [];
    const stepPagination=5
    let numberPages = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }

    const [page, setPage] = useState(currentPage)

    let visiablePages =page<5? pages.slice(0 , page + pagesToDisplay):pages.slice(page -stepPagination, page + pagesToDisplay/2)
    const nextPage = (p: number) => {

        onPageChanged(p)
        setPage(p)
    }
    return (
        <div>
            <div>
                { page>stepPagination && <button onClick={() => {
                    setPage(page - 5)
                }}>previos
                </button>}
                {visiablePages.map(p => {
                    return <span onClick={() => nextPage(p)}
                                 className={currentPage === p ? styles.selected : ''}>{p}</span>
                })}
                {page<numberPages-10 && <button onClick={() => {
                    setPage(page + stepPagination)
                }}>next
                </button>}
            </div>

        </div>
    );
};






