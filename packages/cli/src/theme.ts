export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "Nightfox",
    colors: {
      primary: "#56D6C2",
      planMode: "#CF8EF4",
      selection: "#89B4FA",
      thinking: "#CF8EF4",
      success: "#82E0AA",
      error: "#E74C5E",
      info: "#56D6C2",
      background: "#0D0D12",
      surface: "#1A1A24",
      dialogSurface: "#0A0A10",
      thinkingBorder: "#34344A",
      dimSeparator: "#4E4E66",
    },
  },
  {
    name: "Dracula",
    colors: {
      primary: "#BD93F9",
      planMode: "#FF79C6",
      selection: "#6272A4",
      thinking: "#BD93F9",
      success: "#50FA7B",
      error: "#FF5555",
      info: "#8BE9FD",
      background: "#282A36",
      surface: "#303341",
      dialogSurface: "#21222C",
      thinkingBorder: "#44475A",
      dimSeparator: "#6272A4",
    },
  },
  {
    name: "Nord",
    colors: {
      primary: "#88C0D0",
      planMode: "#B48EAD",
      selection: "#81A1C1",
      thinking: "#B48EAD",
      success: "#A3BE8C",
      error: "#BF616A",
      info: "#8FBCBB",
      background: "#2E3440",
      surface: "#3B4252",
      dialogSurface: "#272C36",
      thinkingBorder: "#434C5E",
      dimSeparator: "#68768C",
    },
  },
  {
    name: "Gruvbox",
    colors: {
      primary: "#FABD2F",
      planMode: "#D3869B",
      selection: "#83A598",
      thinking: "#D3869B",
      success: "#B8BB26",
      error: "#FB4934",
      info: "#8EC07C",
      background: "#282828",
      surface: "#3C3836",
      dialogSurface: "#1D2021",
      thinkingBorder: "#504945",
      dimSeparator: "#928374",
    },
  },
  {
    name: "Tokyo Night",
    colors: {
      primary: "#7AA2F7",
      planMode: "#BB9AF7",
      selection: "#7DCFFF",
      thinking: "#BB9AF7",
      success: "#9ECE6A",
      error: "#F7768E",
      info: "#2AC3DE",
      background: "#1A1B26",
      surface: "#24283B",
      dialogSurface: "#16161E",
      thinkingBorder: "#414868",
      dimSeparator: "#737AA2",
    },
  },
  {
    name: "Rose Pine",
    colors: {
      primary: "#EBBCBA",
      planMode: "#C4A7E7",
      selection: "#9CCFD8",
      thinking: "#C4A7E7",
      success: "#9CCFD8",
      error: "#EB6F92",
      info: "#F6C177",
      background: "#191724",
      surface: "#1F1D2E",
      dialogSurface: "#15131E",
      thinkingBorder: "#403D52",
      dimSeparator: "#908CAA",
    },
  },
  {
    name: "Everforest",
    colors: {
      primary: "#A7C080",
      planMode: "#D699B6",
      selection: "#83C092",
      thinking: "#D699B6",
      success: "#A7C080",
      error: "#E67E80",
      info: "#7FBBB3",
      background: "#2D353B",
      surface: "#343F44",
      dialogSurface: "#232A2E",
      thinkingBorder: "#475258",
      dimSeparator: "#859289",
    },
  },
  {
    name: "Graphite",
    colors: {
      primary: "#F5F5F5",
      planMode: "#D4D4D4",
      selection: "#D4D4D4",
      thinking: "#A3A3A3",
      success: "#86EFAC",
      error: "#FCA5A5",
      info: "#93C5FD",
      background: "#111111",
      surface: "#202020",
      dialogSurface: "#181818",
      thinkingBorder: "#404040",
      dimSeparator: "#737373",
    },
  },
  {
    name: "Botanical",
    colors: {
      primary: "#C5E478",
      planMode: "#F0CB83",
      selection: "#B5D99C",
      thinking: "#F0CB83",
      success: "#8FDEA8",
      error: "#FF9990",
      info: "#91D9D2",
      background: "#13251B",
      surface: "#20382A",
      dialogSurface: "#182D21",
      thinkingBorder: "#3B5C45",
      dimSeparator: "#7F9D82",
    },
  },
  {
    name: "Oxblood",
    colors: {
      primary: "#FF9B9E",
      planMode: "#EBC47C",
      selection: "#F0ACB8",
      thinking: "#EBC47C",
      success: "#B8D99A",
      error: "#FF737A",
      info: "#9DD8D8",
      background: "#2A141C",
      surface: "#3D202A",
      dialogSurface: "#321923",
      thinkingBorder: "#68404C",
      dimSeparator: "#AE8390",
    },
  },
  {
    name: "Copper",
    colors: {
      primary: "#FFB078",
      planMode: "#E6CE85",
      selection: "#EDC19A",
      thinking: "#E6CE85",
      success: "#BBD58C",
      error: "#FF8E83",
      info: "#91CED0",
      background: "#292018",
      surface: "#3B2E23",
      dialogSurface: "#31261D",
      thinkingBorder: "#65503D",
      dimSeparator: "#AC937B",
    },
  },
];

export const DEFAULT_THEME = THEMES.find((theme) => theme.name === "Nightfox")!;
