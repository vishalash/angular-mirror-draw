import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private sourceCanvas: any;
  inputChanged = new Subject<string>();
  canvasChanged = new Subject<string>();

  constructor() { }

  getCanvasData = () => this.sourceCanvas;
  setCanvasData = (data: any) => {
    this.sourceCanvas = data;
    this.canvasChanged.next(data);
    console.log("input changed to " + data);
  }
}
