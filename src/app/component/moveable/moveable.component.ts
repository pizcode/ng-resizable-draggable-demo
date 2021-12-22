import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  AngularResizeElementDirection,
  AngularResizeElementEvent,
} from "angular-resize-element";
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,
}
@Component({
  selector: "app-moveable",
  templateUrl: "./moveable.component.html",
  styleUrls: ["./moveable.component.scss"],
})
export class MoveableComponent implements OnInit {
  constructor() {}

  public data: {
    color: string;
    width: number;
    height: number;
    left: number;
    top: number;
  } = {
    color: "red",
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  };
  public mouse: { x: number; y: number };
  private mouseClick: { x: number; y: number; left: number; top: number };

  @Input("color") public color: string;
  @Input("width") public width: number;
  @Input("height") public height: number;
  @Input("left") public left: number;
  @Input("top") public top: number;
  @Input("enable") public enable: number;
  @ViewChild("container") public container: ElementRef;

  ngOnInit(): void {
    this.initContainer();
  }
  public status: Status = Status.OFF;

  initContainer() {
    this.data.width = this.width;
    this.data.height = this.height;
    this.data.left = this.left;
    this.data.top = this.top;
    this.data.color = this.color;
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };
    if (this.status === Status.MOVE) this.move();
    else return false;
  }

  public readonly AngularResizeElementDirection = AngularResizeElementDirection;

  setStatus(event: MouseEvent, status: number) {
    if (this.enable == 1) {
      return false;
    }
    if (status === 1) event.stopPropagation();
    else if (status === Status.MOVE)
      this.mouseClick = {
        x: event.clientX,
        y: event.clientY,
        left: this.data.left,
        top: this.data.top,
      };
    this.status = status;
  }

  public onResize(evt: AngularResizeElementEvent) {
    if (this.enable == 1) {
      return false;
    }
    this.data.width = evt.currentWidthValue;
    this.data.height = evt.currentHeightValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

  private move() {
    this.data.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
    this.data.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
  }
}
