import { FontAwesome } from '@expo/vector-icons';

type colorObject = { lightColor: string, darkColor: string }

export interface ActionButtonProps {
    title: string;
    icon?: React.ComponentProps<typeof FontAwesome>['name']; 
    iconColor?: colorObject;
    textColor?: colorObject;
    iconSize?: number;
    textSize?: number;
    disabled?: boolean;
};

