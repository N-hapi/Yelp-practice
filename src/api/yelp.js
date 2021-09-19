import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer SeKkNgr2O9IwYxoKfHe6a9PYtjaefqeKI30Tm8NyeI7WJClMQlF63JbRNC8GJu1xWVtw8OpUBPEjZF2NNXwE8hN7yyiRV-SV6CSLhcaR_Lan_NQt2ZO6Hmt5Xq6qYHYx",
	},
});

//yelp.get("/search");
