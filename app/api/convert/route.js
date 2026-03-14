// app/api/convert/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "南瓜树转换器 API 已就绪！" });
}