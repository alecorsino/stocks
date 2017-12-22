import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';



const routes: Routes = [
  {path: 'articulos', component: ArticuloComponent},
  {path: 'configuracion', component: ConfiguracionComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutignModule { }
