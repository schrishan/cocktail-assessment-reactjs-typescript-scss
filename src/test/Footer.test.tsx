import { render, screen } from "@testing-library/react";
import { Footer } from "../components";

describe("Show content", () => {
  it("should appear footer content", () => {
    render(<Footer/>); 
    expect(
      screen.getByText(/Copyright © 2023, All Right Reserved Sadith/)
    ).toBeInTheDocument();
  });
});