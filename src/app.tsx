import { createSkyClient } from '@statelyai/sky';
import { useMachine } from '@xstate/react';
import { useState } from 'react';
import { __unsafe_getAllOwnEventDescriptors, InspectionEvent } from 'xstate';
import { NextEvents } from './components/NextEvents';
import { machine } from './machine';

const sky = createSkyClient({
  apiKey: import.meta.env.VITE_SKY_API_KEY,
  sessionId: 'onboarding',
});

export default function App() {
  const [receivedEvents, setReceivedEvents] = useState<InspectionEvent[]>([]);
  const [state, send, actor] = useMachine(machine, {
    inspect: sky.inspect,
  });

  sky.inspectListener = (event) => {
    console.log('event received from Sky', event);
    setReceivedEvents((events) => [...events, event]);
  };

  const nextEvents = __unsafe_getAllOwnEventDescriptors(actor.getSnapshot());

  return (
    <div className="app">
      <div className="app-header">
        <p className="sky-header">Stately Sky 1.0 WIP ⛅</p>
      </div>
      <NextEvents nextEvents={nextEvents} send={send} />
      <div>
        <p>State of local actor</p>
        <pre>actor.sessionId: {actor.sessionId}</pre>
        <pre>{JSON.stringify(state)}</pre>
        <p>Received events from Sky</p>
        {receivedEvents.map((event, index) => (
          <pre key={`event-${index}`}>{JSON.stringify(event)}</pre>
        ))}
      </div>
    </div>
  );
}
