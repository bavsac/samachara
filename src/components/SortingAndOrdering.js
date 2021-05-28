import React from 'react';

import styles from '../styles/SortingAndOrdering.module.css';

const SortingAndOrdering = ({ sortBy, setSortBy, orderIn, setOrderIn }) => {
  return (
    <div className={styles.sortingOrdering}>
      <label className={styles.sorting__lable} htmlFor='sort_by'>
        Sort articles by
      </label>

      <select
        className={styles.sorting__select}
        id='sort_by'
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option className={styles.sorting__option} value='created_at'>
          Most Recent
        </option>
        <option className={styles.sorting__option} value='votes'>
          Most Voted
        </option>
        <option className={styles.sorting__option} value='comment_count'>
          Most Comments
        </option>
      </select>

      <label className={styles.ordering} htmlFor='order_by'>
        and order by
      </label>

      <select
        className={styles.ordering__select}
        id='order_by'
        onChange={(event) => {
          setOrderIn(event.target.value);
        }}
      >
        <option className={styles.ordering__option} value='desc'>
          Decending
        </option>
        <option className={styles.ordering__option} value='asc'>
          Ascending
        </option>
      </select>
      {/* <button onClick={(e) => {}}>Show Selection</button> */}
      <p className={styles.sortingOrdering__lable}>
        Sorted by {sortBy} and ordered in {orderIn}
      </p>
    </div>
  );
};

export default SortingAndOrdering;
