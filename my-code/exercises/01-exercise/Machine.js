class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const msg = (s1 === s2) && (s2 == s3) ? 'you win' : 'you lose';
    const styles = { fontSize: '2em', backgroundColor: 'purple' };
    const messageClass = (s1 === s2) && (s2 == s3) ? 'Machine-winner' : 'Machine-loser';

    return (
      <div className="Machine">
        <label htmlFor="textInput"></label>
        <p style={styles}>{s1} {s2} {s3}</p>
        <p className={messageClass}>{msg}</p>
      </div>
    );
  }
}