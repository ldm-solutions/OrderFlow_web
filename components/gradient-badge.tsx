type Props = {
  title: string
}

export function GradientBadge({ title }: Props) {
  return (
    <div className="inline-block p-[1px] bg-gradient-to-r from-purple-500/50 via-primary/50 to-pink-500/50 rounded-md">
      <div className="px-3 py-1 bg-background rounded-md">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-pink-400 font-mono font-semibold">
          {title}
        </span>
      </div>
    </div>
  )
}

// export function GradientBadge({ title }: Props) {
//   return (
//     <div className="inline-block p-[1px] bg-gradient-to-br from-zinc-500/50 to-zinc-800/50 rounded-md">
//       <div className="px-3 py-1 bg-background rounded-md">
//         <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-400 to-zinc-800 font-mono font-semibold">
//           {title}
//         </span>
//       </div>
//     </div>
//   )
// }
