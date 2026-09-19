const addNumbers = (body) => {
	for (let i = 0; i < 5000; ++i) {
		body = body + " " + i;
	}
	return body;
};

const moreAddition = (body) => {
	for (let i = 5001; i < 15000; ++i) {
		body = body + " " + i;
	}
	return body;
};

export default {
	async fetch(request, env, ctx) {
		let body = "Hello Profiler! - ";
		body = addNumbers(body);
		body = moreAddition(body);
		return new Response(body);
	},
};

let responseText = "Hello world!";

export default {
	async fetch(request, env, ctx) {
		let now = new Date().toISOString();
		responseText = responseText + ` (Requested at: ${now})`;
		return new Response(responseText.slice(0, 53));
	},
};

responseText = responseText + ` (Requested at: ${now})`;
