import { setup } from 'xstate';

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as { type: 'next' } | { type: 'reset' },
  },
}).createMachine({
  context: {},
  id: 'Sky Demo Machine',
  initial: 'First State',
  states: {
    'First State': {
      on: {
        next: {
          target: 'Second State',
        },
      },
      after: {
        5000: 'Second State',
      },
    },
    'Second State': {
      on: {
        next: {
          target: 'Third State',
        },
      },
    },
    'Third State': {
      on: {
        reset: {
          target: 'First State',
        },
      },
    },
  },
});
