export default function Background() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(74, 144, 184, 0.1), transparent 34%), radial-gradient(circle at 90% 20%, rgba(74, 144, 184, 0.06), transparent 30%), linear-gradient(#f8f8f6, #f4f3ef)"
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
        }}
      />
    </>
  );
}
