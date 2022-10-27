const app = require("../server/index");
const request = require("supertest");
jest.setTimeout(25000);

describe("TESTING NEW REST POST", () => {
  test("New Restaurant post", async () => {
    let data = {
      resName: "FoodySpot",
      resAddress: "2655 Collins Avenue",
      resNumber: "898989",
      resHours: "mon- fri 8-9",
      menu: [
        {
          category: "Breakfast",
          dishes: [
            {
              dish: "",
              description: "",
              price: "",
            },
          ],
        },
        {
          category: "Lunch",
          dishes: [
            {
              dish: "",
              description: "",
              price: "",
            },
          ],
        },
      ],
    };

    await request(app)
      .post("/api/new")
      .send(data)
      .expect(200)
      .expect("Content-type", /json/)
      .then((serverRes) => {
        console.log(serverRes.body);
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body.message.length).toBeGreaterThan(0);
      })
      .catch((err) => console.log(err));
  });
});
