import { FormModule } from "@form//form.module";

describe("FormModule", () => {
  beforeEach(() => {
    return new FormModule();
  });

  it("should create an instance", () => {
    expect(FormModule).toBeTruthy();
  });
});
