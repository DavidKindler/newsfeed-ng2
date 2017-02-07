import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml }  from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtml implements PipeTransform {
  constructor(private _sanitizer:DomSanitizer){}

  transform(html:string) {
    // return this._sanitizer.bypassSecurityTrustHtml(html);
      var textArea = document.createElement('textarea');
      textArea.innerHTML = html;
      return textArea.value;
  }

}
