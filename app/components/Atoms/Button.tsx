import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontStyles } from '../../../styles/fonts';

type IButtonProps = {
  onPress?: () => void;
  buttonStyle?: StyleMedia;
  textStyle?: StyleMedia;
  text?: string;
};

export const Button = ({
  onPress,
  buttonStyle,
  textStyle,
  text,
}: IButtonProps) => {
  return (
    <TouchableOpacity style={[buttonStyle, BtStyles.button]} onPress={onPress}>
      <Text style={[textStyle, BtStyles.buttonText, FontStyles.PoppinsMedium]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const BtStyles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
