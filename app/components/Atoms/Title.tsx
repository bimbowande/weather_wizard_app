import {StyleSheet, View} from 'react-native';
import Fontisto from '@react-native-vector-icons/fontisto';
import {AppText} from './AppText';
import {FontStyles} from '../../../styles/fonts';

type TitleProps = {
  text: string;
};

export const Title = ({text}: TitleProps) => {
  return (
    <View style={TitleStyles.titleHeader}>
      <AppText style={[TitleStyles.titleHeaderText, FontStyles.QuickSandBold]}>
        <Fontisto name="player-settings" color="#000" size={20} /> {text}
      </AppText>
    </View>
  );
};

const TitleStyles = StyleSheet.create({
  titleHeader: {
    marginTop: 50,
    width: '100%',
  },
  titleHeaderText: {
    fontSize: 20,
  },
});
