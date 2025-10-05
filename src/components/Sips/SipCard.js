import React from "react";

function getStatusDisplay(status) {
  switch (status) {
    case "active":
      return { label: "ACTIVE", className: "badge badge-active" };
    case "paused":
      return { label: "IN PROGRESS", className: "badge badge-paused" };
    case "cancelled":
      return { label: "CANCELLED", className: "badge badge-cancelled" };
    default:
      return { label: String(status).toUpperCase(), className: "badge" };
  }
}

const SipCard = ({ sip }) => {
  const { label, className } = getStatusDisplay(sip.status);

  return (
    <div className="sip-card">
      <div className="sip-card-header">
        <span className={className}>{label}</span>
      </div>
      <div className="sip-card-body">
        <div className="sip-card-title">{sip.schemeName}</div>
        <div className="sip-card-row">
          <div className="sip-card-meta">
            <div className="sip-card-meta-label">SIP amount</div>
            <div className="sip-card-meta-value">₹{sip.amount.toLocaleString("en-IN")}</div>
          </div>
          {sip.status === "active" && sip.nextInstallmentDate && (
            <div className="sip-card-meta">
              <div className="sip-card-meta-label">Next instalment date</div>
              <div className="sip-card-meta-value">{sip.nextInstallmentDate}</div>
            </div>
          )}
          {sip.status === "paused" && (
            <div className="sip-card-meta">
              <div className="sip-card-meta-label">Monthly SIP date</div>
              <div className="sip-card-meta-value">{sip.monthlyDate} of every month</div>
            </div>
          )}
          {sip.status === "cancelled" && sip.cancelledOn && (
            <div className="sip-card-meta">
              <div className="sip-card-meta-label">Cancelled on</div>
              <div className="sip-card-meta-value">{sip.cancelledOn}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SipCard;
