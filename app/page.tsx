"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_FORM_ID = "mjgndrql";

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [accessEmail, setAccessEmail] = useState("");
  const [heroFormState, submitHeroForm] = useForm(FORMSPREE_FORM_ID);
  const [accessFormState, submitAccessForm] = useForm(FORMSPREE_FORM_ID);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: "#eff6ff",
          borderBottom: "1px solid #dbeafe",
          color: "#1d4ed8",
          padding: "8px 16px",
          textAlign: "center",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        🎉 DealClaw Beta is open for UK Micro-businesses & Pakistani SMBs!
      </div>

      {/* Nav — full width */}
      <nav
        style={{
          borderBottom: "1px solid #e2e8f0",
          background: "#ffffff",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#2563eb",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(37, 99, 235, 0.25)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5" />
              <path
                d="M5 7l1.5 1.5L9 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", letterSpacing: "-0.02em" }}>
            DealClaw
          </span>
        </div>
        <a
          href="#access"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            padding: "8px 18px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            color: "#334155",
            textDecoration: "none",
            background: "#ffffff",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          Request early access
        </a>
      </nav>

      {/* Main content */}
      <div style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "5rem 1.5rem 4rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "5px 14px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#2563eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              marginBottom: "1.5rem",
            }}
          >
            ⚡ AI Deal Detection • Zero Infrastructure Cost
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5.5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "1.25rem",
            }}
          >
            Stop losing deals to a noisy inbox.
            <br />
            <span style={{ color: "#2563eb" }}>
              DealClaw watches your Gmail 24/7.
            </span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            AI scans every email, logs real deals to HubSpot, pings you on Discord,
            and sends replies during UK business hours. Zero setup. Zero monthly bill.
          </p>

          {/* Elevated Hero Input Card */}
          <div
            style={{
              maxWidth: "440px",
              margin: "0 auto",
              background: "#ffffff",
              padding: "8px",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08)",
            }}
          >
            {heroFormState.succeeded ? (
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "10px",
                  padding: "12px 18px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#15803d",
                }}
              >
                ✓ We&apos;ll be in touch within 2 business days.
              </div>
            ) : (
              <form
                onSubmit={submitHeroForm}
                style={{ display: "flex", gap: "8px" }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  style={{
                    flex: 1,
                    height: "42px",
                    padding: "0 14px",
                    fontSize: "14px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: "#0f172a",
                  }}
                  required
                />
                <button
                  type="submit"
                  disabled={heroFormState.submitting}
                  style={{
                    height: "42px",
                    padding: "0 20px",
                    background: "#2563eb",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "10px",
                    cursor: heroFormState.submitting ? "default" : "pointer",
                    opacity: heroFormState.submitting ? 0.7 : 1,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                  }}
                >
                  {heroFormState.submitting ? "Sending..." : "Connect Gmail — free"}
                </button>
              </form>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={heroFormState.errors}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "12px" }}>
            Free beta • No credit card • No setup fee
          </p>

          {/* Stat Anchor Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a" }}>
                $0 / Month
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                Zero overhead
              </div>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a" }}>
                15 Mins
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                Scan frequency
              </div>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a" }}>
                Gemini AI
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                Deal filtering
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#2563eb",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              Four steps from email to closed deal
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              {
                step: "1",
                title: "Gmail scan",
                desc: "DealClaw connects to your Gmail inbox and scans incoming emails every 15 minutes — no forwarding rules, no plugins needed.",
                tag: "Automatic",
                tagBg: "#eff6ff",
                tagColor: "#2563eb",
              },
              {
                step: "2",
                title: "AI deal detection",
                desc: "Gemini AI reads each email and decides — is this a genuine business inquiry or noise? Spam, newsletters, and cold outreach are filtered out.",
                tag: "AI-powered",
                tagBg: "#f0fdf4",
                tagColor: "#15803d",
              },
              {
                step: "3",
                title: "CRM + Discord alert",
                desc: "Confirmed deals are logged automatically in HubSpot CRM. You get a Discord ping with the deal summary so you're never out of the loop.",
                tag: "Automatic",
                tagBg: "#eff6ff",
                tagColor: "#2563eb",
              },
              {
                step: "4",
                title: "You approve, DealClaw sends",
                desc: "When you're ready to reply, approve it in one click. DealClaw sends the email during UK business hours — Monday to Friday, 9am–5pm.",
                tag: "You decide",
                tagBg: "#fffbeb",
                tagColor: "#92400e",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#2563eb",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#0f172a",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: item.tagBg,
                        color: item.tagColor,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Zero cost bar */}
          <div
            style={{
              marginTop: "2rem",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            {[
              "No monthly bill",
              "No cloud setup",
              "Existing Gmail",
              "HubSpot free tier",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#334155",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Early access */}
        <section
          id="access"
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "2rem 1.5rem 5rem",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "3rem 2rem",
              textAlign: "center",
              boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Built for UK micro-businesses & Pakistani SMBs
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                lineHeight: 1.7,
                maxWidth: "440px",
                margin: "0 auto 2rem",
              }}
            >
              Join the beta — we&apos;re working with solo operators and small teams
              who want to stop missing deals buried in their inbox.
            </p>

            {accessFormState.succeeded ? (
              <div
                style={{
                  maxWidth: "380px",
                  margin: "0 auto",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "10px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#15803d",
                }}
              >
                ✓ We&apos;ll be in touch within 2 business days.
              </div>
            ) : (
              <form
                onSubmit={submitAccessForm}
                style={{
                  display: "flex",
                  gap: "8px",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={accessEmail}
                  onChange={(e) => setAccessEmail(e.target.value)}
                  style={{
                    flex: 1,
                    height: "42px",
                    padding: "0 14px",
                    fontSize: "14px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#ffffff",
                    color: "#0f172a",
                  }}
                  required
                />
                <button
                  type="submit"
                  disabled={accessFormState.submitting}
                  style={{
                    height: "42px",
                    padding: "0 20px",
                    background: "#2563eb",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "10px",
                    cursor: accessFormState.submitting ? "default" : "pointer",
                    opacity: accessFormState.submitting ? 0.7 : 1,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
                  }}
                >
                  {accessFormState.submitting ? "Sending..." : "Request access"}
                </button>
              </form>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={accessFormState.errors}
            />
            <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "12px" }}>
              We&apos;ll be in touch within 2 business days.
            </p>
          </div>
        </section>
      </div>

      {/* Footer — full width */}
      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          background: "#ffffff",
          width: "100%",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
          © 2026 DealClaw
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="https://github.com/AsmaIqbal01/openclaw-deal-scout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}