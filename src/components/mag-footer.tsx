export default function MagFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-center text-sm leading-5 text-magGray mb-0">
            &copy; {new Date().getFullYear()} Magnolia Private Capital. All
            rights reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 text-sm leading-5 text-magGray">
          Site by{" "}
          <a className="contents" href="https://coobomedia.com" target="_blank">
            Coobo Media
          </a>
        </div>
      </div>
    </footer>
  )
}
