class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWinner = s1 === s2 && s2 === s3;
    const msg = isWinner ? "Winner!" : "Loser!";

    return (
      <div className="Machine">
        <p>{s1} - {s2} - {s3}</p>
        <p className={isWinner ? 'win' : 'lose'}>{msg}</p>
      </div>
    )
  }
}