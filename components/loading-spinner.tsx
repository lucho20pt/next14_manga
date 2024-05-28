import Image from 'next/image'

export const LodingSpinner = () => {
  return (
    <aside className=''>
      <Image
        alt=""
        src="/assets/spinner.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-20"
      />
    </aside>
  )
}
