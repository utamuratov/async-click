import { Component } from '@angular/core';
import { delay, of, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   *
   */
  title = 'async-click-pack';

  /**
   *
   * @returns
   */
  clickWithoutArguments() {
    //
    return of(1).pipe(delay(1000));
  }

  /**
   *
   * @param args
   * @returns
   */
  clickWithArguments(args: any[]) {
    //
    return of(1).pipe(delay(1000));
  }
}
