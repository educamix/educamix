import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface SubjectCardProps {
  label: string;
  linkTo: string;
}

function SubjectCard({ label, linkTo }: SubjectCardProps) {
  return (
    <Link
      to={linkTo}
      className={clsx(
        'w-full rounded-md h-16 flex justify-center',
        'items-center text-white font-medium bg-white/15 block',
        'border border-slate-500',
      )}
    >
      {label}
    </Link>
  )
}

export { SubjectCard }
