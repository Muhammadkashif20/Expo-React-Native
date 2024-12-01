import { TouchableOpacity, type TouchableOpacityProps, StyleSheet,  } from 'react-native';
import React, { ReactNode } from 'react';
import { ThemedText } from './ThemedText';
export type ThemedButtonProps = TouchableOpacityProps & {
  bgColor?: string;
  txtColor?: string;
  txt:string;
  mx?:number;
  my?:number;
  icon?:ReactNode
};

export function ThemeButton({
  style,
  bgColor,
  txtColor,
  txt = 'Button',
  mx=0,
  my=0,
  icon,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity style={[styles.mainBtn,bgColor && {backgroundColor:bgColor},
     mx ? {marginHorizontal:mx}:undefined ,
     my ? {marginVertical:my}:undefined,
     style]}
     {...rest}
     >
      {icon && icon}
      <ThemedText style={{color:txtColor ? txtColor:'#fff'}}>{txt}</ThemedText>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
  mainBtn:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,
    gap:20,
    backgroundColor:'#9900ef',
    borderRadius:7,
    width:300,
    flexDirection:'row'
  },
})
