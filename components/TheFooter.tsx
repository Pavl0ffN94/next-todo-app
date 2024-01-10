"use client";
import { memo } from "react";

const TheFooterImpl = () => {
  return <footer className="container">Created by &copy; Pavl0ffN </footer>;
};

export const TheFooter = memo(TheFooterImpl);
