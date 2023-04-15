const translate = require("./task");


describe("Task Parser", () => {
    it("translate d to half a dev day", () => {
        expect(translate("d")).toEqual({ "Dev": 0.5 });
    })
    it("translate D to one dev day", () => {
        expect(translate("D")).toEqual({ "Dev": 1.0 });
    })
    it("translate dD to one and a half dev day", () => {
        expect(translate("dD")).toEqual({ "Dev": 1.5 });
    })
    it("translate q to half a qa day", () => {
        expect(translate("q")).toEqual({ "QA": 0.5 });
    })
    it("translate qQ to half a qa day", () => {
        expect(translate("qQ")).toEqual({ "QA": 1.5 });
    })
    it("translate dddQ to half a qa day", () => {
        expect(translate("dddQ")).toEqual({ "Dev": 1.5, "QA": 1.0 });
    })
    it("translate b to half a blocked day", () => {
        expect(translate("b")).toEqual({ "Blocked": 0.5 });
    });
    it("translate m as an unknown task", () => {
        expect(translate("m")).toEqual({ "Unknown": 0 });
    });
});