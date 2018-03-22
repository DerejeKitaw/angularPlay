import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  ngOnInit(): void {
    const condition = true;
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
