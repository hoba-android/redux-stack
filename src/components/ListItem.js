import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions/index';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListItem = (props) => {
  const renderDescription = () => {
    const {library, expanded} = props;
    console.log('expanded', expanded);

    if (expanded) {
      LayoutAnimation.spring();
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.item.description}</Text>
        </CardSection>
      );
    }
  };

  const {titleStyle} = styles;
  const {id, title} = props.library.item;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.selectLibrary1(id);
      }}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {expanded};
};
export default connect(mapStateToProps, actions)(ListItem);
