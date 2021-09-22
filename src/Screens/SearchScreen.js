import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
//import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	return (
		<View>
			<SearchBar
				term={term}
				onTermChnage={(newTerm1) => {
					setTerm(newTerm1);
				}}
				//onTermSubmit={() => console.log("term was submitted")}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>we have found {results.length}</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
