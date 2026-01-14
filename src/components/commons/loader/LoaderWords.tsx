import type { FC } from 'react';
import './loader-words.css';

interface Props {
  words: [string, string, string, string, string];
}

export const LoaderWords: FC<Props> = ({ words }) => (
  <div>
    <div className="loader">
      <p>loading</p>
      <div className="words">
        {words.map((word) => (
          <span key={word} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  </div>
);
