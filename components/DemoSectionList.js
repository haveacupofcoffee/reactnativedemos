import React, {Component} from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';
import DemoFlexBox from './flexbox/DemoFlexBox';
import DemoListView from './listview/DemoListView';
import DemoStyleTest from './style/DemoStyleTest';
import DemoContainerComponent from './props/DemoContainerComponent';
import DemoState from './state/DemoState';
import DemoTextInput from './textinput/DemoTextInput';
import DemoScrollView from './scrollview/DemoScrollView';
import DemoImages from './image/DemoImages';
import DemoHttpFetch from './httpfecth/DemoHttpFetch';
import DemoButton from './button/DemoButton';
import DemoAnimation from './animation/DemoAnimation';
import DemoRouter from './router/DemoRouter';

class DemoSectionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            /*                        {title:'ScrollView', data:[<DemoScrollView/>]},*/
/*
            {title: 'Router', data: [<DemoRouter />]},
*/
            {title: 'Animation', data: [<DemoAnimation />]},
            {title: 'Buttons', data: [<DemoButton />]},
            {title: 'HTTPFetch', data: [<DemoHttpFetch />]},
            {title: 'Images', data: [<DemoImages />]},
            {title: 'TextInput', data: [<DemoTextInput />]},
            {title: 'ListView', data: [<DemoListView />]},
            {title: 'DemoFlexBox', data: [<DemoFlexBox />]},
            {title: 'Styling', data: [<DemoStyleTest />]},
            {title: 'Props', data: [<DemoContainerComponent />]},
            {title: 'State', data: [<DemoState />]},
          ]}
          renderItem={({item}) => <View>{item}</View>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default DemoSectionList;
