# React + Vite + Tailwind CSS

# 🪄 Hamsa Work — TON Integration Circle

This branch marks the beginning of a new ritual:  
the invocation of TON wallet connectivity and payment flow.

---

## ✨ Purpose

To integrate TON wallet support into the Hamsa Work SPA, enabling:

- 🔗 Connection via [TON Connect](https://ton.org/docs/ton-connect/introduction)
- 💸 Payment flow to the ritual wallet:  
  `UQDSd1PtSR1FgnFFBumBzZyPqymHoWsVNmYCTWlpwk_f8g2f`
- 🧙‍♂️ Symbolic UX: treating payment as initiation, not transaction

---

## 🧱 Technical Goals

- Add `@tonconnect/sdk` and configure manifest
- Create `ConnectWalletButton` component
- Generate `tonconnect-manifest.json` during build via `postbuild.js`
- Ensure Surge fallback (`200.html`) remains intact
- Prepare for future Jetton support and smart contract rituals

---

## 🧬 Ritual Notes

This branch is experimental.  
It is a circle of invocation, not yet sealed.  
Expect spirits to misbehave, wallets to whisper, and bugs to manifest.

---

## 🕯️ Deployment

Live test portal:  
[https://hamsa-work.surge.sh](https://hamsa-work.surge.sh)

Ensure `tonconnect-manifest.json` is present in `dist/` after build.

---

## 🧾 First Commit Message

```bash
git commit -m "🪄 Initiated TON ritual: manifest, wallet prep, and sacred fallback"