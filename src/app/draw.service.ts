import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private inputData: string = "";
  private sourceCanvas: any;
  inputChanged = new Subject<string>();
  canvasChanged = new Subject<string>();

  constructor() { }

  getInput = () => this.inputData;
  setInput = (data: string) => {
    this.inputData = data;
    this.inputChanged.next(data);
    console.log("input changed to " + data);
  }

  getCanvasData = () => this.sourceCanvas;
  setCanvasData = (data: any) => {
    this.sourceCanvas = data;
    this.canvasChanged.next(data);
    console.log("input changed to " + data);
  }
}
