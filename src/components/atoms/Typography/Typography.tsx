import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
    size?: "title" | "xl" | "lg" | "md" | "sm" | "xs";
    weight?: number;
    color?: string;
    children: React.ReactNode;
}

const Typography = styled.div((props : TypographyProps) => ({
    fontSize: 
        props.size === "title" ? "8rem" // 128px
        : props.size === "xl" ? "2.25rem" // 36px
        : props.size === "lg" ? "1.5rem" // 24px
        : props.size === "md" ? "1.125rem"  // 18px
        : props.size === "sm" ? "1rem" // 16px
        : props.size === "xs" ? "0.6rem" // 10px
        : "1rem",
    fontWeight: props.weight || 400,
    color: props.color || useTheme().text.white,

    '@media (max-width: 768px)': {
        fontSize:
            props.size === "title" ? "6rem" // 96px
            : props.size === "xl" ? "1.5rem" // 24px
            : props.size === "lg" ? "1.125rem" // 18px
            : props.size === "md" ? "1rem" // 16px
            : props.size === "sm" ? "0.8rem" // 12px
            : props.size === "xs" ? "0.6rem" // 10px
            : "1rem",
    },

    transition: "0.25s",
    
}))

export default Typography