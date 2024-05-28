interface HeaderProps {
  title: string
  subtitle?: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header>
      <h1 className="text-5xl text-red-400 lg:max-w-lg font-bold mb-4">
        {title}
      </h1>
      <h2 className="text-4xl text-white lg:max-w-lg font-semibold">
        {subtitle}
      </h2>
    </header>
  )
}
