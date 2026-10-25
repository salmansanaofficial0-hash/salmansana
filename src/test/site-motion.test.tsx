import { act, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import SiteMotion from "@/components/SiteMotion";

afterEach(() => vi.unstubAllGlobals());

function setup(reduced = false) {
  let intersect: IntersectionObserverCallback;
  const observe = vi.fn();
  const disconnect = vi.fn();
  const cancel = vi.fn();
  vi.stubGlobal("matchMedia", () => ({ matches: reduced, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  vi.stubGlobal("IntersectionObserver", class {
    observe = observe;
    unobserve = vi.fn();
    disconnect = disconnect;
    constructor(callback: IntersectionObserverCallback) { intersect = callback; }
  });
  vi.stubGlobal("ResizeObserver", class { observe = vi.fn(); disconnect = vi.fn(); });
  const animation = { cancel, onfinish: null };
  const animate = vi.fn(() => animation);
  const host = document.createElement("div");
  host.id = "root";
  const card = document.createElement("a");
  card.className = "ref-project";
  Object.defineProperty(card, "animate", { value: animate });
  host.append(card);
  document.body.append(host);
  const result = render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><SiteMotion /></MemoryRouter>, { container: host.appendChild(document.createElement("div")) });
  return { ...result, host, card, observe, disconnect, cancel, animate, enter: () => act(() => intersect([{ target: card, isIntersecting: true, boundingClientRect: card.getBoundingClientRect(), intersectionRatio: 1, intersectionRect: card.getBoundingClientRect(), rootBounds: null, time: 0 }], {} as IntersectionObserver)) };
}

describe("public page motion", () => {
  it("reveals visible cards, discovers later content and cancels motion on unmount", async () => {
    const test = setup();
    expect(test.observe).toHaveBeenCalledWith(test.card);
    test.enter();
    expect(test.animate).toHaveBeenCalledOnce();
    const later = document.createElement("a");
    later.className = "ref-project";
    await act(async () => { test.host.append(later); });
    expect(test.observe).toHaveBeenCalledWith(later);
    test.unmount();
    expect(test.cancel).toHaveBeenCalledOnce();
    expect(test.disconnect).toHaveBeenCalledOnce();
    test.host.remove();
  });
  it("keeps content visible without starting decorative motion for reduced-motion users", () => {
    const test = setup(true);
    test.enter();
    expect(test.animate).not.toHaveBeenCalled();
    expect(test.card.style.opacity).toBe("");
    test.unmount();
    test.host.remove();
  });
});
