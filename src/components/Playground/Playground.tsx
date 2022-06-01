import { PlaygroundProps } from './Playground.types';

export default function Playground({ children }: PlaygroundProps) {
  return (
    <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <div className="absolute inset-0 bg-grid dark:bg-gridDark [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.5))]"></div>
      <div className="relative rounded-xl overflow-auto">{children}</div>
      <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
    </div>
  );
}
