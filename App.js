import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Header} from './src/components/common/';
import LibraryReducer from './src/reducers/LibraryReducer';
import LibraryList from './src/components/LibraryList';
import selectLibrary from './src/reducers/selectLibrary';

const App = () => {
  const reducers = combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: selectLibrary,
  });

  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <View>
        <Header headerText="Courses" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
