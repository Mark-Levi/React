import React from 'react';
class Test2 extends React.Component {
  constructor(props) {
    console.clear();
    console.log('Constructor');
    console.log(props);
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    console.log('Button');
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };
  static getDerivedStateFromProps(props, state) {
    console.log('Get derived state');
    // return { s1: props.arg };
    return null;
  }

  componentDidMount() {
    console.log('Did mount');
  }

  componentDidUpdate() {
    console.log('Did update');
  }

  render() {
    console.log('render');
    return (
      <>
        {console.log('return')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}
export default Test2;
