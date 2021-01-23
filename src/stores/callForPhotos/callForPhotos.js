const callForPhotos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/photos");
	return await response.json();
};

export default callForPhotos;
