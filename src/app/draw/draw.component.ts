import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawService } from '../draw.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas') myCanvas!: ElementRef;

  constructor(private drawService: DrawService) { }

  ngAfterViewInit(): void {
    this.square = this.myCanvas?.nativeElement;
    this.paper = this.square.getContext("2d");
  }

  ngOnInit(): void {
    this.drawService.canvasChanged.subscribe((value: any) => {
      const imageData = value.getContext("2d").getImageData(0, 0, value.width, value.height);
      this.paper.putImageData(imageData, 0, 0);
    })
  }

  square: any;
  paper: any;
  pressedMouse = false;
  x: any;
  y: any;
  colorLine = "indianred";
  key = { C: 67 };

  startDrawing(eventvs01: any) {
    this.pressedMouse = true;
    this.x = eventvs01.offsetX;
    this.y = eventvs01.offsetY;
  }

  drawLine(eventvs02: any) {
    if (this.pressedMouse) {
      this.square.style.cursor = "crosshair";
      var xM = eventvs02.offsetX;
      var yM = eventvs02.offsetY;
      this.drawing_line(this.colorLine, this.x, this.y, xM, yM, this.paper);
      this.x = xM;
      this.y = yM;
    }
    this.drawService.setCanvasData(this.square);
  }

  stopDrawing(eventvs03: any) {
    this.pressedMouse = false;
    this.square.style.cursor = "default";
    this.drawService.setCanvasData(this.square);
  }

  clearCanvas(whenPressKey: any) {
    if (whenPressKey.keyCode == this.key.C) {
      this.paper.clearRect(0, 0, this.square.width, this.square.height);
    }
  }

  drawing_line(color: any, x_start: any, y_start: any, x_end: any, y_end: any, board: { beginPath: () => void; strokeStyle: any; lineWidth: number; moveTo: (arg0: any, arg1: any) => void; lineTo: (arg0: any, arg1: any) => void; stroke: () => void; closePath: () => void; }) {
    board.beginPath();
    board.strokeStyle = color;
    board.lineWidth = 2;
    board.moveTo(x_start, y_start);
    board.lineTo(x_end, y_end);
    board.stroke();
    board.closePath();
  }

}
