function FirstComponent() {
    return <h1>My very first component</h1>;
  }

function NamedComponent({ name }) {
    return <p>My name is {name}.</p>;
  }



const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );