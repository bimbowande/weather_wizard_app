import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

type IOverlay = {
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
export const Overlay = ({style, children}: IOverlay) => {
  return <View style={[style, styles.overlay_container]}>{children}</View>;
};

const styles = StyleSheet.create({
  overlay_container: {
    flex: 1,
    width: '100%',
  },
});
