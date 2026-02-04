import { Component, signal } from '@angular/core';

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
