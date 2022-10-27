const app = require("../server/index");
const request = require("supertest");
jest.setTimeout(20000);

describe("Testing Get", () => {
  test("Testing Get route renders obj of restaurant", async () => {
    await request(app)
      .get("/api/restaurants/62cdc0054b0898f629c7235f")
      .expect(200)
      .expect("Content-type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ menu: expect.any(Array) })
        );
      })
      .catch((err) => console.log(err));
  });

  test("Testing Get with wrong ID gives 404", async () => {
    await request(app)
      .get("/api/restaurants/62cdc00540f629c7235f")
      .expect(404)
      .expect("Content-type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "No Restaurants found" })
        );
      })
      .catch((err) => console.log(err));
  });
});
