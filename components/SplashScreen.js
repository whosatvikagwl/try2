export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img src="/logo.png" alt="ASCII Logo" className="h-40 w-auto animate-fadeIn" />
    </div>
  );
}
