const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: "1rem",
      textTransform: "capitalize",
    },
  },
  variants: [
    {
      props: { variant: "primary" },
      style: {
        background: "#579DFF",
        color: "white",
        ":hover": {
          background: "#CCE0FF",
          color: "#579DFF",
        },
      },
    },
    {
      props: { variant: "secondary" },
      style: {
        border: "1px solid #579DFF",
        color: "#579DFF",
        backgroundColor: "transparent",
      },
    },
    {
      props: { size: "extraLarge" },
      style: {
        padding: "0 5rem",
      },
    },
  ],
};

export default MuiButton;
