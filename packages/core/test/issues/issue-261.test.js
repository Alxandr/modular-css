"use strict";

const { find } = require("test-utils/fixtures.js");

const Processor = require("../../processor.js");

describe("/issues", () => {
    describe("/261", () => {
        it("should allow colons in rules that also use :external()", async () => {
            var processor = new Processor();
            
            await processor.file(find("261/2.css"));

            const result = await processor.output();
            
            expect(result.css).toMatchSnapshot();
        });
    });
});
