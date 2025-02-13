const request = require("supertest");
const app = require("./index");

describe("GET /sre-metrics", () => {
  it("should return a JSON response with status 'I'm fine!'", async () => {
    const res = await request(app).get("/sre-metrics");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "I'm fine!" });
  });
});