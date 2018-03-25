//@flow
import React from 'react';
import AvatarView from 'src/components/AvatarView';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import TextRounded from 'src/common/TextRounded';
const UserHeader = ({
  text,
  disabled,
  onPress,
  avatarSource,
  style,
}: Object) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftView}>
        <TextRounded style={styles.text}>{text}</TextRounded>
        <TextRounded style={styles.text}>{text}</TextRounded>
      </View>

      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <AvatarView url={avatarSource} size={100} />
      </TouchableOpacity>
      <View style={styles.leftView}>
        <TextRounded style={styles.text}>{text}</TextRounded>
        <TextRounded style={styles.text}>{text}</TextRounded>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    height: 100,
    marginHorizontal: 10,
  },
  leftView: {
    marginVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    width: 120,
  },
});

export default UserHeader;
