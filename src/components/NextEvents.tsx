import { AnyEventObject, EventDescriptor } from 'xstate';

export function NextEvents<T extends AnyEventObject>({
  nextEvents,
  send,
}: {
  nextEvents: EventDescriptor<T>[];
  send?: (event: T) => void;
}) {
  return (
    <div className="next-events">
      <p>Next possible event{nextEvents.length > 1 ? 's' : ''}</p>
      <div className="event-buttons">
        {nextEvents.map((event) => (
          <button key={event} onClick={() => send?.({ type: event } as T)}>
            {event}
          </button>
        ))}
      </div>
    </div>
  );
}
