import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../../components/Atoms/Title';
import {Description} from '../../components/Atoms/Description';
import {Button} from '../../components/Atoms/Button';
import {ImageBg} from '../../components/Atoms/ImageBg';
import { Overlay } from '../../components/Atoms/Overlay';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ImageBg
      imageLink={require('../../assets/images/cloud_bg.jpg')}
      style={styles.container}>
      <Overlay style={styles.overlay}>
        <Title text={'Weather Wizard'} />
        <View>
          <Description
            text="Accurate Forecasts at Your Fingertips "
            subtitle="Get real time weather updates to plan you day with confidence. Know what to expect with detail weather reports,wherever you are."
          />
          <Button
            text="Get Started"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('List' as never)}
          />
        </View>
      </Overlay>
    </ImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(156, 152, 152, 0.4)',
    padding: 15,
    paddingBlock: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'rgba(106, 58, 9, 0.8)',
    marginTop: 30,
  },
});

export default Home;
