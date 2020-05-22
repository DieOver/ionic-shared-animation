import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  // Pega o valor da propriedade item passado em componentProps ao abrir o modal 
  @Input('item') item;

  // Pega o valor da propriedade bounds passado em componentProps ao abrir o modal 
  @Input('bounds') bounds;

  // Cria as variaveis de Animation
  imagemAnimation: Animation;
  boxAnimation: Animation;

  // Injeta as dependencias de ModalController e AnimationController
  constructor(
    private readonly modalCtrl: ModalController,
    private readonly animationCtrl: AnimationController
  ) { }

  // Ao abrir o modal a primeira coisa a acontecer é:
  // Animar o picture-container e ao mesmo tempo o box-container
  // é aqui que a mágica acontece.. pois a gente simula perfeitamente um item saindo da onde o outro estava na tela no momento da abertura
  // dando a impressão de que o elemento realmente está saindo e indo pro modal.
  ngOnInit() {
    // Usando a Variavel imagemAnimation é criado a animação para o Elemento com a class .picture-container
    // fazendo com que esse elemento tenha 
    // border-radius que vem do bounds (bounds.r) pra 0px
    // width que vem do bounds (bounds.w) para 100vw
    // height que vem do bounds (bounds.h) para 50vh
    // transform usando translateX que vem do bounds (bounds.x) e (bounds.y) para 0, 0
    // e que esse animação será em ease-in-out
    // e terá um tempo de 500ms para concluir a animação.
    this.imagemAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.picture-container'))
      .fromTo('borderRadius', `${this.bounds.r}`, '0px')
      .fromTo('width', `${this.bounds.w}px`, '100vw')
      .fromTo('height', `${this.bounds.h}px`, '50vh')
      .fromTo('transform', `translate3d(${this.bounds.x}px, ${this.bounds.y}px, 0)`, 'translate3d(0, 0, 0)')
      .easing('ease-in-out')
      .duration(500);
    this.imagemAnimation.play();

    // Usando a Variavel boxAnimation é criado a animação para o Elemento com a class .box-container
    // fazendo com que esse elemento tenha 
    // opacity 0 pra 1
    // e que esse animação será em ease-in-out
    // e demorará 500ms para começar a animação (logo após a animação da imagem terminar)
    // e terá um tempo de 500ms para concluir a animação.
    this.boxAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.box-container'))
      .fromTo('opacity', '0', '1')
      .easing('ease-in-out')
      .delay(500)
      .duration(500);
    this.boxAnimation.play();
  }

  // e o metodo close é basicamente a mesma coisa porem com a animação invertida fazendo ter a impressão de que o elemento está voltando da onde saiu
  close = async () => {
    // a unica diferença daqui para o que abriu é que aqui está em modo reverso
    // porem o delay agora é na imagem pra ela ocorrer apenas apos a animação do box terminar
    this.imagemAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.picture-container'))
      .fromTo('borderRadius', '0px', `${this.bounds.r}`)
      .fromTo('width', '100vw', `${this.bounds.w}px`)
      .fromTo('height', '50vh', `${this.bounds.h}px`)
      .fromTo('transform', 'translate3d(0, 0, 0)', `translate3d(${this.bounds.x}px, ${this.bounds.y}px, 0)`)
      .easing('ease-in-out')
      .delay(500)
      .duration(500);
    this.imagemAnimation.play();

    // e aqui começa antes do que a imagem, dando a impressão real do reverso.
    this.boxAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.box-container'))
      .fromTo('opacity', '1', '0')
      .easing('ease-in-out')
      .duration(500);
    await this.boxAnimation.play();

    // ao esperar todas animações de cima concluirem, a gente fecha o modal que e conclui toda animação Shared Animation.
    await this.modalCtrl.dismiss();
  }

}
