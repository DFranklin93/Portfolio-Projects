import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lightboxtest',
  templateUrl: './lightboxtest.component.html',
  styleUrls: ['./lightboxtest.component.scss'],
  host: { class: 'columns' }
})
export class LightboxtestComponent {

  public albums: Array<IAlbum>;
  private _subscription: Subscription;
  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lightboxConfig: LightboxConfig
  ) {
    this.albums = [];
    for (let i = 1; i <= 5; i++) {
      const src = '../assets/ourworkimgfive' + i + '.png';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../assets/ourworkimgfive' + i + '.png';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.albums.push(album);
    }

    //set default config
    this._lightboxConfig.fadeDuration = 1;
  }

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    // override the default config
    this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE){
      this._subscription.unsubscribe();
    }
  }
}
