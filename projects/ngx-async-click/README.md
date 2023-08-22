# Angular async click directive

[DEMO](https://stackblitz.com/edit/angular-zxiphu?file=src/main.ts)

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
