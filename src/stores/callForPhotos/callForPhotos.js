const callForPhotos = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/photos");
	return await response.json();
};

export default callForPhotos;