import React, { Component } from "react";

class R008_LifecycleEx extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log(`2. getDerivedStateFromProps Call : `+ props.prop_value);
    return { tmp_state:props.prop_value };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log(`8 1. constructor Call`);
  }

  componentDidMount() {
    console.log(`4. componentDidMount call`);
    console.log(`5. tmp_state : ` + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(Props, state) {
    console.log(`6.shouldComponentUpdate Call / temp_state2 = ` + state.tmp_state2);
    return state.tmp_state2;
  }

  render() {
    console.log(`3. render Call`)
    return (
      <h2>[This is shouldComponent Update function]</h2>
    )
  }
}

export default R008_LifecycleEx;