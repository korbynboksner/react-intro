function App(){
    return (
        <div>
      <Tweet
        name="Korbyn Boksner"
        username="korbeezy"
        date={new Date().toDateString()}
        message="This is called X now"
      />
      <Tweet
        name="John Cena"
        username="invisible"
        date={new Date().toDateString()}
        message="You cant see me!"
      />
      <Tweet
        name="Gabe Newell"
        username="Valveco"
        date={new Date().toDateString()}
        message="Half life 3 will never come out, so play Counter Strike 2 instead"
      />
    </div>

    )



}