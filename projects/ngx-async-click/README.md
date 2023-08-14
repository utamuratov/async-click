# Angular async click directive

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.
This directive prevents multiple clicks by condition.
[DEMO](https://stackblitz.com/edit/angular-zxiphu?file=src/main.ts)

## Versions

| Angular    |          Installation          | Version |
| :--------- | :----------------------------: | :-----: |
| Angular 16 |  npm i --save ngx-async-click  |  2.x.x  |
| Angular 15 | npm i --save ngx-async-click@1 |  1.x.x  |

## Installation

Use this following command to install:

```bash
npm i ngx-async-click
```

## Usage

Version <1.1.0

```
import { AsyncClickModule} from 'ngx-async-click';

@NgModule({
  declarations: [AppComponent],
  imports: [AsyncClickModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Version >=1.1.0 (Implemented standalone directive)

```
import { AsyncClickDirective} from 'ngx-async-click';

@NgModule({
  declarations: [AppComponent],
  imports: [AsyncClickDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

# Using

```
[ngxAsyncClick]="methodName.bind(this, [args])"
```

# for example

In the HTML template

```
<button [ngxAsyncClick]="clickWithoutArguments.bind(this)">
  Click me (without arguments)
</button>
<button [ngxAsyncClick]="clickWithoutArguments.bind(this, 'test')">
  Click me (with arguments)
</button>
```

In the .ts file:

```
  clickWithoutArguments() {
    //
    return of(1).pipe(delay(1000));
  }

  clickWithArguments(args: any[]) {
    //
    return of(1).pipe(delay(1000));
  }
```
