const callForPhotos = async () => {
	const url = `http://jsonplaceholder.typicode.com/photos`;
	const response = await fetch(url);
	return await response.json();
};

export default callForPhotos;