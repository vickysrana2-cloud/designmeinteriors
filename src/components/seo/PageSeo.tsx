import React from "react";
import { buildOrganizationSchema } from "@/lib/seo/structured-data";
import { JsonLd } from "./JsonLd";

interface PageSeoProps {
  title?: string;
  description?: string;
  jsonLdData?: Record<string, unknown>;
}

export function PageSeo({ jsonLdData }: PageSeoProps) {
  const schema = jsonLdData || buildOrganizationSchema();
  return <JsonLd data={schema} />;
}
