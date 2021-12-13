import { Produit } from './Produit'
export class Stock {
    idStock!: number;
    libelleStock!: String;
    qteMin!: number;
    qteStock!: number;
    createdDate!: Date;
    updatedDate!: Date;
    produits!: Produit[];
    state!: number;
    rating!: number;
    urlImage!: String;

    /*<form #modelF="ngForm">
                <div class="form-outline col-10">
                    <input type="text" placeholder="Recherche.." name="search" [(ngModel)]="search" #qteMin="ngModel"
                        id="form1" class="form-control " />
                </div>
                <input type="submit" class="btn btn-outline-dark col-1 fas fa-search" (click)="GetListSearch()" />
            </form>*/
}