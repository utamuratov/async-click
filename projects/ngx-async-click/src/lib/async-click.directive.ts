import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}; // noop means No Operation

@Directive({
  selector: '[ngxAsyncClick]',
  standalone: true,
})
export class AsyncClickDirective implements OnDestroy {
  /**
   *
   */
  @Input('ngxAsyncClick')
  azAsyncClick!: any; // any Function

  /**
   *
   */
  private subscription!: Subscription;

  /**
   *
   * @param _renderer
   * @param _elementRef
   */
  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  @HostListener('click')
  onClick() {
    if (typeof this.azAsyncClick === 'function') {
      this.unsubscribe();
      this.subscribe(this.azAsyncClick());
    }
  }

  /**
   *
   */
  private disable() {
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      'disabled',
      'true'
    );
  }

  /**
   *
   */
  private enable() {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'disabled');
  }

  /**
   *
   * @param obs$
   */
  private subscribe(obs$: Observable<any>) {
    this.beforeStartingRequest();

    const afterRequstFinished = () => this.afterRequstFinished();
    if (typeof obs$.subscribe === 'function') {
      this.subscription = obs$.subscribe({
        next: noop,
        complete: afterRequstFinished,
        error: afterRequstFinished,
      });
      return;
    }
  }

  /**
   *
   */
  private afterRequstFinished() {
    this.enable();
    this.cd.markForCheck();
  }

  /**
   *
   */
  private beforeStartingRequest() {
    this.disable();
    this.cd.markForCheck();
  }

  /**
   *
   */
  private unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.unsubscribe();
  }
}
