import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  /* Como coloquei o em no HTML, ele pegará exatamente a parte que vem após o nome do seletor, que nesse caso é um array de números [1, 2, 3] */
  @Input('myForEm') numbers: number[]; /* No HTML: tem um em e logo após espera receber algo, neste caso o array */

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {

  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}
