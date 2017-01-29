import React, { Component } from 'react';

import Loading from '../components/Loading';

const LoaderHOC = (WrapperComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return (
        this.props.isLoaded ? <WrapperComponent { ...this.props }/> : <Loading />
      )
    }
  } 
}

export default LoaderHOC;