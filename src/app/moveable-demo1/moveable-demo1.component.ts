import { Component, OnInit, ViewChild } from "@angular/core";
import { MoveableComponent } from "../component/moveable/moveable.component";

@Component({
  selector: "app-moveable-demo1",
  templateUrl: "./moveable-demo1.component.html",
  styleUrls: ["./moveable-demo1.component.scss"],
})
export class MoveableDemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild("child1") profileImage1: MoveableComponent;
  @ViewChild("child2") profileImage2: MoveableComponent;
  public disable = true;
  public icon_src = "../../assets/svg/lock-solid.svg";
  statusDisable() {
    let disable_icon = "../../assets/svg/lock-solid.svg";
    let enable_icon = "../../assets/svg/unlock-solid.svg";
    this.disable = !this.disable;
    if (this.disable) {
      this.profileImage1.initContainer();
      this.profileImage2.initContainer();
    }
    this.icon_src = this.disable ? disable_icon : enable_icon;
  }
}
