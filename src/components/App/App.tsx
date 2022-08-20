interface AppProps {
  someProp?: any;
}

const App = ({ someProp }: AppProps) => {
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
