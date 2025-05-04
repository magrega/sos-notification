import { Box, Link, Typography } from "@mui/material";
import { MainColorHeading } from "components/shared/Typography";
import { default as parse } from "html-react-parser";
import { useTranslation } from "react-i18next";
import { OssResponse } from "types/FetchInterfaces";

interface LegalPageOssCardProps {
  data: OssResponse;
}

const LegalPageOssCards = ({ data }: LegalPageOssCardProps) => {
  const { t } = useTranslation();

  if (!data || data?.results.length === 0) return t("noData");
  return data.results.map((lib) => (
    <Box
      sx={{ display: "flex", flexDirection: "column", columnGap: 4 }}
      key={lib.library}
    >
      <Box paddingY={2}>
        <MainColorHeading>{lib.library}</MainColorHeading>
        <Typography>{lib.version}</Typography>
        <Typography>{lib.license}</Typography>
        <Link href={lib.link} target="blank">
          {lib.link}
        </Link>
      </Box>
      <Box>{parse(lib.text)}</Box>
    </Box>
  ));
};

export default LegalPageOssCards;
