import React from "react";

export default function Logo({ size = 32, className = "" }) {
  return (
    <img src={`${process.env.PUBLIC_URL}/em-logo.png`} width={size} height={size} alt="Effective Mathematicians" className={className} data-testid="em-logo-img" loading="eager" decoding="async" style={{ display: "block", objectFit: "contain" }} />
  );
}