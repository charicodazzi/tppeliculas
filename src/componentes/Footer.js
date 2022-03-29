import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(27, 40, 54, 1.0)",
        display: "flex",
        justifyContent: "center",
        fontSize: 22,
      }}
    >
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.linkedin.com/in/carla-codazzi/ "
      >
        Visita mi Linkedin
      </a>
    </Box>
  );
};
export default Footer;
