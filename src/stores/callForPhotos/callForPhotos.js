const callForPhotos = async () => {
	console.log("calling photo api")
	const response = await fetch("http://jsonplaceholder.typicode.com/photos");
	return await response.json();
};

export default callForPhotos;