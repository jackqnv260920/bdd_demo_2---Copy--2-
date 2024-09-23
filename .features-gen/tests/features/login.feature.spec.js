/** Generated from: tests\features\login.feature */
import { test } from "playwright-bdd";

test.describe("Thực hiện chức năng login", () => {

  test("user thực hiện login", async ({ Given, page, When, And, Then }) => {
    await Given("User thực hiện mở web", null, { page });
    await When("ở màn hình đăng nhập user nhập username và password", null, { page });
    await And("User bấm vào button login", null, { page });
    await Then("hệ thống hiển thị màn hình product", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\login.feature"),
});

const testMetaMap = {
  "user thực hiện login": {"pickleLocation":"4:3"},
};