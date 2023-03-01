import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
