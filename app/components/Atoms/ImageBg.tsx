import {StyleProp, ViewStyle, ImageBackground, ImageSourcePropType} from 'react-native';

type IimageBg = {
  imageLink: ImageSourcePropType | undefined;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
export const ImageBg = ({imageLink, style, children}: IimageBg) => {
  return (
    <ImageBackground source={imageLink} resizeMode="cover" style={style}>
      {children}
    </ImageBackground>
  );
};
