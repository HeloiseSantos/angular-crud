import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' /* Seletor da diretiva, que será chamado onde você dejesa aplicar a diretiva */
})
export class RedDirective {

  constructor(
    /* Princípio de injeção de dependência, declaramos um atributo chamado el do tipo ElementRef(referência de um elemento) */
    private el: ElementRef 
  ) {
    /* Acessa o elemento nativo "el" e muda o estilo da sua cor para a que foi definida */
    el.nativeElement.style.color = '#e35e6b';
  }

}
