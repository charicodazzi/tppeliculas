import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: 22,
        position: "absolute",
        width: "100%",
        bottom: 0,
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
