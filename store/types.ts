export interface Product {
    id: string;
    name: string;
    count: number;
    price: number;
}

export interface StoreState {
    cart: Product[];
    addCartItem: (product: Product) => void;
    removeCartItem: (id: string, hard?: boolean) => void;
    cleanCart: () => void;
    cartTotalPrice: () => number;
    cartTotalItems: () => number;
}