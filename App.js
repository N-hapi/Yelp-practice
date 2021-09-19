import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
	},
	{ initialRouteName: "Search", defaultNavigationOptions: { title: "search" } }
);

export default createAppContainer(navigator);
