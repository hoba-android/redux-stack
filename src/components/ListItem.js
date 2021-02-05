import React, {useCallback} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions/index';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListItem = (props) => {
  const {titleStyle} = styles;
  const {id, title} = props.library.item;

  const dispatch = useDispatch();

  const getId = useCallback(() => {
    dispatch(actions.selectLibrary1(id));
  }, [dispatch, id]);

  const renderDescription = () => {
    const {library} = props;
    const courseId = useSelector((state) => state.selectedLibraryId);

    if (id === courseId) {
      LayoutAnimation.spring();
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.item.description}</Text>
        </CardSection>
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={getId}>
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

export default ListItem;
