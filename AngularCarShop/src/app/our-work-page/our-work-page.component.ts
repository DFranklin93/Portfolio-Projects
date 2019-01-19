import { Component, OnInit } from '@angular/core';
import { Pictures } from './our-work';
import { PICTURES } from './our-work-items';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-work-page',
  templateUrl: './our-work-page.component.html',
  styleUrls: ['./our-work-page.component.scss']
})
export class OurWorkPageComponent{

  pictures = PICTURES;

  public albums: Array<IAlbum>;
  private _subscription: Subscription;
  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lightboxConfig: LightboxConfig
  ) {
    this.albums = [];
    for (let i = 1; i <= 6; i++) {
      const src = '../assets/ourworkimg' + i + '.png';
      const thumb = '../assets/ourworkimg' + i + '.png';
      const album = {
         src: src,
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
