const request = require("supertest");
const express = require("express");

// Import the app
const app = require("./api");

describe("SRE Metrics Endpoint", () => {
  it("should return system metrics", async () => {
    const response = await request(app).get("/sre-metrics");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("time");
    expect(response.body).toHaveProperty("uptime");
    expect(response.body).toHaveProperty("loadAverage");
    expect(response.body).toHaveProperty("freeMemory");
    expect(response.body).toHaveProperty("totalMemory");

    // Ensure the values are of the expected types
    expect(typeof response.body.time).toBe("string");
    expect(typeof response.body.uptime).toBe("number");
    expect(Array.isArray(response.body.loadAverage)).toBe(true);
    expect(typeof response.body.freeMemory).toBe("number");
    expect(typeof response.body.totalMemory).toBe("number");
  });
});
