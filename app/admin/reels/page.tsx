"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Edit3, Eye, ExternalLink, Loader2, LogOut, Plus, Save, Trash2, X } from "lucide-react";
import type { ReelInput, ReelItem } from "@/types/reel";

type FormState = {
  title: string;
  subtitle: string;
  facebookUrl: string;
  duration: string;
  order: string;
  isActive: boolean;
};

const emptyForm: FormState = {
  title: "",
  subtitle: "",
  facebookUrl: "",
  duration: "",
  order: "1",
  isActive: true,
};

const passwordStorageKey = "viethealth_admin_reels_password";

function toInput(form: FormState): ReelInput {
  return {
    title: form.title,
    subtitle: form.subtitle,
    facebookUrl: form.facebookUrl,
    duration: form.duration,
    order: Number(form.order || 0),
    isActive: form.isActive,
  };
}

export default function AdminReelsPage() {
  const [password, setPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reels, setReels] = useState<ReelItem[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sortedReels = useMemo(() => [...reels].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)), [reels]);

  async function fetchReels(nextPassword = password) {
    if (!nextPassword) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/reels?admin=1", {
        headers: { "x-admin-reels-password": nextPassword },
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Không thể tải danh sách reels.");

      setReels(data.reels || []);
      setIsLoggedIn(true);
      setPassword(nextPassword);
      localStorage.setItem(passwordStorageKey, nextPassword);
    } catch (fetchError) {
      setIsLoggedIn(false);
      setError(fetchError instanceof Error ? fetchError.message : "Không thể đăng nhập admin.");
      localStorage.removeItem(passwordStorageKey);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const storedPassword = localStorage.getItem(passwordStorageKey);
    if (storedPassword) {
      setPasswordInput(storedPassword);
      void fetchReels(storedPassword);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetchReels(passwordInput);
  }

  function resetForm(nextOrder = String(sortedReels.length + 1)) {
    setForm({ ...emptyForm, order: nextOrder });
    setEditingId(null);
    setError("");
    setMessage("");
  }

  function handleEdit(reel: ReelItem) {
    setEditingId(reel.id);
    setForm({
      title: reel.title,
      subtitle: reel.subtitle,
      facebookUrl: reel.facebookUrl,
      duration: reel.duration || "",
      order: String(reel.order),
      isActive: reel.isActive,
    });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setError("");
    setMessage("");

    try {
      const endpoint = editingId ? `/api/reels/${editingId}` : "/api/reels";
      const response = await fetch(endpoint, {
        method: editingId ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-reels-password": password,
        },
        body: JSON.stringify(toInput(form)),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Không thể lưu reel.");

      setMessage(editingId ? "Đã cập nhật reel thành công." : "Đã thêm reel mới thành công.");
      resetForm(String(sortedReels.length + 1));
      await fetchReels(password);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Không thể lưu reel.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(reel: ReelItem) {
    if (!window.confirm(`Xóa reel "${reel.title}"?`)) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/reels/${reel.id}`, {
        method: "DELETE",
        headers: { "x-admin-reels-password": password },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Không thể xóa reel.");

      setMessage("Đã xóa reel.");
      await fetchReels(password);
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Không thể xóa reel.");
    }
  }

  async function toggleActive(reel: ReelItem) {
    try {
      const response = await fetch(`/api/reels/${reel.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-reels-password": password,
        },
        body: JSON.stringify({ isActive: !reel.isActive }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Không thể đổi trạng thái.");
      await fetchReels(password);
    } catch (toggleError) {
      setError(toggleError instanceof Error ? toggleError.message : "Không thể đổi trạng thái.");
    }
  }

  function logout() {
    localStorage.removeItem(passwordStorageKey);
    setPassword("");
    setPasswordInput("");
    setIsLoggedIn(false);
    setReels([]);
    resetForm("1");
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
        <section className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-viet-teal">VietHealth Admin</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">Quản lý Facebook Reels</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Trang này không xuất hiện trong menu. Bảo vệ bằng URL ẩn + password đơn giản không thay thế hệ thống auth chuyên nghiệp.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Password admin</span>
              <input
                type="password"
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20"
                placeholder="Nhập ADMIN_REELS_PASSWORD"
              />
            </label>

            {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-viet-teal px-5 text-sm font-extrabold text-white shadow-lg shadow-viet-teal/20 transition hover:-translate-y-0.5 hover:bg-viet-deep focus:outline-none focus:ring-4 focus:ring-viet-cyan/25 active:translate-y-0.5 disabled:opacity-60"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
              Đăng nhập
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-viet-teal">VietHealth Admin</p>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">Quản lý Facebook Reels</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Thêm/sửa/xóa link Facebook Reel public. Link sẽ được tự động convert sang iframe embed cho section “Câu chuyện người thật”.
            </p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-viet-cyan/20 active:translate-y-0.5"
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </header>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-slate-950">{editingId ? "Sửa Reel" : "Thêm Reel"}</h2>
                <p className="mt-1 text-sm text-slate-500">Chỉ chấp nhận facebook.com/reel/, facebook.com/watch/ hoặc fb.watch/.</p>
              </div>
              {editingId ? (
                <button type="button" onClick={() => resetForm()} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
                  <X className="h-5 w-5" />
                </button>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Tiêu đề</span>
                <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="mt-2 h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20" placeholder="Anh Hùng" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Mô tả ngắn</span>
                <input value={form.subtitle} onChange={(event) => setForm({ ...form, subtitle: event.target.value })} className="mt-2 h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20" placeholder="Phục hồi sau tai nạn giao thông" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Link Facebook Reel</span>
                <input value={form.facebookUrl} onChange={(event) => setForm({ ...form, facebookUrl: event.target.value })} className="mt-2 h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20" placeholder="https://www.facebook.com/reel/xxxxxxxx" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Thời lượng</span>
                  <input value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} className="mt-2 h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20" placeholder="1:28" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Thứ tự</span>
                  <input type="number" value={form.order} onChange={(event) => setForm({ ...form, order: event.target.value })} className="mt-2 h-12 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-viet-teal focus:ring-4 focus:ring-viet-cyan/20" />
                </label>
              </div>
              <label className="flex min-h-12 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4">
                <span className="text-sm font-bold text-slate-700">Bật hiển thị</span>
                <input type="checkbox" checked={form.isActive} onChange={(event) => setForm({ ...form, isActive: event.target.checked })} className="h-5 w-5 accent-viet-teal" />
              </label>

              {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
              {message ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{message}</p> : null}

              <button type="submit" disabled={isSaving} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-viet-teal px-5 text-sm font-extrabold text-white shadow-lg shadow-viet-teal/20 transition hover:-translate-y-0.5 hover:bg-viet-deep focus:outline-none focus:ring-4 focus:ring-viet-cyan/25 active:translate-y-0.5 disabled:opacity-60">
                {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Lưu Reel
              </button>
            </form>
          </section>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <h2 className="text-xl font-black text-slate-950">Danh sách reels đã lưu</h2>
                <p className="mt-1 text-sm text-slate-500">Public section chỉ lấy reels active và sort theo order tăng dần.</p>
              </div>
              <button type="button" onClick={() => fetchReels(password)} className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                Làm mới
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">Tiêu đề</th>
                    <th className="px-5 py-4">Mô tả</th>
                    <th className="px-5 py-4">Link Facebook</th>
                    <th className="px-5 py-4">Order</th>
                    <th className="px-5 py-4">Trạng thái</th>
                    <th className="px-5 py-4">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedReels.map((reel) => (
                    <tr key={reel.id} className="align-top">
                      <td className="px-5 py-4 font-bold text-slate-950">{reel.title}</td>
                      <td className="px-5 py-4 text-slate-600">{reel.subtitle || "—"}</td>
                      <td className="max-w-[260px] px-5 py-4">
                        <a href={reel.facebookUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 break-all font-semibold text-viet-teal hover:underline">
                          {reel.facebookUrl}
                          <ExternalLink className="h-3.5 w-3.5 flex-none" />
                        </a>
                      </td>
                      <td className="px-5 py-4 font-bold text-slate-700">{reel.order}</td>
                      <td className="px-5 py-4">
                        <button type="button" onClick={() => toggleActive(reel)} className={`rounded-full px-3 py-1 text-xs font-black ${reel.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"}`}>
                          {reel.isActive ? "Active" : "Inactive"}
                        </button>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => handleEdit(reel)} className="inline-flex h-9 items-center gap-1 rounded-xl border border-slate-300 px-3 font-bold text-slate-700 transition hover:bg-slate-50">
                            <Edit3 className="h-3.5 w-3.5" /> Sửa
                          </button>
                          <a href={reel.facebookUrl} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-1 rounded-xl border border-blue-200 bg-blue-50 px-3 font-bold text-blue-700 transition hover:bg-blue-100">
                            <Eye className="h-3.5 w-3.5" /> Xem thử
                          </a>
                          <button type="button" onClick={() => handleDelete(reel)} className="inline-flex h-9 items-center gap-1 rounded-xl border border-red-200 bg-red-50 px-3 font-bold text-red-700 transition hover:bg-red-100">
                            <Trash2 className="h-3.5 w-3.5" /> Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!sortedReels.length ? (
                    <tr>
                      <td colSpan={6} className="px-5 py-10 text-center text-slate-500">
                        Chưa có reel nào. Hãy thêm reel đầu tiên bằng form bên trái.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}