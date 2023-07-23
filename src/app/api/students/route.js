import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    From: "Ameen",
    Message: "Greetings from Pakistan",
    RequestType: "GET"
  });
}