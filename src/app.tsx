import { createSkyClient } from '@statelyai/sky';

export default function App() {
  const sky = createSkyClient({
    apiKey: import.meta.env.VITE_SKY_API_KEY,
  });

  // const subscription = sky.subscribeTo('sky', (state) => {
  //   console.log('Sky state updated:', state);
  // });

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
