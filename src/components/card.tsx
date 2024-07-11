import { CheckCircle } from "@mui/icons-material";
import { Box, Typography, Radio } from "@mui/material";
import { formatCurrency } from "@/utils/formatCurrency";

function Card() {
  const language = localStorage.getItem("@lang") ?? navigator.language;

  return (
    <Box
      sx={{
        width: 1,
        p: "20px",
        maxWidth: "430px",
        border: "2px solid",
        borderRadius: "10px",
        borderColor: "info.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            left: "0",
            px: "20px",
            top: "-34px",
            color: "info.900",
            position: "absolute",
            bgcolor: "info.main",
            borderRadius: "100px",
          }}
        >
          Pix
        </Box>

        <Box sx={{ gap: "4px", display: "flex" }}>
          <Typography fontWeight={800} fontSize={24}>
            1x
          </Typography>

          <Typography fontWeight={600} fontSize={24}>
            {formatCurrency(30_500, language)}
          </Typography>
        </Box>

        <Radio sx={{ p: 0 }} color="secondary" checkedIcon={<CheckCircle />} />
      </Box>

      <Typography color="secondary.main" fontWeight={800}>
        green message
      </Typography>

      <Typography color="info.main" fontWeight={800}>
        grey message
      </Typography>

      <Box
        sx={{
          py: "6px",
          pl: "10px",
          color: "#fff",
          borderRadius: "4px",
          bgcolor: "primary.main",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          clipPath: "polygon(0% 0%, 100% 0, 96% 50%, 100% 100%, 0% 100%);",
        }}
      >
        <Typography fontWeight={800}>banner message</Typography>
      </Box>
    </Box>
  );
}

export default Card;
