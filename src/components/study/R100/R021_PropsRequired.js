import React,{Component} from "react";
import datatype from 'prop-types';
class R021_PropsRequired extends Component{


render() {
let { ReactString,ReactNumber }  = this.props
return ( <div style={{padding:'0px'}}>
    {ReactString}{ReactNumber}
</div>)
}
}

R021_PropsRequired.propTypes = {
ReactString: datatype.isRequired,
}

export default R021_PropsRequired;

// import React, { Component } from "react";
// import PropTypes from 'prop-types';

// class R021_PropsRequired extends Component {
//   componentDidMount() {
//     const { ReactString } = this.props;
//     if (!ReactString) {
//       console.error("ReactString prop이 필요합니다.");
//     }
//   }

//   render() {
//     let { ReactString, ReactNumber }  = this.props;
//     return (
//       <div style={{padding:'0px'}}>
//         {ReactString}{ReactNumber}
//       </div>
//     );
//   }
// }

// R021_PropsRequired.propTypes = {
//   ReactString: PropTypes.string.isRequired
// };

// export default R021_PropsRequired;