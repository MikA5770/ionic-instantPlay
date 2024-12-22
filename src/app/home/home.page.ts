import { Component } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos: any[] = [];

  constructor() {}

  async addPhotoToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath!,
    });
  }

  takePhoto() {
    this.addPhotoToGallery();
  }
}
