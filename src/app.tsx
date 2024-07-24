import { createSkyClient } from '@statelyai/sky';
import { createActor } from 'xstate';
import { machine } from './machine';

const sky = createSkyClient({
  apiKey: import.meta.env.VITE_SKY_API_KEY,
  sessionId: 'onboarding',
});

const actor1 = createActor(machine, {
  inspect: sky.inspect,
}).start();

console.log(actor1.sessionId);

sky.subscribeTo('onboarding', (state) => {
  console.log(state);
});

// console.log(machine.id);

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <p className="sky-header">Stately Sky Starter ⛅</p>
        <p className="app-description">
          A starter template for building React applications with Sky.
        </p>
      </div>
    </div>
  );
}
