import Image from "next/image";
export const metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
};
export default function Home() {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {isDev && <p>開発モードです</p>} */}
      <main class="group grid min-h-dvh place-items-center">
        <section>
          <div class="origin-bottom [transform:rotateX(-90deg)]">
            <span class="absolute inset-0 grid place-items-center text-5xl text-white">HA</span>
          </div>
          <div class="origin-top [transform:rotateX(90deg)]">
            <div class="origin-bottom [transform:rotateX(90deg)] group-hover:[transform:rotateX(180deg)]"></div>
          </div>

          <div class="origin-right [transform:rotateY(90deg)]">
            <span class="absolute inset-0 grid place-items-center text-5xl text-white [transform:rotateZ(-90deg)]">
              KO
            </span>
          </div>
          <div class="origin-left [transform:rotateY(-90deg)]"></div>
        </section>
      </main>
    </main>
  );
}
