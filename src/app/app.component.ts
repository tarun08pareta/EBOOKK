import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ebbb';
}
 { function applyRandomEffect() {
    const element = document.getElementById('digital');
    const effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];

    // Randomly select an effect
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];

    // Remove previous effects
    element.classList.remove(...effects);

    // Apply the random effect
    element.classList.add(randomEffect);

    // Set a timeout to remove the effect after 2 seconds (adjust as needed)
    setTimeout(() => {
        element.classList.remove(randomEffect);
    }, 2000);
}

// Apply the random effect every 5 seconds (adjust as needed)
setInterval(() => {
    applyRandomEffect();
}, 5000);
}
