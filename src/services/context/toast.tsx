import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

export const ToastProvider: FC = ({ children }) => {
  return (
    <>
      <Toaster
        position={"bottom-right"}
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            margin: "40px",
            background: "#1A202C",
            color: "#fff",
            zIndex: 1,
          },
          duration: 5000,
          success: {
            duration: 8000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            style: {
              background: "#f44336",
            },
            duration: 8000,
          },
        }}
      />
      {children}
    </>
  );
};
