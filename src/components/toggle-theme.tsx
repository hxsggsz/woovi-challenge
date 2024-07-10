import { useThemes } from "@/context/theme-context";
import { Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ToggleTheme() {
  const { mode, toggleTheme } = useThemes();
  return (
    <Button variant="outlined" onClick={toggleTheme}>
      {mode ? <WbSunnyIcon /> : <DarkModeIcon />}
    </Button>
  );
}

export default ToggleTheme;
