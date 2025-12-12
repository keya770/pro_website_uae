"use client";

import { useEffect } from "react";

type Props = {
  basePath: string;
};

const BasePathStyle = ({ basePath }: Props) => {
  useEffect(() => {
    const normalized = basePath || "";
    const root = document.documentElement;

    root.style.setProperty("--base-path", normalized);
    root.dataset.basePath = normalized;
  }, [basePath]);

  return null;
};

export default BasePathStyle;
