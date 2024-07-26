import { setup } from 'xstate';

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as { type: 'next' } | { type: 'reset' },
  },
}).createMachine({
  context: {},
  id: 'Sky 1.0 Testing Machine',
  initial: 'First State',
  states: {
    'First State': {
      on: {
        next: {
          target: 'Second State',
        },
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
