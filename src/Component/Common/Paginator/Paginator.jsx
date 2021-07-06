import React, { useState } from "react";
import styles from '../../FindUsers/FindUsers.module.css';
import cn from 'classnames'

let Paginator = ({portionSize = 10, ...props}) => {

    let totalCountPages = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= totalCountPages; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(totalCountPages / portionSize);
    let [portionNum, setPortionNum] = useState(1);
    let leftPortionPageNum  = (portionNum - 1) * portionSize + 1;
    let rightPortionPageNum = portionNum * portionSize;


    return (
        
        <div className={styles.paginator}>
             {portionNum > 1 && <button onClick={() => {setPortionNum(portionNum -1)} }>Prev</button>}
               {pages 
                .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
                .map(p => {
                    return <span className={ cn ({
                         [styles.selectedPage] :  props.currentPage === p },  
                         styles.pageNumber) }
                         key={p}
                         onClick={(e) => {
                         props.changePage(p);
                         }}>{p}</span>
                })}
            {portionCount > portionNum && <button onClick={() => {setPortionNum(portionNum + 1)} }>Next</button>}
            
        </div>
    )
}

export default Paginator;