import { MessageCircleDashed } from "lucide-react";
import React from "react";

export default function Support() {
  return (
    <div className="support-container">
      <div className="container">
        <div className="text-center mb-5">
          <div className="alert alert-secondary mt-3">
            <p className="m-0">Support System is in Maintenance!</p>
          </div>
          <MessageCircleDashed size={100} color="gray" />
        </div>
      </div>
    </div>
  );
}
