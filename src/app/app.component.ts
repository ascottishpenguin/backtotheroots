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
    if (screenWidth < 600) {
      this.treeWidth = screenWidth 
      return this.treeWidth
    }
    this.treeWidth = screenWidth * 0.48
    return this.treeWidth
  }

  firstTreeWidth() {
    let screenWidth = window.innerWidth
    if (screenWidth < 600) {
      this.treeWidth = screenWidth * 0.8
      return this.treeWidth
    }
    this.treeWidth = screenWidth * 0.48
    return this.treeWidth
  }

  get treeHeight() {
    if (window.innerWidth <= 600) {
      return window.innerHeight * 0.3
    }
    return window.innerHeight * 0.58
    
  }

  ngOnInit() {

    this.firstTreeWidth()


  }

}

