import { styled, Typography, TypographyProps } from "@mui/material";

export const OrderCardText = styled((props: TypographyProps) => (
  <Typography {...props} />
))(() => ({
  fontWeight: 500,
  color: "#00274d",
}));

export const OrderCardHeading = styled((props: TypographyProps) => (
  <Typography {...props} />
))(() => ({
  fontWeight: 700,
  fontSize: "12px",
  color: "#628390",
  textTransform: "uppercase",
}));

export const OrderCardSub = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "capitalize",
    color: theme.palette.text.primary,
  })
);

export const FilterHeading = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    fontWeight: 700,
    marginBottom: "10px",
    color: theme.palette.text.primary,
  })
);

export const CaptionHeading = styled((props: TypographyProps) => (
  <Typography variant="caption" color="text.secondary" {...props} />
))(() => ({
  fontSize: "14px",
  color: "black",
}));

export const MainColorHeading = styled((props: TypographyProps) => (
  <Typography color="text.primary" variant="h6" {...props} />
))(() => ({
  fontSize: "18px",
  fontWeight: 700,
}));

export const PageHeading = styled((props: TypographyProps) => (
  <Typography sx={{ my: { xs: 1, md: 3 } }} {...props} />
))(() => ({
  fontSize: "25px",
  fontWeight: 500,
  color: "white",
  textTransform: "uppercase",
}));
