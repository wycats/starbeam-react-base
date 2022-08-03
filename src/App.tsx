import './App.css';
import { useReactiveSetup } from '@starbeam/react';
import { Cell } from '@starbeam/core';

export default function App(): JSX.Element {
  return useReactiveSetup(() => {
    const greeting = Cell('Hello');

    return () => <>{greeting.current} Demo</>;
  });
}
