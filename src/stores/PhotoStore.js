import { makeAutoObservable, runInAction } from 'mobx';
import callForPhotosImport from './callForPhotos/callForPhotos';

export default class PhotoStore {
    photos = [];
	isLoading = false;
	apiError = false;

	constructor() {
		makeAutoObservable(this);

		this.fetchPhotos();
	}

	async fetchPhotos() {
		this.isLoading = true;

		try {
			const fetchedPhotos = await callForPhotosImport();

			runInAction(() => {
				this.photos = fetchedPhotos;
				this.isLoading = false;
			});
		} catch (error) {
            runInAction(() => {
                this.apiError = true;
            })
        }
	}
}