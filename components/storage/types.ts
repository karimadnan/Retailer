import { RootStackScreenProps } from '../../types';

export interface StorageProductProps {
    id: string;
    name: string;
    stock: number;
    price: number;
    image?: string;
}

export type StorageProductsProps = { data: StorageProductProps[]} & RootStackScreenProps<'Storage'>;


