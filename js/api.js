async function getDatabase() {
	await fetch("https://ericpoitras.github.io/quizwars/json/database.json")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			// TO DO: Update the array_questions table and initialize questions for the app
			console.table(array_questions);
			initializeQuestion(counter);
		})
		.catch((error) => {
			console.log(error);
		});
}

function setDatabase() {
	// Local storage for user sessions
	// TO DO: Check if the item exists at the beginning of the session to load recent answers
	if (localStorage) {
		localStorage.setItem("QuizWars", JSON.stringify(array_answers));
	}

	// delete JSON cloud storage
	// Read more here: https://github.com/vasanthv/jsonbox#readme
	fetch("https://jsonbox.io/box_239929d1d8a5ca0a2de0?q=topic:javascript", {
		method: "DELETE",
	}).then(function () {
		// JSON cloud storage
		fetch("https://jsonbox.io/box_239929d1d8a5ca0a2de0", {
			headers: {
				"Content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(array_answers),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
}
