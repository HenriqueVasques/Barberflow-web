import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html'
})
export class Services {
  protected readonly serviceList = [
    {
      title: 'Corte de Cabelo',
      description: 'Corte personalizado para o seu estilo e formato de rosto.',
      price: 'R$ 50,00',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Barba',
      description: 'Modelagem e alinhamento para uma barba impecável.',
      price: 'R$ 40,00',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Combo Completo',
      description: 'Corte + Barba + Sobrancelha e toalha quente.',
      price: 'R$ 80,00',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Sobrancelha',
      description: 'Design e alinhamento para um olhar mais marcante.',
      price: 'R$ 25,00',
      image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=600&auto=format&fit=crop'
    }
  ];
}