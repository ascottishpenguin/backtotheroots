import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'mel-site';
  animate = false
  treeWidth: number

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let requiredScroll = window.innerHeight / 2
    console.log(this.animate)
    if (window.scrollY > requiredScroll) {
      this.animate = true;
    }
    console.log(requiredScroll)
    console.log(window.scrollY)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let screenWidth = window.innerWidth
    // if (screenWidth > 1680) {
    //   return 840
    // }
    this.treeWidth = screenWidth * 0.48
    return this.treeWidth
  }

  firstTreeWidth() {
    let screenWidth = window.innerWidth
    // if (screenWidth > 1680) {
    //   return 840
    // }
    this.treeWidth = screenWidth * 0.48
    return this.treeWidth
  }

  ngOnInit() {

    this.firstTreeWidth()


  }

}

