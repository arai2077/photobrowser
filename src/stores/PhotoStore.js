import { makeObservable, observable, runInAction } from 'mobx';
import callForPhotosImport from './callForPhotos/callForPhotos';

export default class PhotoStore {
    photos = [];
	isLoading = false;
	apiError = false;

	constructor() {
		makeObservable(this, {
			photos: observable,
			isLoading: observable,
			apiError: observable
        })

		this.fetchPhotos();
	}

	async fetchPhotos() {
		try {
			this.isLoading = true;

			const fetchedPhotos = await callForPhotosImport();

			runInAction(() => {
				this.photos = fetchedPhotos.slice(0, 100);
				this.isLoading = false;
			});
		} catch (error) {
            runInAction(() => {
                this.apiError = true;
            })
        }
	}
}