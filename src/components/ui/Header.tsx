import Link from "next/link"

function Header() {
  return (
    <div className="flex flex-col sm:flex-row bg-green-800 justify-between items-center p-7">
        <h1 className="text-white font-semibold">
          <Link className="text-lg"href='/'>Masjid-E-Khazra</Link>
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
          <Link href="/prayer-times" className="mr-3 text-white font-semibold" >Prayer Times</Link>
          <Link href="/contact" className="mr-3 text-white font-semibold">Contact</Link>
          <Link href="donation" className="mr-3 text-white font-semibold">Donations</Link>
        </div>
    </div>
  )
}

export default Header;