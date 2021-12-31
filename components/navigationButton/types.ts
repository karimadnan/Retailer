
import { RootStackParamList } from '../../types'
import { FontAwesome } from '@expo/vector-icons';

export interface Button {
    component: keyof RootStackParamList;
    title: string;
    icon?: React.ComponentProps<typeof FontAwesome>['name'];
}

export interface NavigationButton {
   data: Button[];
   navigation: any
}