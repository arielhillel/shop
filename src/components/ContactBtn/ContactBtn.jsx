import React from "react";
import "./ContactBtn.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// --------------------Button style-----------------------

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#802C6E",
  "&:hover": {
    backgroundColor: "#A0A0A0",
    color: "#fff",
  },
}));

// -------------------------------------------------------

const ContactBtn = () => {
  return (
    <>
      <div className="contact-btn-area">
        <Link to="/contact">
          <Stack direction="row">
            <ColorButton variant="contained">Contact</ColorButton>
          </Stack>
        </Link>
      </div>
    </>
  );
};

export default ContactBtn;
