import React from "react";
import styles from './Pagination.module.css'

type PaginationType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
  }


export const Pagination = (props: PaginationType) => {
  const  {onPageChanged,currentPage,totalUsersCount,pageSize}=props
    let pages = [];
    let numberPages = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }
    //numeration pages
    const pagesToDisplay = 10;
    let startPage = 1
    let visiablePages = pages.slice(startPage - 1, startPage + pagesToDisplay)
    return (
        <div>
            <div>

                {visiablePages.map(p => {
                    return <span onClick={() => {
                        onPageChanged(p)
                    }}
                                 className={currentPage === p ? styles.selected : ''}>{p}</span>
                })}

            </div>

        </div>
    );
};






