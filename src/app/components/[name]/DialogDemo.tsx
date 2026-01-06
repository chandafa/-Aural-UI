"use client";

import { useState } from "react";
import { Dialog, DialogButton } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

export function DialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black/5 rounded-xl border border-black/5 dark:bg-white/5 dark:border-white/5">
      <Button 
        variant="primary" 
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
      >
        Open Dialog
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog Title"
        description="Dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
        footer={
          <>
            <DialogButton variant="secondary" onClick={() => setIsOpen(false)}>
              Action 2
            </DialogButton>
            <DialogButton variant="primary" onClick={() => setIsOpen(false)}>
              Action 1
            </DialogButton>
          </>
        }
      />
    </div>
  );
}
