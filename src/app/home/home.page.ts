import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, AnimationController } from '@ionic/angular';
import { DetailComponent } from '../modals/detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Apenas um array de objetos para gerar conteudo na tela inicial
  items = [
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
    {
      picture: 'assets/books/book-cover.webp',
      title: 'Lemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque consectetur aut dolore? Officia nostrum voluptate repellat consectetur dolorem id illo est ex earum placeat doloribus soluta, porro repellendus dolores.'
    },
  ];

  // Referencia ao Ion Content para ser possivel pegar o ScrollTop do que já foi Scrollado pelo usuário e poder fazer a conta correta.
  @ViewChild(IonContent, { static: true }) contentEl: IonContent;

  // Injeção da dependencia do ModalController e do AnimationController
  constructor(
    private readonly modalCtrl: ModalController,
    private readonly animationCtrl: AnimationController
  ) { }

  ngOnInit() { }

  // Faz rodar a animação de entrada porem de modo REVERSO
  leaveAnimation = (baseEl: any) => this.enterAnimation(baseEl).direction('reverse');

  // Faz rodar a animação de entrada porem no modo normal
  // Essa animação vai alterar o comportamento comum da abertura do modal de SlideUP para um FadeIn/FadeOut
  enterAnimation = (baseEl: HTMLElement) => {
    // Criado a animação do ion-backdrop
    const backdropAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', '0.04');

    // Criado a animação do .modal-wrapper
    // para resetar as principais caracteristicas que sao
    // scale e translateX
    // para o valor padrao e a animação poder ser alterada sem problemas.
    const wrapperAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('.modal-wrapper'))
      .fromTo('transform', 'scale(1)', 'scale(1)')
      .fromTo('translateX', '0%', '0%')
      .fromTo('opacity', '0', '1');

    // metodo de executar a animações criadas acima e com a velocidade easing em cubic-bezier
    // para que seja uma transação mais rápida do que o normal e a transação ficar boa (sem lag)
    return this.animationCtrl.create()
      .addElement(baseEl)
      .easing('cubic-bezier(0.36, 0.66, 0.04, 1)')
      .duration(1000)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  // Aqui eu pego os "BOUNDS" do item clicado
  openDetail = async (ev: any, item: any) => {
    // Aqui é onde pego a posição X e Y e também a largura e altura do objeto clicado pra poder passar pro modal aberto
    // o Valor 44 é para compensar a Altura do Header da página Home, se seu header for mais largo ou mais fino,
    // esse valor 44 precisa ser o height exato do seu header
    // E o scrollTop do contentEl é para subtrair a quantidade já scrollada pelo usuário.
    // O Valor R é o Border Radius que voce quer que inicie, como no nosso exemplo é um Quadrado sem bordar arredondadas passamos 0
    const bounds = {
      r: '0',
      x: ev.srcElement.offsetLeft,
      y: (ev.srcElement.offsetTop + 44) - (await this.contentEl.getScrollElement()).scrollTop,
      w: ev.srcElement.offsetWidth,
      h: ev.srcElement.offsetHeight
    };
    // Abrir modal passando os parametros ITEM e BOUNDS
    // o Item é o objeto do item clicado
    // e o enterAnimation e o leaveAnimation é utilizado o que criamos acima pra substituir a animação padrao do Modal do Ionic
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        bounds,
        item
      },
      enterAnimation: this.enterAnimation,
      leaveAnimation: this.leaveAnimation,
      backdropDismiss: false,
      keyboardClose: false
    });
    await modal.present();
  }

}
