import { ChangeEvent, ReactNode } from "react";

interface ContentInputProps {
    label: string;
    attr?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

export default function ContentInput({ label, attr, placeholder, value, onChange, children }: ContentInputProps) {
    return (
        <div>
            <label className="block text-label-large font-bold text-[#5D5D5D] mb-2">
                {label}
            </label>
            {children ? children : (<input
                type="text"
                placeholder={placeholder}
                className="w-full p-3 border border-[#e7e7e7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#236fea]"
                value={value}
                onChange={onChange}
                readOnly={attr}
            />)}
        </div>
    )
}
