import { ExportsComponent } from "./component";

describe("ExportsComponent", () => {

    it("should use default exported module", () => {

        let exportsComponent = new ExportsComponent();

        expect(exportsComponent.format(new Date(2014, 3, 23))).toEqual("2014-04-23");
    });
});
