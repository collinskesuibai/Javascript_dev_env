const chai = require("chai");
const fs = require("fs");
const jsdom = require("jsdom");

describe("this is my first test", () => {
  it("should be true", () => {
    chai.expect(true).to.equals(true);
  });
});

// describe("index.html", () => {
//   it("should have h1 that says Users", done => {
//     const index = fs.readFileSync("./src/index.html", "utf-8");
//     jsdom.JSDOM.env({
//       index,
//       function(err, window) {
//         const h1 = window.document.getElementsByTagName("h1")[0];
//         chai.expect(h1.innerHTML).to.equal("Collins");
//         done();
//         window.close();
//       }
//     });
//   });
// });
