class Hello extends React.Component {
  render () {
    const {from, to} = this.props;
    return (
      <React.Fragment>
        <h1>Hi {from} from {this.props.to}!</h1>
      </React.Fragment>
    );
  }
}