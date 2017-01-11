import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rss-not-found',
  template: `
    <p>
      404 - Page Not Found
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
