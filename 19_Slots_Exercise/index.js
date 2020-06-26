function randomUpTo(n) {
  return Math.floor(Math.random() * n);
}

class App extends React.Component {
  symbols = ['x', 'y', 'z'];

  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine
          s1={this.symbols[randomUpTo(this.symbols.length)]}
          s2={this.symbols[randomUpTo(this.symbols.length)]}
          s3={this.symbols[randomUpTo(this.symbols.length)]}
        />
        <Machine
          s1={this.symbols[randomUpTo(this.symbols.length)]}
          s2={this.symbols[randomUpTo(this.symbols.length)]}
          s3={this.symbols[randomUpTo(this.symbols.length)]}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))