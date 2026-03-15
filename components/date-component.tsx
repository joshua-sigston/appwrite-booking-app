"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { MoveDown } from "lucide-react";
import { useState } from "react";

export default function DateComponent() {
  const [openStart, setOpenStart] = useState(false);
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [openEnd, setOpenEnd] = useState(false);
  const [dateEnd, setDateEnd] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Book this Room</h3>
      <DatePicker
        open={openStart}
        onOpenChange={setOpenStart}
        date={dateStart}
        setDate={setDateStart}
        label="Check-in Date"
        id="date-picker-start"
      />
      <DatePicker
        open={openEnd}
        onOpenChange={setOpenEnd}
        date={dateEnd}
        setDate={setDateEnd}
        label="Check-out Date"
        id="date-picker-end"
      />
    </div>
  );
}

interface DatePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  label: string;
  id: string;
}

function DatePicker({
  open,
  onOpenChange,
  date,
  setDate,
  label,
  id,
}: DatePickerProps) {
  return (
    <FieldGroup className="flex-row">
      <Field className="flex-1">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <Popover open={open} onOpenChange={onOpenChange}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id={id}
              className="w-32 justify-between font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <MoveDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(d) => {
                setDate(d);
                onOpenChange(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="flex-1">
        <FieldLabel htmlFor={`${id}-time`}>
          {label.replace("Date", "Time")}
        </FieldLabel>
        <Input
          type="time"
          id={`${id}-time`}
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>
  );
}
