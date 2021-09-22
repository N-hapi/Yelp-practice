import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
const useResults = () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	//helper function for the results when initiated
	//whenever we make an API call it is an aysinc function so we need to add a promise for exmaple
	//by adding the async keyword we can then use the await prmoise in the synetx
	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
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

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errorMessage];
};

export default useResults;

const styles = StyleSheet.create({});
