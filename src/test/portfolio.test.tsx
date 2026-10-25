import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Portfolio from "@/pages/Portfolio";
import { articles, projects } from "@/lib/portfolio-data";

describe("portfolio experience", () => {
  it("filters projects by category without leaving stale cards", () => {
    render(<MemoryRouter initialEntries={["/portfolio"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Portfolio /></MemoryRouter>);
    expect(screen.getByRole("heading", { name: "Karbaar" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Developer" }));
    expect(screen.getByRole("heading", { name: "Inspiration Lab (ilab.pk)" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Karbaar" })).not.toBeInTheDocument();

    expect(screen.queryByRole("heading", { name: "Learnoa" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Founder" }));
    expect(screen.getByRole("heading", { name: "Learnoa" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Karbaar" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Inspiration Lab (ilab.pk)" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(projects.map(p => p.title)).toEqual(["Inspiration Lab (ilab.pk)", "Karbaar", "Learnoa"]);
  });

  it("contains complete, uniquely routed articles", () => {
    expect(new Set(articles.map((article) => article.slug)).size).toBe(articles.length);
    expect(articles.every((article) => article.sections.length > 0)).toBe(true);
  });
});
