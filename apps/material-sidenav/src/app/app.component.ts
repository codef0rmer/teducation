import { MatSidenav } from '@angular/material/sidenav';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'teducation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  animateSidenav() {
    const isSideNavOpened = this.sidenav?.opened;
    const $matSidenav = this.elementRef.nativeElement.querySelector(
      'mat-sidenav'
    );
    const $matSidenavContent = this.elementRef.nativeElement.querySelector(
      'mat-sidenav-content'
    );

    if (isSideNavOpened) {
      this.sidenav?.toggle();
      window.setTimeout(() => {
        this.renderer.setStyle($matSidenav, 'width', '0px');
        this.renderer.setStyle(
          $matSidenav,
          'transform',
          'translate3d(0, 0, 0)'
        );
        window.setTimeout(() => {
          this.renderer.setStyle($matSidenav, 'width', '55px');
          this.renderer.setStyle($matSidenav, 'transition', 'width 0.3s');
          this.renderer.setStyle($matSidenav, 'visibility', 'visible');
          this.renderer.setStyle($matSidenavContent, 'margin-left', '55px');
        }, 100);
      }, 400);
    } else {
      this.renderer.removeStyle($matSidenav, 'width');
      this.renderer.removeStyle($matSidenav, 'transition');
      this.renderer.removeStyle($matSidenav, 'visibility');
      this.renderer.removeStyle($matSidenav, 'transform');
      this.renderer.removeStyle($matSidenavContent, 'margin-left');
      this.sidenav?.toggle();
    }
  }
}
