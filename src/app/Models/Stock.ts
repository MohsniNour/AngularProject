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
}