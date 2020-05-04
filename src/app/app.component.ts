import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'css';
  frequency: { dice: number, quantity: number, percentage?: number }[] = [];
  loops = 5000;
  repeated = 0;
  fillDices(loopsNumber: number) {
    if (!loopsNumber || loopsNumber > 100000) {
      window.alert('no esta bien su huevada')
      return;
    }
    this.loops = loopsNumber;
    const dicePairs: { first: number, second: number, total: number }[] = [];
    this.frequency = [];
    const loops = this.loops;
    this.repeated = 0;
    for (let index = 0; index < loops; index++) {
      const first = this.getRandomInt(1, 7);
      const second = this.getRandomInt(1, 7);
      const total = first + second;
      if (first === second) { this.repeated++; }
      dicePairs.push({ first, second, total });
    }
    dicePairs.forEach(pair => {
      this.addfrequency(pair.first);
      this.addfrequency(pair.second);
      this.addfrequency(pair.total);
    });
    this.frequency.sort((a, b) => b.quantity - a.quantity);
    let totalQty = 0;
    this.frequency.forEach(freq => {
      totalQty += freq.quantity;
      freq.percentage = (freq.quantity * 100 / (loops * 3));
    });
    console.log(this.repeated * 100 / loops)

  }
  addfrequency(dice: number) {
    const value = this.frequency.find(freq => freq.dice === dice);
    if (value) {
      value.quantity++;
    } else {
      this.frequency.push({ dice, quantity: 1 });
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
