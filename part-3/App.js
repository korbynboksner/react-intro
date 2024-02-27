function App() {
    return (
      <div>
        <Person
          name="Dwayne"
          age={51}
          hobbies={["lifting Weights", "acting", "eating cheat meals"]}
        />
        <Person
          name="John"
          age={47}
          hobbies={["killing aliens", "blowing up rings", "giving people back their stuff"]}
        />
        <Person
          name="Avery"
          age={70}
          hobbies={["knowing what the ladies like", "wearing nice things"]}
        />
      </div>
    );
  }