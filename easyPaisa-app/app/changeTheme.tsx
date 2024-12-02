import { ThemeButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { View } from "react-native";
import { RootState } from "@/store/store";
import { themeChange } from "@/store/features/themeSlice";
import { Colors } from "@/constants/Colors";
const ChangeTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  console.log("theme=>", theme);
  const txtColor = Colors[theme].text;
  const backgroundColor = Colors[theme].background;
  const butnText = Colors[theme].butnText;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme == "light" ? "#fff" : "#000",
      }}
    >
      <ThemedText type="title" style={{ color: txtColor }}>
        Changing Theme Application
      </ThemedText>
      <ThemeButton
        txtColor={butnText}
        bgColor={backgroundColor}
        onPress={() => dispatch(themeChange())}
        my={20}
        txt="Change Theme Color"
      />
    </View>
  );
};

export default ChangeTheme;
