import { ComponentProps } from "react";

interface DateProps {
  getYear?: boolean;
}

export const YYYY = (date?: string | number | Date) => new Date(`${date}`).getFullYear();

export default function DateStamp({getYear, ...props}: DateProps & ComponentProps<"time">) {
  const { dateTime } = props;
  return (
    <time {...props}>
      {getYear && (YYYY(`${dateTime}`) ?? "⌛️")}
    </time>
  );
}
