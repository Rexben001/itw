class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }

  // componentDidMount() {
  //   this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  // }

  // componentWillUnmount() {
  //   this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  // }

   clickHandler = ()=> {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    let {children, headerText} = this.props;

    return (
      <div className="my-component" onClick={this.clickHandler}>
      <h2>My Component {this.state.clicks} clicks</h2>
      <h3>{headerText}</h3>
    {children}
    </div>
    );
  }
}
