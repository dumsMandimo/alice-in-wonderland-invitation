"use client";

export default function SketchfabBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      
      <iframe
        title="Alice In Wonderland Props"
        src="https://sketchfab.com/models/a64ff3f27e1c424a8aecbd3f253edb81/embed?autostart=1&preload=1&ui_infos=0&ui_controls=0&ui_stop=0&transparent=1&camera=0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className="w-full h-full"
      />

      

      {/* Required Sketchfab attribution */}
      <div className="absolute bottom-2 right-3 text-xs text-gray-500">
        3D by{" "}
        <a
          href="https://sketchfab.com/iryna.tro"
          target="_blank"
          rel="nofollow"
          className="underline"
        >
          Iryna Troshyna
        </a>{" "}
        on Sketchfab
      </div>
    </div>
  );
}
