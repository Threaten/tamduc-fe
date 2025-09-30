import React from "react";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  data: SerializedEditorState;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichTextRenderer(props: Props) {
  const { className, data, ...rest } = props;

  const adminBase = (process.env.ADMIN_API_ENDPOINT || "").replace(/\/$/, "");

  // Generic deep transform that preserves structure; we don't strictly type the Payload editor JSON shape here.
  function transform<T>(value: T): T {
    if (typeof value === "string") {
      // Only prefix if it starts with /api/media and not already fully qualified with the admin base.
      if (value.startsWith("/api/media")) {
        if (adminBase && !value.startsWith(adminBase)) {
          return `${adminBase}${value}` as T;
        }
      }
      return value;
    }
    if (Array.isArray(value))
      return value.map((v) => transform(v)) as unknown as T;
    if (value && typeof value === "object") {
      const out: Record<string, unknown> = {};
      for (const k of Object.keys(value as Record<string, unknown>)) {
        out[k] = transform((value as Record<string, unknown>)[k]);
      }
      return out as unknown as T;
    }
    return value;
  }

  const normalized = transform<typeof data>(data);

  const wrapperClass = className
    ? `${className} richtext-content `
    : "richtext-content";

  return (
    <div className={wrapperClass} {...rest}>
      <RichText data={normalized} />
    </div>
  );
}
