function ConditionalRendering() {
  const randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber < 5) {
    return <div>The guessed number is below 5 - {randomNumber}</div>;
  }

  return <div>The guessed number is above 5 - {randomNumber}</div>;
}

export default ConditionalRendering;
