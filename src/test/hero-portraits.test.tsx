import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import HeroPortraitSlideshow from "@/components/HeroPortraitSlideshow";

afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });
function setup(reduced = false) {
  vi.useFakeTimers();
  let callback: IntersectionObserverCallback;
  let target: Element;
  vi.stubGlobal("matchMedia", () => ({ matches: reduced, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  vi.stubGlobal("IntersectionObserver", class {
    constructor(cb: IntersectionObserverCallback) { callback = cb; }
    observe(element: Element) { target = element; }
    disconnect = vi.fn();
  });
  const result = render(<HeroPortraitSlideshow/>);
  result.container.querySelectorAll("img").forEach(img => fireEvent.load(img));
  const visibility = (visible: boolean) => act(() => callback([{ target, isIntersecting: visible } as IntersectionObserverEntry], {} as IntersectionObserver));
  visibility(true);
  const activeSource = () => result.container.querySelector(".is-active")?.getAttribute("src");
  const advance = () => act(() => vi.advanceTimersByTime(5000));
  return { ...result, visibility, activeSource, advance };
}

describe("hero portrait slideshow", () => {
  it("advances only the photo, supports pause and stops while out of view", () => {
    const test = setup();
    test.advance();
    expect(test.activeSource()).toBe("/portraits/salman-01.webp");
    fireEvent.click(screen.getByRole("button", { name: "Pause portrait slideshow" }));
    test.advance();
    expect(test.activeSource()).toBe("/portraits/salman-01.webp");
    fireEvent.click(screen.getByRole("button", { name: "Play portrait slideshow" }));
    test.visibility(false);
    test.advance();
    expect(test.activeSource()).toBe("/portraits/salman-01.webp");
    test.visibility(true);
    test.advance();
    expect(test.activeSource()).toBe("/portraits/salman-02.webp");
  });
  it("disables autoplay for reduced motion and still permits manual selection", () => {
    const test = setup(true);
    const initial = test.activeSource();
    test.advance();
    expect(test.activeSource()).toBe(initial);
    fireEvent.click(screen.getByRole("button", { name: "Show portrait 2" }));
    expect(test.activeSource()).toBe("/portraits/salman-01.webp");
    expect(screen.getByRole("button", { name: "Play portrait slideshow" })).toBeDisabled();
  });
  it("skips a failed image instead of showing an empty frame", () => {
    const test = setup();
    fireEvent.error(test.container.querySelectorAll("img")[1]);
    test.advance();
    expect(test.activeSource()).toBe("/portraits/salman-02.webp");
  });
});
