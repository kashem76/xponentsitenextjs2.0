// components/careers/detail/career-details-share-job-link.tsx
"use client";

import { useState } from "react";

export function CareerDetailsShareJobLink() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <button
      onClick={handleCopyLink}
      className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
    >
      {copied ? "Link Copied!" : "Share This Job"}
    </button>
  );
}
