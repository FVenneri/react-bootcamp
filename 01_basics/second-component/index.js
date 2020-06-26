function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid']
  return moods[Math.floor(Math.random()*moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
        {/*<img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />*/}
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"))