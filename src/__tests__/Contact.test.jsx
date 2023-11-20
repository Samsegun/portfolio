import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Contact from "../routes/Contact";

test("button is rendered on initial load", async () => {
    const contact = render(
        <StaticRouter>
            <Contact />
        </StaticRouter>
    );

    const submitButton = await contact.getByTestId("formSubmit");
    expect(submitButton).toBeDefined();

    contact.unmount();
});
