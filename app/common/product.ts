export class Product {
    constructor(public productID : number,
        public productName : string,
        public productDescription: String,
        public unitPrice : number,
        public imageURL : string,
        public activeBit : number,
        public unitsInStock : number,
        public dateCreated : Date,
        public lastUpdated : Date,
        public categoryID : number,
        public sku : string ){}
}
