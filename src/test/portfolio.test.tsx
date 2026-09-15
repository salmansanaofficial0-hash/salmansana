import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Portfolio from "@/pages/Portfolio";
import { articles, projects } from "@/lib/portfolio-data";

describe("portfolio experience", () => {
  it("filters projects by category without leaving stale cards", () => {
    render(<MemoryRouter initialEntries={["/portfolio"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Portfolio /></MemoryRouter>);
    expect(screen.getByRole("heading", { name: "Karbaar" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Digital" }));
    expect(screen.getByRole("heading", { name: "AI Prompting Masterclass" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Karbaar" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });

  it("contains complete, uniquely routed articles", () => {
    expect(new Set(articles.map((article) => article.slug)).size).toBe(articles.length);
    expect(articles.every((article) => article.sections.length > 0)).toBe(true);
  });
});
