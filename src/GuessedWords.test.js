import GuessedWords from './GuessedWords'
import { findByTestAttr, checkProps } from "../test/testUtils"
import { shallow } from 'enzyme'
import React from "react"

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

it('renders without errors', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-guessed-words')
  expect(component.length).toBe(1)
})

it('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('If there no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  });
  it('renders a instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('If there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({guessedWords});
  });
  it('renders "guess words" section', () => {
    const guessWords = findByTestAttr(wrapper, 'guessed-words');
    expect(guessWords.length).toBe(1);
  });
  it('correct number of guessed words', () => {
    const guessedWordItems = findByTestAttr(wrapper, 'guessed-word-item');
    expect(guessedWordItems.length).toBe(guessedWords.length);
  });
});
