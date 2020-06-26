class Hello extends React.Component {
  render() {
    return (
      <h1>Hi {this.props.to} from {this.props.from}!</h1>
    )
  }
}