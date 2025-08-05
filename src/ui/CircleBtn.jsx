import React from "react";

const CircleBtn = React.memo(function CircleBtn({ label, children, className = "", ...rest }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`rounded-full border border-gray-300/60 p-2 hover:shadow ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default CircleBtn;
