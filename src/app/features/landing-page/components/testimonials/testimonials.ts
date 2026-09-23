import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html'
})
export class Testimonials {
  protected readonly reviews = [
    { name: 'Lucas Almeida', text: 'Melhor barbearia da região! Atendimento top, ambiente incrível e o corte ficou perfeito. Com certeza volto!', rating: '★★★★★' },
    { name: 'Gabriel Santos', text: 'Profissionais de ponta e lugar nota 10. O ambiente é moderno e super agradável. Recomendo demais!', rating: '★★★★★' },
    { name: 'Rafael Oliveira', text: 'Virei cliente de carteirinha. O cuidado dos caras em todos os detalhes faz toda a diferença.', rating: '★★★★★' }
  ];
}