import { Box } from "@mui/material";
import ToggleTheme from "@/components/toggle-theme";
import ToggleLang from "@/components/toggle-lang";

function Header() {
  return (
    <Box
      sx={{
        top: 0,
        width: 1,
        right: 0,
        p: "8px",
        gap: "8px",
        zIndex: "20",
        display: "flex",
        position: "fixed",
        justifyContent: "flex-end",
        backdropFilter: "blur(2px)",
      }}
    >
      <ToggleTheme />
      <ToggleLang />
    </Box>
  );
}

export default Header;
