import React, { useMemo, useState } from "react";
import SipCard from "./SipCard";

const MOCK_SIPS = [
  {
    id: "sip-1",
    schemeName: "Edelweiss Large Cap Growth",
    amount: 100,
    status: "active",
    nextInstallmentDate: "20 Oct 2025",
  },
  {
    id: "sip-2",
    schemeName: "Parag Parikh Flexi Cap Growth",
    amount: 1000,
    status: "paused",
    monthlyDate: "9th",
  },
  {
    id: "sip-3",
    schemeName: "Axis Bluechip Fund",
    amount: 500,
    status: "cancelled",
    cancelledOn: "15 Sep 2025",
  },
];

const TABS = [
  { key: "active", label: "Active" },
  { key: "paused", label: "Paused" },
  { key: "cancelled", label: "Cancelled" },
];

const SipsPage = () => {
  const [selectedTab, setSelectedTab] = useState("active");
  const [sips] = useState(MOCK_SIPS);

  const tabCounts = useMemo(() => {
    return sips.reduce(
      (acc, sip) => {
        acc[sip.status] = (acc[sip.status] || 0) + 1;
        return acc;
      },
      { active: 0, paused: 0, cancelled: 0 }
    );
  }, [sips]);

  const filteredSips = useMemo(
    () => sips.filter((sip) => sip.status === selectedTab),
    [sips, selectedTab]
  );

  const monthlyAmount = useMemo(() => {
    // Real-world: show sum for current tab; active shows total running outflow
    return filteredSips.reduce((sum, sip) => sum + Number(sip.amount || 0), 0);
  }, [filteredSips]);

  const headerRightCountLabel = useMemo(() => {
    const label = `${selectedTab.charAt(0).toUpperCase()}${selectedTab.slice(1)} SIPs`;
    return { label, count: filteredSips.length };
  }, [selectedTab, filteredSips.length]);

  return (
    <div className="sips-page">
      <div className="sips-page-header">
        <div className="sips-summary">
          <div className="sips-summary-label">Monthly SIP amount</div>
          <div className="sips-summary-value">₹{monthlyAmount.toLocaleString("en-IN")}</div>
        </div>
        <div className="sips-summary sips-summary-right">
          <div className="sips-summary-label">{headerRightCountLabel.label}</div>
          <div className="sips-summary-value">{headerRightCountLabel.count}</div>
        </div>
      </div>

      <div className="sips-toolbar">
        <div className="sips-tabs" role="tablist">
          {TABS.map((tab) => {
            const isActive = selectedTab === tab.key;
            const count = tabCounts[tab.key] || 0;
            return (
              <button
                key={tab.key}
                className={`sips-tab ${isActive ? "active" : ""}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedTab(tab.key)}
              >
                <span>{tab.label}</span>
                <span className="sips-tab-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="sip-list">
        {filteredSips.map((sip) => (
          <SipCard key={sip.id} sip={sip} />
        ))}
      </div>

      <div className="sips-footer-note">
        Cancelled SIP details will not be displayed here. Existing investments
        can be tracked through the portfolio.
      </div>
    </div>
  );
};

export default SipsPage;
