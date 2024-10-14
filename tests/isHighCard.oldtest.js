import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
test('Test that isFullHouse returns truthy is full house', () => {
  let hand = new Hand('♥K', '♦2', '♣T', '♠2', '♠A');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});
