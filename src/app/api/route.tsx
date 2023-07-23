//basic code shared by Ameen Alam

import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    From: "Ameen",
    Message: "Greetings from Pakistan",
    RequestType: "GET"
  });
}

export async function POST(request) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Ameen",
      Message: "Update Post request message",
      RequestType: "POST"
    });
  }
  else {
    return new NextResponse('Please include your name in the POST request');
  }
}

export async function PUT(request) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Ameen",
      Message: "Update PUT request message",
      RequestType: "PUT"
    });
  }
  else {
    return new NextResponse('Please include your name in the PUT request');
  }
}

export async function DELETE(request) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Ameen",
      Message: "message deleted",
      RequestType: "DELETE"
    });
  }
  else {
    return new NextResponse('Please include your name in the DELETE request');
  }
}
