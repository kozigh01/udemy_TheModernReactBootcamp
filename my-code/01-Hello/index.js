class Hello extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello there!</h1>
        <Hello2 />
      </React.Fragment>
    );
  }
}

function Hello2() {
  return (
    <h2>Hello 2</h2>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'));