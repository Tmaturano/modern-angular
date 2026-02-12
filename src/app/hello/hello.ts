import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = 'Welcome to Modern Angular!';

  protected isDisabled = false;

  protected onclick(): void {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  // Computed signal that calculates double the count value. Only re-evaluates when 'count' changes.
  // We only use computed signals only for computed values.
  protected doubleCount = computed(() => this.count() * 2);

  // The difference between effect and computed is that effect is used for side effects and do not returns values,
  // while computed is used for derived state and returns value.
  protected countLog = effect(() => {
    console.log(`Count value changed: ${this.count()}`);
  });

  protected increaseCounter(): void {
    this.count.update(value => value + 1);
  }

  protected decreaseCounter(): void {
    this.count.update(value => value - 1);
  }

  protected resetCounter(): void {
    this.count.set(0);
  }
}
