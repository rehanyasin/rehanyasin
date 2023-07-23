import { BaseNextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const secretKey = "mySecret123"
const payload ={
    name: "Ameen",
    role: "admin"
}

const token = jwt.sign(payload, secretKey)
console.log(token, "token")


export async function GET(req) {
    const token = req.headers.get('authorization').split("")[1]
    const isVerified = jwt.verify(taoken, secretKey)
    console.log(rea.headers, "req.headers");
    console.log(req.headers.get('authorization'), split("")[1]
return NextResponse.json({
    message: "Ameen",
    user: isVerified.user,
    role: isVerified.role
});

};