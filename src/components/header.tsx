import { Box } from "@mui/material";
import ToggleTheme from "@/components/toggle-theme";
import ToggleLang from "@/components/toggle-lang";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        top: 0,
        width: 1,
        right: 0,
        pt: "8px",
        px: "24px",
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
