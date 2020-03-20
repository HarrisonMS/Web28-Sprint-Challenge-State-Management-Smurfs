// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Smurf } from './SmurfCard';
// import { getSmurfs } from '../actions';

// const SmurfList = (props) => {
//   useEffect(() => {
//     getSmurfs();
//   }, []);
//   if (props.loading) {
//     return <h2>Loading Smurfs... </h2>;
//   }  
//   return (
//     <div>
//       {props.error && <p>{props.error}</p>} 
//       {props.smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)} 
//     </div>
//   )
// }
// const mapStateToProps = (state) => {
// 	return {
// 		smurfs     : state.smurfs,
// 		loading : state.loading,
// 		error      : state.error,
// 	};
// };
// export default connect(mapStateToProps, {})(SmurfList);
