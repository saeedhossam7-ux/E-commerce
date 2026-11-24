"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function EmptySearchState() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const rawQuery = (searchParams.get("search") ?? "").trim();

  const handleResetSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <div className="mx-auto my-10 max-w-lg rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        لا توجد منتجات تطابق بحثك
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
        {rawQuery ? (
          <>
            لم نعثر على أي نتائج لكلمة{" "}
            <span className="rounded bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 dark:bg-zinc-800 dark:text-emerald-400">
              &ldquo;{rawQuery}&rdquo;
            </span>
            . جرّب كلمة تانية أو امسح البحث لعرض كل المنتجات.
          </>
        ) : (
          "لا توجد منتجات متاحة للعرض حالياً."
        )}
      </p>

      {rawQuery && (
        <button
          type="button"
          onClick={handleResetSearch}
          className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
        >
          <FontAwesomeIcon icon={faRotateLeft} className="text-xs" />
          <span>عرض جميع المنتجات</span>
        </button>
      )}
    </div>
  );
}