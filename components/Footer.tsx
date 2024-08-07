export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <section className="bg-blue-900 text-center text-white py-2">
        <div>test</div>
      </section>
      <section className="bg-blue-950 text-xs text-center text-white py-2">
        <div>&copy; <span>{year}</span> Corporate. All rights reserved.</div>
      </section>
    </footer>
  )
}
