import CpfInput from "@/components/inputs/cpf";
import SimpleDateInput from "@/components/inputs/simple-date";
import { usePayment } from "@/context/usePayment";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import wooviLogo from "/woovi.svg";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardPaymentTypes, cardPaymentSchema } from "@/schemas/card-payment";
import { useState } from "react";
import PaymentInfo from "./payment-info";
import PaymentDate from "./payment-date";
import { useAlert } from "@/context/useAlert";

function CardPayment() {
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const { alert } = useAlert();

  const { payment, advanceActivePayment } = usePayment();

  const {
    control,
    formState: { errors, isValid },
    register,
    getValues,
    handleSubmit,
  } = useForm<CardPaymentTypes>({
    defaultValues: {
      name: "",
      cpf: "",
      cardValue: "",
      cardDeadline: "",
      cvv: "",
      installments: 1,
    },
    resolver: zodResolver(cardPaymentSchema),
  });

  const onSubmit = (data: CardPaymentTypes) => {
    setIsLoading(true);
    // simulate an api call
    setTimeout(() => {
      advanceActivePayment(data.installments);
      alert(t("payment:success-alert"), "success");
      setIsLoading(false);
    }, 1000);
  };

  const renderOptions = () =>
    Array.from(Array(payment.multiplier)).map((_, index) => {
      const installmentsToPayYet = payment.multiplier - 1;

      const installmentMultiplier = index + 1;

      return (
        <MenuItem
          key={index}
          disabled={payment.multiplier - payment.activePayment <= index}
          value={++index}
        >
          {index++}x {t("card-payment:of")}{" "}
          {formatCurrency(
            (payment.value * installmentsToPayYet) / installmentMultiplier,
          )}
        </MenuItem>
      );
    });

  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    gap: "20px",
    [theme.breakpoints.up("lg")]: {
      alignItems: "start",
      flexDirection: "row",
    },
  }));

  return (
    <>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <img src={wooviLogo} alt="woovi logo" />

        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
          {payment.name},{" "}
          {t("card-payment:title", { value: getValues("installments") })}
        </Typography>
      </Box>

      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2} width={400}>
            <TextField
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              label="nome"
            />

            <TextField
              label="Cpf"
              {...register("cpf")}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              InputProps={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                inputComponent: CpfInput as any,
              }}
            />

            <Controller
              control={control}
              name="cardValue"
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="cartao"
                  error={!!errors.installments}
                  helperText={errors.installments?.message}
                  onChange={(ev) => {
                    const value = ev.currentTarget.value;

                    if (value.match(/[0-9]/)) {
                      field.onChange(ev);
                    }
                  }}
                />
              )}
            />

            <Box sx={{ display: "flex", gap: "22px" }}>
              <TextField
                fullWidth
                {...register("cardDeadline")}
                error={!!errors.cardDeadline}
                helperText={errors.cardDeadline?.message}
                label={t("card-payment:form:deadline")}
                defaultValue={1}
                InputProps={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  inputComponent: SimpleDateInput as any,
                }}
              />
              <Controller
                control={control}
                name="cvv"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="cvv"
                    error={!!errors.installments}
                    helperText={errors.installments?.message}
                    onChange={(ev) => {
                      const value = ev.currentTarget.value;
                      if (value.length <= 3 && value.match(/[0-9]/)) {
                        field.onChange(ev);
                      }
                    }}
                  />
                )}
              />
            </Box>

            <TextField
              select
              fullWidth
              defaultValue="1"
              {...register("installments")}
              label={t("card-payment:form:installments")}
            >
              {renderOptions()}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              disabled={!isValid || isLoading}
              startIcon={
                isLoading && <CircularProgress size={26} color="info" />
              }
            >
              {t("card-payment:form:submit")}
            </Button>
          </Stack>
        </form>

        <Box>
          <PaymentDate />
          <PaymentInfo />
        </Box>
      </Container>
    </>
  );
}

export default CardPayment;
