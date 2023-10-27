import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
app.listen(port, () => {
	console.log(`Server Running on http://localhost:${port}`);
});

app.get("/api/data", (req, res) => {
	const dataJson = fs.readFileSync("./data.json");
	const data = JSON.parse(dataJson);
	res.send(data);
});

app.post("/api/registration", (req, res) => {
	const { username, password } = req.body;
	const usersJson = fs.readFileSync("./users.json");

	const users = JSON.parse(usersJson);
	const newUser = {
		id: users.length + 1,
		username: username,
		password: password,
		cart:[]
	     }
		users.push(newUser)
		writeUsersData(users)
		return res.status(200).json({message:"User Registered" });
	
	
});

app.post("/api/login", (req, res) => {
	const { username, password } = req.body;
	const userJson = fs.readFileSync("./users.json");
	const users = JSON.parse(userJson);

	const matchedUser = users.find((user) => user.username === username && user.password === password);

	if (matchedUser) {
		// Authentication successful
		res.json({ message: "Login successful", user: matchedUser });
	} else {
		// Authentication failed
		res.status(401).json({ message: "Invalid username or password" });
	}
});

app.post("/api/user", (req, res) => {
	const { id } = req.body;
	const userJson = fs.readFileSync("./users.json");
	const users = JSON.parse(userJson);

	const matchedUser = users.find((user) => user.id === id);
	// console.log(matchedUser);
	if (matchedUser) {
		res.json({ user: matchedUser });
	} else {
		res.status(401).json({ message: "Invalid ID" });
	}
});

const writeUsersData = (users) => {
	try {
		fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
	} catch (error) {
		console.log("Error writing to file: ", error);
	}
};

app.post("/api/addToCart", (req, res) => {
	const { id, item } = req.body;
	const userJson = fs.readFileSync("./users.json");
	const users = JSON.parse(userJson);
	const user = users.find((user) => user.id === id);
	if (!user) {
		return res.status(401).json({ error: "User Not Found" });
	}
	user.cart.push(item);
	writeUsersData(users);
	return res.json({ message: "Added To Cart Successfully!!", user });
});

app.post("/api/removeFromCart", (req, res) => {
	const { id, cartItemId } = req.body;

	const userJson = fs.readFileSync("./users.json");
	const users = JSON.parse(userJson);

	const user = users.find((user) => user.id === id);

	if (!user) {
		return res.status(404).json({ error: "User not found." });
	}

	const cartItemIndex = user.cart.findIndex((item) => item.id === cartItemId);

	if (cartItemIndex === -1) {
		return res.status(404).json({ error: "Item not found in cart." });
	}

	user.cart.splice(cartItemIndex, 1);

	writeUsersData(users); // Save the updated data back to the JSON file

	return res.json({ message: "Item removed from cart successfully!", user });
});

app.post("/api/register")