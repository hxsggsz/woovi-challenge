import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Typography, Checkbox } from "@mui/material";
import { formatCurrency } from "@/utils/formatCurrency";

export interface CardProps {
  label?: string;
  multiplier: string;
  value: number;
  greenMessage?: React.ReactNode;
  greyMessage?: React.ReactNode;
  bannerMessage?: React.ReactNode;
}

function Card(props: CardProps) {
  const renderLabel = () => (
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
      {props.label}
    </Box>
  );

  const renderGreenMessage = () => (
    <Box
      sx={{
        color: "secondary.main",
      }}
    >
      {props.greenMessage}
    </Box>
  );

  const renderGreymessage = () => (
    <Typography color="info.main" fontWeight={800}>
      {props.greyMessage}
    </Typography>
  );

  const renderBanner = () => (
    <Box
      sx={{
        py: "6px",
        pl: "10px",
        gap: "4px",
        color: "#fff",
        display: "flex",
        borderRadius: "4px",
        bgcolor: "primary.main",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
        clipPath: "polygon(0% 0%, 100% 0, 96% 50%, 100% 100%, 0% 100%)",
      }}
    >
      {props.bannerMessage}
    </Box>
  );

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
        {props.label && renderLabel()}

        <Box sx={{ gap: "4px", display: "flex" }}>
          <Typography fontWeight={800} fontSize={24}>
            {props.multiplier}
          </Typography>

          <Typography fontWeight={600} fontSize={24}>
            {formatCurrency(props.value)}
          </Typography>
        </Box>

        <Checkbox
          color="secondary"
          sx={{ p: "2px" }}
          checkedIcon={<CheckCircle />}
          icon={<RadioButtonUnchecked />}
        />
      </Box>

      {props.greenMessage && renderGreenMessage()}
      {props.greyMessage && renderGreymessage()}
      {props.bannerMessage && renderBanner()}
    </Box>
  );
}

export default Card;
