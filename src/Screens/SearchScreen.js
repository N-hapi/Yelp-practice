import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	//helper function for the results when initiated
	//whenever we make an API call it is an aysinc function so we need to add a promise for exmaple
	//by adding the async keyword we can then use the await prmoise in the synetx
	const searchApi = async () => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: term,
					location: "san jose",
				},
			});

			//!! the arry that we want to store is
			setResults(response.data.businesses);
		} catch (err) {
			//console.log(err);
			setErrorMessage("Something went wrong");
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChnage={(newTerm1) => {
					setTerm(newTerm1);
				}}
				//onTermSubmit={() => console.log("term was submitted")}
				onTermSubmit={() => searchApi()}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>we have found {results.length}</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
