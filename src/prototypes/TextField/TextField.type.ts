export interface IProps {
    label?: string;
    value: string;
    onChange: (val: string) => void;
    type?: string;
    error?: boolean;
}
