import React from "react"
import PropTypes from 'prop-types';
const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
     <span data-test="guessed-instructions">
       Try to guess the secret word!
     </span>
    );
  } else {
    const guessedWordsContent = props.guessedWords.map((item, index) => {
      return (
        <tr key={index} data-test="guessed-word-item">
          <td>{index}</td>
          <td>{item.guessedWord}</td>
          <td>{item.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <table>
          <thead>
            <th>#</th>
            <th>guessedWord</th>
            <th>length</th>
          </thead>
          <tbody>
          {guessedWordsContent}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-words">{contents}</div>

  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
