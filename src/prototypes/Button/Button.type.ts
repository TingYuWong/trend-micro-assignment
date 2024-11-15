import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode;
    outline?: boolean;
    type?: 'submit' | 'button';
    onClick?: () => void;
}
