class App extends React.Component {
  render() {
    return (
      <div>
       <Hello to="Ringo" from="Paul"/>
       <Hello to="Gina" from="Sarge"/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById("root"));