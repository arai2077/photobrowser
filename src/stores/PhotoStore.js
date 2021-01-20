import { runInAction, makeAutoObservable } from "mobx";
import callForPhotos from "./callForPhotos/callForPhotos";

class PhotoStore {
	dependencies = {}

	constructor (jekke = callForPhotos) {
		this.dependencies.callForPhotos = jekke;
		makeAutoObservable(this);
	}

	photos = this.dependencies.callForPhotos();
}

export default PhotoStore;