import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  align?:'left'|'right'|'center';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  align='left',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        align && {textAlign:align},
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0a7ea4',

  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#0a7ea4',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
    color:'black'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'

  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color:'black'

  },
});
