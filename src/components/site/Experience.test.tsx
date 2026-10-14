import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { ExperienceTabs } from "./Experience";
afterEach(cleanup);
const items = [
  { id: "limenote", label: "LimeNote" },
  { id: "limeai", label: "LimeAI" },
  { id: "limemaps", label: "LimeMaps" },
];
function Harness() {
  const [selected, select] = useState("limenote");
  return (
    <>
      <ExperienceTabs
        items={items}
        selected={selected}
        onSelect={select}
        label="サービスを選ぶ"
      />
      <section
        id={`experience-panel-${selected}`}
        role="tabpanel"
        aria-labelledby={`experience-tab-${selected}`}
      >
        {selected}
      </section>
    </>
  );
}
describe("service selector keyboard access", () => {
  it("moves focus and selected content together and wraps at the last item", () => {
    render(<Harness />);
    const note = screen.getByRole("tab", { name: /LimeNote/ });
    note.focus();
    fireEvent.keyDown(note, { key: "ArrowLeft" });
    const maps = screen.getByRole("tab", { name: /LimeMaps/ });
    expect(maps).toHaveFocus();
    expect(maps).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("limemaps");
    fireEvent.keyDown(maps, { key: "Home" });
    expect(note).toHaveFocus();
    expect(note).toHaveAttribute("tabindex", "0");
    expect(maps).toHaveAttribute("tabindex", "-1");
  });
  it("lets pointer users select the same accessible panel", () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole("tab", { name: /LimeAI/ }));
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName(/LimeAI/);
    expect(screen.getByRole("tabpanel")).toHaveTextContent("limeai");
  });
});
