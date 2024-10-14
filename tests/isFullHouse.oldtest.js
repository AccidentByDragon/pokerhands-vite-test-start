import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
test('Test that isFullHouse returns truthy is full house', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠2', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse returns falsey if not full house', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});