import local from '../../local.json';
import { Button } from './types';

export const MainTabs: Button[] = [
    {
        component: 'NewOrder',
        title: local.newOrder,
        icon: 'cart-plus'
    },
    {
        component: 'CheckPrice',
        title: local.checkPrice,
        icon: 'search'
    },
    {
        component: 'NotFound',
        title: local.ordersHistory,
        icon: 'history'
    }
]

export const StorageTabs: Button[] = [
    {
        component: 'AddNewProduct',
        title: local.addNewProduct,
        icon: 'plus'
    },
    {
        component: 'Storage',
        title: local.storageProducts,
        icon: 'clipboard'
    }
]
