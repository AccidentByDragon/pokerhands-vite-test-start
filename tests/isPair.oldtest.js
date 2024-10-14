import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';
// Will fail since no code written in Compare Hands yet for the method
test('Test that isOnePair returns truthy if its a pair', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠8');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsey if not a pair', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});
