# Angel Proof

Angel Proof is a privacy-first web application for checking whether a file has changed. It computes a SHA-256 fingerprint locally in the browser, creates a portable JSON receipt, and can optionally anchor only that fingerprint to Solana Devnet through a wallet-signed Memo Program transaction.

The original photo, video, audio file, or document never leaves the user's device.

## What it proves

Angel Proof verifies byte-level file integrity: a matching fingerprint means the tested file is identical to the file used to create the receipt. It does **not** prove truth, authorship, provenance, ownership, or legal admissibility.

## Judge quick test

1. Open the live application in a modern desktop or mobile browser.
2. Choose any non-sensitive test file and download its receipt.
3. Open **Verify evidence**, then select the same file and the downloaded JSON receipt.
4. The application should report an exact local match.

No account or wallet is required for this core flow. Optional Solana anchoring requires Phantom configured for Devnet and test SOL; no real funds are needed.

## Technology

- HTML5, CSS3, and JavaScript Progressive Web App
- Web Crypto API for local SHA-256 hashing
- Portable `angel-proof/receipt/v1` JSON receipts
- Solana Web3.js, Solana Memo Program, Phantom, and Solana Devnet RPC
- Service worker for installability and offline reuse of the application shell

## Privacy and security boundaries

- Files are processed in browser memory and are not uploaded by Angel Proof.
- A receipt contains the file name, size, media type, last-modified timestamp, fingerprint, and optional public blockchain metadata.
- Users should avoid testing sensitive files on devices or browsers they do not trust.
- Solana Devnet is a public test network, not a production legal registry.
- This prototype has not undergone an independent security audit.

## Hackathon disclosure

A basic web prototype existed before the Crypto World's Fair hackathon began on September 14, 2026. Commit `ea4ebb51006073800bdc95374ba0e927c98a3734` is the disclosed pre-hackathon baseline and is tagged `pre-hackathon-baseline`.

Work completed during the official competition period is recorded in subsequent commits and in [CHANGELOG.md](CHANGELOG.md).

## Run locally

Serve the `dist` directory with any static HTTP server. Opening the page directly with a `file://` URL is not recommended because browser security rules may disable modules, the service worker, or wallet integration.

## Project status

Experimental hackathon prototype. The application currently uses Solana Devnet.

