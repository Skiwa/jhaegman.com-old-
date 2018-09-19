export class Portfolio {

  id;
  short;
  name;
  description;
  link;
  image;
  max = 4;
  color;

  constructor() {
    this.id = 1;
    this.change();
  }

  // projects switch
  change () {
    switch (this.id) {
      case 1:
        this.short = 'Jhaegman';
        this.name = 'Jhaegman.com';
        this.description = 'Page principale de ce site. Application full-page en Angular conçue avec la librairie GSAP.';
        this.link = 'https://www.jhaegman.com/';
        this.image = '';
        this.color = '#086699';
        break;
      case 3:
        this.short = 'Tokyo';
        this.name = 'Tokyo Agency';
        this.description = 'Application Angular concernant une agence immobillière fictive à Tokyo.\n Expérimentation des effets parallaxes.';
        this.link = 'https://www.jhaegman.com/tokyo-agency';
        this.image = '';
        this.color = '#FAA91A';
        break;
      case 4:
        this.short = 'Nevada';
        this.name = 'Nevada 2087';
        this.description = 'Court-métrage d\'animation au format numérique, réalisé en collaboration avec des étudiants en animation aux Ateliers de Sèvres, à Paris.';
        this.link = 'https://www.jhaegman.com/nevada-2087/';
        this.image = '';
        this.color = '#68a084';
        break;
      case 2:
        this.short = 'FerretDesign';
        this.name = 'FerretDesign';
        this.description = 'Application Angular et Materialize.css. Studio de design fictif.';
        this.link = 'https://www.jhaegman.com/ferret-design/';
        this.image = '';
        this.color = '#EB4B4D';
        break;


    }
  }

  previous() {
    if (this.id !== 1) {
      this.id--;
      this.change();
    } else {
      this.id = this.max;
      this.change();
    }
  }
  next() {
    if ( this.id !== this.max) {
      this.id++;
      this.change();
    } else {
      this.id = 1;
      this.change();
    }
  }
  goto(id) {
    this.id = id;
    this.change();
  }
}
