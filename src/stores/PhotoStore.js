import { makeAutoObservable } from "mobx";
import callForPhotos from "./callForPhotos/callForPhotos";

class PhotoStore {
	photos = callForPhotos();

	constructor() {
        makeAutoObservable(this);
    }
}

export default PhotoStore;