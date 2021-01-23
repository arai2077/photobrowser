import { makeObservable, observable, runInAction } from "mobx";
import callForPhotos from "./callForPhotos/callForPhotos";

export default class PhotoStore {
	photos = [];
  isLoading = true;
	apiError = false;

  constructor() {
    makeObservable(this, {
			photos: observable,
      isLoading: observable,
			apiError: observable
    });

    this.fetchPhotos();
  }

  async fetchPhotos() {
    try {
      const fetchedPhotos = await callForPhotos();

      runInAction(() => {
				this.photos = fetchedPhotos.slice(0, 100);
        this.isLoading = false;
      });
    } catch (error) {
			runInAction(() => {
				this.isLoading = false;
        this.apiError = true;
      });
    }
	}

	getPhotoByID(id) {
		const parsedID = parseInt(id, 10);
		const photo = this.photos.find(photo => photo.id === parsedID);

		return this.isLoading ? {} : photo;
	}
}
