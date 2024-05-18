import React from "react";
import { LongLogo } from "../icons";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material";
import { primary } from "@/themes/customs/palette";

const inter = Inter({ subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="flex items-center justify-center bg-[var(--darkBrown)] p-4">
      <div className="container flex items-center justify-between relative">
        <LongLogo className="h-6 w-auto" />
        <div className="flex items-center justify-center gap-x-1 absolute left-0 right-0">
          {navLinks.map((link) => {
            return (
              <Button
                key={link.title}
                className={`${inter.className} `}
                color="secondary"
                sx={{
                //   color: "primary.background",
                  fontSize: "12px",
                  fontWeight: "300",
                  borderRadius: "9999px",
                  paddingX: "16px",
                  ":hover": {
                    // backgroundColor: primary.highlight,
                    // color: secondary.contrastText,
                  },
                }}
              >
                {link.title}
              </Button>
            );
          })}
        </div>
        <Button
          variant="outlined"
          className={`${inter.className}`}
          sx={{
            color: "primary.background",
            borderRadius: "9999px",
            fontWeight: "300",
            fontSize: "12px",
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

const navLinks = [
  {
    title: "For Shops",
    path: "/",
  },
  {
    title: "For Customers",
    path: "/",
  },
  {
    title: "Our Story",
    path: "/",
  },
  {
    title: "Guide",
    path: "/",
  },
  {
    title: "Contact Us",
    path: "/",
  },
];
