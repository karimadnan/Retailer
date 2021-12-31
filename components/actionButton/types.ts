import { FontAwesome } from '@expo/vector-icons';

export interface ActionButtonProps {
    title: string;
    icon?: React.ComponentProps<typeof FontAwesome>['name']; 
    iconColor?: { lightColor: string, darkColor: string };
    textColor?: { lightColor: string, darkColor: string };
};

