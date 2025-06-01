import React from 'react';
import { WordPair } from '../types';

interface CardProps {
  word: WordPair;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Card: React.FC<CardProps> = ({ word, isFlipped, onFlip }) => {
  return (
    <div
      className="relative w-full h-64 cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div
        className={`absolute w-full h-full transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 flex items-center justify-center backface-hidden border border-gray-200">
          <span className="text-2xl font-semibold text-gray-800">{word.foreign}</span>
        </div>
        <div className="absolute w-full h-full bg-blue-500 text-white rounded-xl shadow-lg p-6 flex items-center justify-center transform rotate-y-180 backface-hidden">
          <span className="text-2xl font-semibold">{word.native}</span>
        </div>
      </div>
    </div>
  );
};