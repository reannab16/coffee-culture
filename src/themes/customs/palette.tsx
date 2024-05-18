import { alpha } from "@mui/material/styles";

export type ColorSchema =
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";

declare module "@mui/material/styles/createPalette" {
    interface TypeBackground {
        neutral: string;
    }
    interface SimplePaletteColorOptions {
        lighter: string;
        darker: string;
        background: string;
        green: string;
        highlight: string;
    }
    interface PaletteColor {
        lighter: string;
        darker: string;
        background: string;
        green: string;
        highlight: string;
    }
}

// SETUP COLORS

export const primary = {
    background: '#E1D6CC',
    // lighter: "#FCC5CC",
    highlight: '#e1d6cc2e',
    light: "#4d25121a",
    main: "#9A5737",
    dark: "#4D2512",
    darker: "#2F211A",
    contrastText: "#4D2512",
    green: '#BCBF8C',
};

export const secondary = {
    // lighter: "#3D3D3D",
    // light: "#292929",
    main: "#E1D6CC",
    // dark: "#0A0A0A",
    // darker: "#000000",
    contrastText: "#9A5737",
};

const base = {
    primary,
    secondary
}

export function palette() {
    const light = {
        ...base
    }
    return light;
}
