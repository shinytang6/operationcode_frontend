import React from 'react';
import PropTypes from 'prop-types';
import styles from './quoteBanner.css';

const QuoteBanner = ({ quote, author }) => (
  <div className={styles.quoteBanner}>
    <span className={styles.quoteLines} />
    <h2 className={styles.quoteText}>
      &quot;{quote}&quot;
      <br />
      <span className={styles.author}>- {author}</span>
    </h2>
    <span className={styles.quoteLines} />
  </div>
);

QuoteBanner.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QuoteBanner;
