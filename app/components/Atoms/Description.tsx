import {Platform, StyleSheet} from 'react-native';
import {AppView} from './AppView';
import {AppText} from './AppText';
import {FontStyles} from '../../../styles/fonts';

interface DescriptionProp {
  text: string;
  subtitle: string;
}

export const Description = ({text, subtitle}: DescriptionProp) => {
  return (
    <AppView style={descStyles.descContainer}>
      <AppText style={[descStyles.descText, FontStyles.PoppinsRegular]}>
        {text}
      </AppText>
      <AppText style={[descStyles.descSubtitle, FontStyles.PoppinsRegular]}>
        {subtitle}
      </AppText>
    </AppView>
  );
};

const descStyles = StyleSheet.create({
  descContainer: {
    width: '100%',
  },
  descText: {
    maxWidth: Platform.OS === 'ios' ? '90%' : '80%',
    fontSize: 40,
    lineHeight: 55,
  },
  descSubtitle: {
    fontSize: 13,
    marginTop: 20,
    paddingEnd: 52,
    lineHeight: 20,
  },
});
