import {View, ViewProps, StyleSheet} from 'react-native';

export const AppView = ({style, ...props}: ViewProps) => (
  <View style={[styles.default, style]} {...props} />
);

const styles = StyleSheet.create({
  default: {},
});
