import { NextRequest, NextResponse } from "next/server";
import { deleteReel, isAdminPasswordValid, updateReel } from "@/lib/reels";

type RouteContext = { params: Promise<{ id: string }> };

function getAdminPassword(request: NextRequest) {
  return request.headers.get("x-admin-reels-password") || request.cookies.get("admin_reels_password")?.value || null;
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!isAdminPasswordValid(getAdminPassword(request))) {
    return NextResponse.json({ error: "Mật khẩu admin không đúng." }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const reel = await updateReel(id, body);
    return NextResponse.json({ reel });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Không thể cập nhật reel." }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminPasswordValid(getAdminPassword(request))) {
    return NextResponse.json({ error: "Mật khẩu admin không đúng." }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    await deleteReel(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Không thể xóa reel." }, { status: 400 });
  }
}
