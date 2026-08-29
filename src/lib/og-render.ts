import satori from "satori";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import { OG_FONT_REGULAR_B64, OG_FONT_BOLD_B64, b64ToBytes } from "./og-font";

const fontRegular = b64ToBytes(OG_FONT_REGULAR_B64);
const fontBold = b64ToBytes(OG_FONT_BOLD_B64);

type WasmInput = Response | Promise<Response> | BufferSource | Promise<BufferSource> | WebAssembly.Module;

let wasmReady: Promise<unknown> | null = null;
// Initialize the resvg wasm exactly once. The caller injects how to obtain the
// binary (fetch of the emitted asset url), so this stays runtime-agnostic.
function initResvgOnce(input: () => WasmInput): Promise<unknown> {
  if (!wasmReady) {
    wasmReady = Promise.resolve(input())
      .then((v) => initWasm(v as never))
      .catch((e) => {
        wasmReady = null;
        throw e;
      });
  }
  return wasmReady;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function h(type: string, props: Record<string, any>, ...children: any[]): any {
  const kids = children.filter((c) => c !== null && c !== undefined && c !== "");
  return { type, props: { ...props, children: kids.length === 0 ? undefined : kids.length === 1 ? kids[0] : kids } };
}

export interface OgCard {
  label: string;
  big: string;
  sub: string;
  foot: string;
}

function bigFontSize(big: string): number {
  const n = big.length;
  if (n <= 9) return 150;
  if (n <= 16) return 104;
  if (n <= 28) return 68;
  return 50;
}

function cardElement(card: OgCard): any {
  return h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "630px",
        background: "linear-gradient(135deg,#0E1210 0%,#123A2A 100%)",
        color: "white",
        padding: "64px",
        fontFamily: "Liberation Sans",
      },
    },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: "14px", fontSize: "34px", fontWeight: 700 } },
      h("div", {
        style: {
          display: "flex",
          width: "0px",
          height: "0px",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "34px solid #17B26A",
        },
      }),
      h("div", { style: { display: "flex" } }, "Accio Work"),
    ),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", marginTop: "auto", gap: "8px" } },
      h("div", { style: { display: "flex", fontSize: "30px", color: "#7CE7C2", fontWeight: 700 } }, card.label),
      h(
        "div",
        { style: { display: "flex", fontSize: bigFontSize(card.big) + "px", fontWeight: 700, lineHeight: "1.05", maxWidth: "1040px" } },
        card.big,
      ),
      card.sub
        ? h("div", { style: { display: "flex", fontSize: "30px", color: "rgba(255,255,255,0.72)" } }, card.sub)
        : null,
    ),
    h("div", { style: { display: "flex", marginTop: "40px", fontSize: "25px", color: "rgba(255,255,255,0.5)" } }, card.foot),
  );
}

export async function renderOg(card: OgCard, wasmInput: () => WasmInput): Promise<Uint8Array> {
  const svg = await satori(cardElement(card), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Liberation Sans", data: fontRegular.buffer as ArrayBuffer, weight: 400, style: "normal" },
      { name: "Liberation Sans", data: fontBold.buffer as ArrayBuffer, weight: 700, style: "normal" },
    ],
  });
  await initResvgOnce(wasmInput);
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
