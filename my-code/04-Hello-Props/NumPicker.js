class NumPicker extends React.Component {
  getNum = () => {
    return Math.floor(Math.random() * 10) + 1;
  }

  render() {
    const num = this.getNum();
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{num === 7 ? 'lucky' : 'unlucky'}</p>
        {num === 7 
          ? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
          : null
        }
      </div>
    );
  }
}