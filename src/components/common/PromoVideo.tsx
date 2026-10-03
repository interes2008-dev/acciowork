import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { PromoVideoDef } from "@/lib/promo-videos";

const WIDE_MQ = "(min-width: 768px)";

/**
 * Lazy promo video. SSR renders only the responsive poster; the <video> is
 * mounted when the block nears the viewport, autoplays muted, pauses when it
 * leaves the screen and waits for a click if the reader prefers reduced motion.
 */
export function PromoVideo({ video }: { video: PromoVideoDef }) {
  const L = video.labels;
  const boxRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"wide" | "tall" | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e.isIntersecting;
        if (e.isIntersecting) setMode((m) => m ?? (window.matchMedia(WIDE_MQ).matches ? "wide" : "tall"));
        const v = vidRef.current;
        if (!v) return;
        if (!e.isIntersecting && !v.paused) v.pause();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    const mq = window.matchMedia(WIDE_MQ);
    const onChange = () => setMode((m) => (m ? (mq.matches ? "wide" : "tall") : m));
    mq.addEventListener("change", onChange);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, []);

  // Autoplay (muted) once the video is mounted and actually on screen.
  useEffect(() => {
    const v = vidRef.current;
    const el = boxRef.current;
    if (!v || !el || reduced) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.5) v.play().catch(() => undefined);
        else if (!v.paused) v.pause();
      },
      { threshold: [0, 0.5] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode, reduced]);

  const toggle = () => {
    const v = vidRef.current;
    if (!v) {
      setMode(window.matchMedia(WIDE_MQ).matches ? "wide" : "tall");
      return;
    }
    if (v.paused) v.play().catch(() => undefined);
    else v.pause();
  };

  const toggleSound = () => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => undefined);
  };

  const cur = mode ? video[mode] : null;

  return (
    <figure className="my-8">
      <div
        ref={boxRef}
        className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-3xl border border-border/70 bg-neutral-950 shadow-lg md:aspect-video md:max-w-none"
      >
        <picture>
          <source media={WIDE_MQ} srcSet={video.wide.poster} />
          <img
            src={video.tall.poster}
            alt={video.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>

        {cur ? (
          <video
            key={cur.src}
            ref={vidRef}
            src={cur.src}
            poster={cur.poster}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onClick={toggle}
            aria-label={video.title}
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          />
        ) : null}

        {!playing ? (
          <button
            type="button"
            onClick={toggle}
            aria-label={L.play}
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-xl">
              <Play className="ms-1 h-7 w-7" fill="currentColor" />
            </span>
          </button>
        ) : null}

        {cur ? (
          <div className="absolute bottom-3 end-3 flex gap-2">
            {playing ? (
              <button
                type="button"
                onClick={toggle}
                aria-label={L.pause}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
              >
                <Pause className="h-4 w-4" />
              </button>
            ) : null}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? L.soundOn : L.soundOff}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        ) : null}
      </div>
      <figcaption className="mt-3 text-center text-sm text-foreground/60">{video.caption}</figcaption>
    </figure>
  );
}
