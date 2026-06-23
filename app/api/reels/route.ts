import { NextRequest, NextResponse } from "next/server";
import { createReel, getReels, isAdminPasswordValid } from "@/lib/reels";

function getAdminPassword(request: NextRequest) {
  return request.headers.get("x-admin-reels-password") || request.cookies.get("admin_reels_password")?.value || null;
}

export async function GET(request: NextRequest) {
  const isAdmin = request.nextUrl.searchParams.get("admin") === "1";

  if (isAdmin && !isAdminPasswordValid(getAdminPassword(request))) {
    return NextResponse.json({ error: "Mật khẩu admin không đúng." }, { status: 401 });
  }

  const reels = await getReels({ activeOnly: !isAdmin });
  return NextResponse.json({ reels });
}

export async function POST(request: NextRequest) {
  if (!isAdminPasswordValid(getAdminPassword(request))) {
    return NextResponse.json({ error: "Mật khẩu admin không đúng." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const reel = await createReel(body);
    return NextResponse.json({ reel }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Không thể lưu reel." }, { status: 400 });
  }
}
