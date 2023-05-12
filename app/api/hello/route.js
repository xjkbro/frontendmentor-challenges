import { NextResponse } from "next/server";
export async function GET(request) {
    return NextResponse.json({
        data: [{ title: "Age Calculator App", challenge: "#", demo: "#" }],
    });
}
