import React from "react";
//search bar is imported from here
import { StyleSheet, Text, View, TextInput } from "react-native";
//icon
import { Feather } from "@expo/vector-icons";
// remeber the child always has the property input into the function
const SearchBar = ({ term, onTermChnage, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={(newTerm) => onTermChnage(newTerm)}
				autoCapitalize='none'
				autoCorrect={false}
				//this is built in the textInput
				onEndEditing={() => onTermSubmit()}
				// another way to do it is to simply pass the function in without the ()
				//!! onEndEditing={onTermSubmit}
			></TextInput>
		</View>
	);
};
export default SearchBar;

const styles = StyleSheet.create({
	background: {
		marginTop: 10,
		backgroundColor: "#cecece",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
	},
	inputStyle: {
		//borderColor: "black", borderWidth: 1,
		flex: 1,
		fontSize: 18,
	},
	iconStyle: { fontSize: 35, alignSelf: "center", marginHorizontal: 10 },
});
