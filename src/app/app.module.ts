import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReverseStringModule } from "demo-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReverseStringModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
