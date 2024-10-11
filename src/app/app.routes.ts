import { Routes } from '@angular/router';

<<<<<<< HEAD
export const routes: Routes = [
    {
        path:'products',
        loadChildren: ()=>
            import ('./products/features/product-shell/product.route'),
    },
    {
        path:'**',
        redirectTo:'products',
    }

];
=======
export const routes: Routes = [];
>>>>>>> 968438f312249f1d3094d846c841237440146c66
