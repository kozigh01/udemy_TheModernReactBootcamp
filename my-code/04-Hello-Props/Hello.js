class Hello extends React.Component {
  static defaultProps = { from: 'Anonymous' };
  
  render () {
    return (
      <React.Fragment>
        <h1>Hi {this.props.from} from {this.props.to}!</h1>
      </React.Fragment>
    );
  }
}