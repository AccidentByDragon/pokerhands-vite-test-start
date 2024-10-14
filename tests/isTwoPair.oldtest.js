import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
test('Test that isTwoPair returns truthy if its two pairs', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠2', '♠8');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsey if not a pair', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});
