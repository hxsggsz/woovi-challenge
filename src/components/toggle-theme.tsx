import { Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemes } from "@/context/useThemes";

function ToggleTheme() {
  const { mode, toggleTheme } = useThemes();
  return (
    <Button variant="outlined" onClick={toggleTheme}>
      {mode ? <WbSunnyIcon /> : <DarkModeIcon />}
    </Button>
  );
}

export default ToggleTheme;
