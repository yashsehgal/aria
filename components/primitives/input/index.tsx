import { cn } from "@/scripts/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    wFull?: boolean;
};

const Input: React.FunctionComponent<InputProps> = ({ wFull=false, className, ...attr }) => {
    if (attr?.type !== "file") {
        return (
            <input type={attr?.type} 
                className={
                    cn(
                        "rounded-md w-[340px] border border-gray-100",
                        className
                    )
                }
                {...attr}
            />
        )
    } else {
        return (
            <input type={"file"} {...attr} />
        )
    }
};