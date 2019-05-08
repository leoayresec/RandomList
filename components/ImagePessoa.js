import React, {PureComponent} from 'react';
import {Image} from 'react-native';

export default class ImagePessoa extends PureComponent {
  render () {
    return (
      <Image
        source={{
          uri: this.props.uri,
        }}
        style={{width: 50, height: 50}}
        resizeMode={'contain'}
      />
    );
  }
}