import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-4 border-gray-300 rounded">
      <div className="border border-gray-300 rounded">
        <h1 className="text-xl border-b pb-2 mb-4">
          {title} Amount
        </h1>
        <div className="space-y-4 border border-gray-300 rounded">
          {children}
        </div>
      </div>
    </div>
  );
}
