import React, { useEffect } from "react";
import { appointmentsOverlapNotification } from "~/utils/functions";

export default function SupaBase() {
  useEffect(() => {
    appointmentsOverlapNotification();
  });
  return (
    <>
      <p>Toast</p>
    </>
  );
}
