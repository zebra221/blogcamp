import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';
import About from './pages/about';
import New from './pages/new';
import Err from './pages/error';

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/new' component={New} />
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}

export default Picogram;










// import MainPage from './pages/MainPage';
// import ImagePage from './pages/ImagePage';
// import UploadPage from './pages/UploadPage';
// import ErrorPage from './pages/ErrorPage';
//
// class Picogram extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={MainPage} />
//         <Route path='/image/{id}' component={ImagePage} />
//         <Route path='/upload' component={UploadPage} />
//
//         <Route path='/*' component={ErrorPage} />
//       </Router>
//     );
//   }
// }
//
// export default Picogram;
