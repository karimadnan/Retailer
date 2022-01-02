import { RootStackScreenProps } from '../../types';

export interface StorageProduct {
    id: string;
    name: string;
    stock: number;
    price: number;
    image?: string;
}

export interface EditStorageProduct {
    name?: string;
    stock?: number;
    price?: number;
}

export interface EditProductProps {
    product: StorageProduct,
    onEdit: (product: EditStorageProduct) => void;
    setEditing: (state: boolean) => void;
}

export type StorageProductsProps = { data: StorageProduct[]} & RootStackScreenProps<'Storage'>;


