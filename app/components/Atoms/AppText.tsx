import {Text, TextProps, StyleSheet} from 'react-native';

export const AppText = ({style, ...props}: TextProps) => (
  <Text style={[styles.default, style]} {...props} />
);

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#333',
  },
});

