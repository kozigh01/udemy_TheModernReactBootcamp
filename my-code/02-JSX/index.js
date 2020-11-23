class JSXDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>My Image!</h1>
        <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png" />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));